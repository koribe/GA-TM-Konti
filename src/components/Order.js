import React from "react";
import "./styles/Order.css";
import { useForm } from "react-hook-form";

function Order() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section id='order'>
      <h2>Kapcsolat</h2>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form id='order-form' onSubmit={handleSubmit(onSubmit)}>
        <ul id='inputs-container'>
          <li className='input'>
            <label htmlFor='name'>
              Név<em>*</em>
            </label>
            <div className='input-field'>
              <input
                id='name'
                type='text'
                {...register("name", {
                  required: "A mező kitöltése kötelező",
                  minLength: {
                    value: 3,
                    message: "Túl rövid a név",
                  },
                  maxLength: {
                    value: 100,
                    message: "Túl hosszú a név",
                  },
                })}
              />

              {errors.name && (
                <small className='error-msg' role='alert'>
                  {errors.name.message}
                </small>
              )}
            </div>
          </li>

          <li className='input'>
            <label htmlFor='email'>
              Email<em>*</em>
            </label>
            <div className='input-field'>
              <input
                id='email'
                {...register("email", {
                  required: "A mező kitöltése kötelező",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Kérjük, adja meg helyesen email címét!",
                  },
                })}
                type='email'
              />

              {errors.email && (
                <small className='error-msg' role='alert'>
                  {errors.email.message}
                </small>
              )}
            </div>
          </li>

          <li className='input'>
            <label htmlFor='phone'>Telefonszám</label>
            <div className='input-field'>
              <input id='phone' {...register("phone")} type='tel' />
            </div>
          </li>

          <li className='input'>
            <label htmlFor='message'>
              Üzenet<em>*</em>
            </label>
            <div className='input-field'>
              <textarea
                id='message'
                {...register("message", {
                  required: "A mező kitöltése kötelező",
                  maxLength: {
                    value: 2000,
                    message: "Túl hosszú az üzenet",
                  },
                })}
              />

              {errors.message && (
                <small className='error-msg' role='alert'>
                  {errors.message.message}
                </small>
              )}
            </div>
          </li>
        </ul>
        <input className='submit-btn' type='submit' />
      </form>
    </section>
  );
}
export default Order;
