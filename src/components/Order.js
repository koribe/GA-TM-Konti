import React, { useState } from "react";
import "./styles/Order.css";
import { useForm } from "react-hook-form";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

function Order() {
  const [sendSuccess, setSendSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": data.getAttribute("name"),
        ...data,
      }),
    })
      .then((res) => {
        setSendSuccess(true);
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <section id='order'>
      <h2>Kapcsolat</h2>
      <div
        className={
          sendSuccess
            ? "success-animation visible"
            : "success-animation invisible"
        }>
        <svg
          className='checkmark'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 52 52'>
          <circle
            className='checkmark__circle'
            cx='26'
            cy='26'
            r='25'
            fill='none'
          />
          <path
            className='checkmark__check'
            fill='none'
            d='M14.1 27.2l7.1 7.2 16.7-16.8'
          />
        </svg>
        <h3>Köszönjük!</h3>
        <h3>Kollégánk hamarosan felveszi önnel a kapcsolatot</h3>
      </div>
      {/* "handleSubmit" will validate inputs before invoking "onSubmit" */}
      <form
        name='kapcsolat'
        id='order-form'
        className={sendSuccess ? "invisible" : "visible"}
        onSubmit={handleSubmit(onSubmit)}
        data-netlify='true'>
        <ul id='inputs-container'>
          <input type='hidden' name='form-name' value='kapcsolat' />
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
