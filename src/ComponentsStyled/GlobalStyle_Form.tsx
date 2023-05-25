import { createGlobalStyle } from "styled-components";

export const GlobalStyle_Form = createGlobalStyle`
/* Form Styles */

.form-container {
  max-width: 90%;
  margin: 0 auto;
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.form-container h2 {
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 40px;
}

.form-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #2a2a2a;
}

input, textarea, select {
  border: none;
  background-color: #f5f5f5;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  color: #2a2a2a;
  transition: all 0.3s ease-in-out;
}

input:focus, textarea:focus, select:focus {
  outline: none;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

textarea {
  height: 150px;
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232a2a2a'%3E%3Cpath d='M7.4 10.6L12 15.2l4.6-4.6c.4-.4 1-.4 1.4 0s.4 1 0 1.4L12.7 17c-.2.2-.5.3-.7.3s-.5-.1-.7-.3l-5.3-5.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
  padding-right: 40px;
}


`;



