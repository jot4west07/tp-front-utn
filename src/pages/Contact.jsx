import React, { useState } from 'react';
import '../styles/Contact.css'; 

const Contact = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Función para manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Mostrar los datos del formulario en un popup
    alert(`Nombre: ${formData.name}\nCorreo: ${formData.email}\nMensaje: ${formData.message}`);
    // Limpiar el formulario
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Ingresa tu correo"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Escribe tu mensaje"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
