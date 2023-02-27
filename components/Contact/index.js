import Titles from "../Titles";
import React, { useState, useRef } from "react";
import { validateForm } from "@/validate/validateForm";
import useValidation from "@/hooks/useValidation";
import Button from "../Button";
import emailjs from "@emailjs/browser";
import Check from "../Icons/Check/index";

export default function Contact() {
  const INITIAL_STATE = {
    name: "",
    email: "",
    message: "",
  };

  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Funcion que se ejecuta cuando el usuario hace submit
  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_vgs55vd",
        "template_y7yjl75",
        form.current,
        "NUH1ZdYHL0tqg9HZl"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  console.log(error);

  const { values, errors, handleChange, handleSubmit, handleBlur } =
    useValidation(INITIAL_STATE, validateForm, sendEmail);

  const { name, email, message } = values;
  console.log(values);
  const form = useRef();

  const isButtonDisabled = name === "" || email === "" || message === "";

  //AGREGAR UN MODAL O ALGO QUE LE INDIQUE AL USUARIO QUE SE ENVIO EL MENSAJE
  return (
    <div className='flex flex-col justify-center items-center w-full bg-lightGrey py-topBottom m:px-sectionSidesMobile lg:px-sectionSides '>
      <Titles>CONTACTO</Titles>
      <section>
        {isOpen ? (
          <section className='bg-black/50 min-h-full w-full z-50 top-0 left-0 flex justify-center items-center fixed '>
            <div className='bg-darkGrey duration-400 text-white relative flex md:min-h-[350px] w-[500px] flex-col justify-center items-center gap-4 rounded-xl border border-lightGrey p-6 shadow-inner border-zinc-700/shadow-zinc-700/40 '>
              <h2 className='text-2xl'>El mensaje se envió con exito</h2>
              <Check width={70} height={70} className='stroke-primary' />
              {isOpen ? (
                <Button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  CERRAR
                </Button>
              ) : null}
            </div>
          </section>
        ) : null}

        <button
          className='text-white'
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          X
        </button>
      </section>
      <form
        ref={form}
        onSubmit={handleSubmit}
        action=''
        className=' flex flex-col justify-center items-start lg:w-[45%] sm:w-[60%] m:w-[80%] gap-3 text-white'
      >
        <input
          required
          className=' bg-darkGrey lg:p-3 m:px-3 m:py-2 w-full rounded-xl'
          type='text'
          value={name}
          name='name'
          placeholder='Nombre'
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.name ? (
          <div className='lg:px-3 m:px-2 text-red-500 text-center'>
            {errors.name}
          </div>
        ) : null}

        <input
          required
          className=' bg-darkGrey lg:p-3 m:px-3 m:py-2 w-full rounded-xl'
          type='text'
          value={email}
          name='email'
          placeholder='Email'
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.email ? (
          <div className='lg:px-3 m:px-2 text-red-500 text-center'>
            {errors.email}
          </div>
        ) : null}

        <textarea
          required
          className='bg-darkGrey lg:p-3 m:px-3 m:py-2 w-full resize-none h-36 rounded-xl'
          value={message}
          name='message'
          type='textarea'
          placeholder='Deja tu mensaje'
          onChange={handleChange}
          onBlur={handleBlur}
        ></textarea>

        {errors.message ? (
          <div className='lg:px-3 m:px-2 text-red-500 text-center'>
            {errors.message}
          </div>
        ) : null}

        <Button
          disabled={isButtonDisabled}
          onClick={handleSubmit}
          type='submit'
        >
          ENVIAR
        </Button>
      </form>
    </div>
  );
}
