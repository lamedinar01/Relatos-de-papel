import React from 'react';
import { Building2, Target, Users } from 'lucide-react';

export const About = () => {
    return (

        <div className="container mx-auto px-4 py-8">

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                    <br></br>
                    <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Fundada en 1970, Librería Online nació con la misión de hacer la literatura accesible
                        para todos. A lo largo de los años, hemos evolucionado para adaptarnos a las necesidades
                        cambiantes de nuestros lectores, manteniendo siempre nuestra pasión por los libros y
                        el conocimiento.
                    </p>
                </div>

            </div>
            <div className="row">
                <div className='col-md-6'>
                    <img
                        src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000"
                        alt="Biblioteca"
                        className="img-fluid"
                        style={{ width: '100%' }}

                    />
                </div>
                <div className='col-md-6'>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <Target size={40} className="mx-auto mb-4 text-blue-600" />
                            <h3 className="text-xl font-semibold mb-2">Misión</h3>
                            <p className="text-gray-600">
                                Facilitar el acceso a la literatura y el conocimiento a través de una
                                experiencia de compra única y personalizada.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <Building2 size={40} className="mx-auto mb-4 text-blue-600" />
                            <h3 className="text-xl font-semibold mb-2">Visión</h3>
                            <p className="text-gray-600">
                                Ser la librería en línea líder, reconocida por nuestra excelencia en
                                servicio y compromiso con la cultura.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <Users size={40} className="mx-auto mb-4 text-blue-600" />
                            <h3 className="text-xl font-semibold mb-2">Valores</h3>
                            <p className="text-gray-600">
                                Pasión por la lectura, compromiso con la educación, excelencia en
                                servicio y responsabilidad social.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};