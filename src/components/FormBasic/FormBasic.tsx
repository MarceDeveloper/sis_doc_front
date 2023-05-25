import { useState } from "react";
// import "./Style.css";

export function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sexo, setSexo] = useState("");
  const [intereses, setIntereses] = useState([]);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    if (name === "nombre") {
      setNombre(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "telefono") {
      setTelefono(value);
    } else if (name === "sexo") {
      setSexo(value);
    } else if (name === "intereses") {
      const selectedIntereses = Array.from(
        event.target.selectedOptions,
        (option: any) => option.value
      );
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log({
      nombre,
      email,
      telefono,
      sexo,
      intereses,
    });
  };

  return (
    <div className="form-container">
      <h2>Formulario de contacto</h2>
      <form>
        <div className="form-field">
          <label htmlFor="name">Nombre completo</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ingrese su nombre completo"
          />
        </div>
        <div className="form-field">
          <label htmlFor="name">Nombre completo</label>
          <input
            type="checkbox"
            id="lala"
            name="lala"
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingrese su correo electrónico"
          />
        </div>
        <div className="form-field">
          <label htmlFor="subject">Asunto</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Ingrese el asunto del mensaje"
          />
          <span>me lleva la fregada</span>
        </div>
        <div className="form-field">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            placeholder="Ingrese su mensaje"
            defaultValue={""}
          />
        </div>
        <div className="form-field">
          <label htmlFor="category">Categoría</label>
          <select id="category" name="category">
            <option value={0}>Seleccione una opción</option>
            <option value={1}>Sugerencias</option>
            <option value={2}>Soporte técnico</option>
            <option value={3}>Información</option>
            <option value={4}>Otros</option>
          </select>
        </div>
        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  );
}
