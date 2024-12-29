import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/bookstore');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center bg-black bg-gradient text-white">
      <div className="text-center">
        <BookOpen size={80} className="mb-4" />
        <h1 className="display-4 fw-bold mb-3">Bienvenido a Relatos de papel</h1>
        <p className="lead mb-4">Tu destino para descubrir nuevas historias</p>
        <p className="lead mb-4">Presentado por: Leonardo Andres Medina Ramirez</p>
        <p className="lead mb-4">Desarrollo web fullstack</p>
        <button
          onClick={() => navigate('/bookstore')}
          className="btn btn-light btn-lg px-4"
        >
          Entrar a la Tienda
        </button>
      </div>
    </div>
  );
};