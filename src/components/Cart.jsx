import React, { useEffect } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { useCart } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';

export const Cart = ({ isOpen, onClose }) => {
  const { items, total, removeItem, updateQuantity } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleCheckout = () => {
    onClose();
    navigate('/pago');
  };

  return (
    <>
      {isOpen && (
        <div 
          className="modal-backdrop fade show" 
          onClick={onClose}
          style={{ zIndex: 1040 }}
        />
      )}

      <div 
        className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`}
        tabIndex="-1"
        style={{ 
          visibility: isOpen ? 'visible' : 'hidden',
          zIndex: 1045
        }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title d-flex align-items-center">
            <ShoppingCart size={24} className="me-2" />
            Carrito
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
            aria-label="Close"
          />
        </div>

        <div className="offcanvas-body">
          {!items || items.length === 0 ? (
            <div className="text-center text-muted py-5">
              <ShoppingCart size={48} className="mb-3" />
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            <div className="d-flex flex-column h-100">
              <div className="flex-grow-1 overflow-auto mb-4">
                {items.map((item) => (
                  <div key={item.id} className="card mb-3">
                    <div className="row g-0">
                      <div className="col-4">
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
                                onClick={() => 
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              >
                                -
                              </button>
                              <button 
                              className="btn btn-outline-secondary" 
                              disabled
                              >
                                {item.quantity}
                              </button>
                              <button
                                className="btn btn-outline-secondary"
                                onClick={() => 
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                              >
                                +
                              </button>
                            </div>
                            <button
                              className="btn btn-link text-danger"
                              onClick={() => removeItem(item.id)}
                            >
                              <X size={20} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-top pt-3">
                <div className="d-flex justify-content-between mb-3">
                  <span className="fw-bold">Total:</span>
                  <span className="fw-bold">${total.toFixed(2)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={!items || items.length === 0}
                  className="btn btn-primary w-100"
                >
                  Finalizar Compra
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};