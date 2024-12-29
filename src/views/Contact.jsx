import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
        <br></br>
      <h1 className="text-3xl font-bold mb-8">Contacto</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <span>contacto@relatosdepapel.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600" />
              <span>123 Calle Principal, Ciudad</span>
            </div>
          </div>

          <form >
            <div className='mb-4'>
              <label className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                required
              />
            </div>
            
            <div className='mb-4'>
              <label className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                required
              />
            </div>
            
            <div className='mb-4'>
              <label className="form-label">
                Mensaje
              </label>
              <textarea
                className="form-control"
                rows={4}
                required
              />
            </div>
            
            <button
              type="submit"
              className="btn btn-primary"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};