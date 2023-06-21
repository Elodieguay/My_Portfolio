'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm("mbjevlzq");
  if (state.succeeded) {
      return (
    <>
    <div id='contact' className='max-w-7xl h-20 z-[100] py-10 m-auto relative'>
    <h1 className=' surligner  w-96 uppercase font-bold text-6xl tracking-normal text-[#0f3b56] m-5'> Contact.</h1>
    </div>
      <div className=' Thanks  h-96 w-full flex justify-center items-center  font-bold text-5xl'>Merci et à très vite!</div>;
    </>
      )
  }
  return (
    <>
    <div id='contact' className=' max-w-7xl h-20 z-[100] py-10 m-auto  relative'>
    <h1 className=' surligner w-96 uppercase font-bold text-7xl tracking-normal text-[#0f3b56] m-5'> Contact.</h1>
    </div>
    <div className='bg min-h-screen w-full   flex items-center justify-center shadow-xl '>
    <form className=' justify-center flex-col relative flex border-black border-2  w-2/4 h-3/5 rounded-lg m-auto  p-6 max-w-7xl box-border' id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/mbjevlzq" method="post" onSubmit={handleSubmit}>
      <fieldset id="fs-frm-input">
        <label htmlFor='full-name'>Nom</label>
        <input className='border-black border-2' type="text" name="name" id="full-name" placeholder=" Votre nom et prénom" required =""
        />
        <label htmlFor="email">Email</label>
        <input className='border-black border-2' id="email" type="email" name="email" placeholder=' Votre adresse email'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">Message</label>
        <textarea className='border-black border-2' id="message" name="message" placeholder=' Votre message'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </fieldset>
      <button className=' buttonForm text-black border-black border-2 ' type="submit" disabled={state.submitting}>Submit
      </button>
    </form>
    </div>
    </>
  );
}

export default Form
