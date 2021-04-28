import React from "react";
import './styles/Order.css';
import { useForm } from 'react-hook-form';

function Order () {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <section id="order">
    <h1>Kapcsolat</h1>
     {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form id="order-form" onSubmit={handleSubmit(onSubmit)}>

      <ul id="inputs-container">
        <li className="input">
      <label htmlFor="name">Név</label>
      <div className="input-field">
      <input
        id="name"
        {...register("name", {
          required: "A mező kitöltése kötelező",
          minLength: {
            value: 3,
            message: "Túl rövid a név"
          },
          maxLength: {
            value:100,
            message: "Túl hosszú a név"
          }
        })}
      />

      {errors.name && <small className="error-msg" role="alert">{errors.name.message}</small>}
      </div>
      </li>
      <li className="input">
      <label htmlFor="email">Email</label>
      <div className="input-field">
      <input
        id="email"
        {...register("email", {
          required: "A mező kitöltése kötelező",
          pattern: {
            value: /\S+@\S+.\S+/,
            message: "Kérjük, adja meg helyesen email címét!"
          }
        })}
        type="email"
      />

      {errors.email && <small className="error-msg" role="alert">{errors.email.message}</small>}
      </div>
      </li>
      </ul>
      <input type="submit" />
    </form>
    </section>
  );
}
export default Order;
