import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

export const Checkout = () => {
  const {total, clearCart, items } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    await new Promise(resolve => setTimeout(resolve, 500));

    Swal.fire({
      title: '¡Compra realizada con éxito!',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      clearCart();
      navigate('/bookstore');
    });
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Tu carrito está vacío</h1>
        <button
          onClick={() => navigate('/bookstore')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Volver a la tienda
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Resumen de la Orden</h2>
          <div className="p-4 bg-white rounded-lg shadow">  
            <div className="d-flex flex-column">
              <div className="flex-grow-1 overflow-auto mb-4">
                {items.map((item) => (
                  <div key={item.id} className="card mb-2">
                    <div className="row g-0">
                      <div className="col-2">
                        <img
                          src={item.coverImage}
                          alt={item.title}
                          className="img-fluid rounded-start"
                          style={{ height: '120px', objectFit: 'cover' }}
                        />
                      </div>
                      <div className="col-8">
                        <div className="card-body">
                          <h6 className="card-title">{item.title}</h6>
                          <p className="card-text">${item.price}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group btn-group-sm">

                              <button
                                className="btn btn-outline-secondary"
                                disabled
                              >
                                Cantidad {item.quantity}
                              </button>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg shadow">
            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div>
          <br></br>
          <button
            disabled={isProcessing}
            className="info btn btn-primary"
            onClick={handleSubmit}
          >
            {isProcessing ? 'Procesando...' : 'Pagar'}
          </button>
        </div>
      </div>
    </div>
  );
};