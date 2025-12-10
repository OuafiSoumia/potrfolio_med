import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [result, setResult] = useState("");

  const sendEmail = (event) => {
    event.preventDefault();
    setResult("Sending...");

  const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    emailjs.send(
      'service_1eaiprl',   
      'template_8vfx3yn',    
      formData,
      'U7TQ4ExWopfOxvxAN' 
    )
    .then((res) => {
      console.log(res.text);
      setResult("Form submitted successfully!");
      event.target.reset();
    }, (err) => {
      console.error(err.text);
      setResult("Error sending message. Please try again.");
    });
  };


  return (
   <motion.div
  initial={{ opacity: 0 }} 
  whileInView={{ opacity: 1 }} 
  transition={{ duration: 1 }} 
  id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
>

  <motion.h4 
    initial={{ y: -20, opacity: 0 }} 
    whileInView={{ y: 0, opacity: 1 }} 
    transition={{ delay: 0.3, duration: 0.5 }}
    className='text-center mb-2 text-lg font-Ovo'>
    Contactez-moi
  </motion.h4>

  <motion.h2
    initial={{ y: -20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    className='text-center text-5xl font-Ovo'>
    Entrons en contact
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.7, duration: 0.5 }}
    className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
    J'aimerais avoir de vos nouvelles ! Si vous avez des questions, commentaires ou suggestions, veuillez utiliser le formulaire ci-dessous.
  </motion.p>

  <motion.form
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.9, duration: 0.5 }}
    onSubmit={sendEmail} 
    className='max-w-2xl mx-auto'
  >
    <div className='grid grid-cols-auto gap-6 mt-4 mb-4'>
      <motion.input
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        type="text" placeholder='Votre nom' required
        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
        name='name'
      />

      <motion.input
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        type="email" placeholder='Votre email' required
        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
        name='email'
      />
    </div>

    <motion.textarea 
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.3, duration: 0.6 }}
      rows='6' placeholder='Votre message' required
      className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90'
      name='message'
    ></motion.textarea>
    
    <motion.div className='grid grid-cols-auto gap-6'>
      <motion.button
        whileHover={{ scale: 1.05 }} 
        transition={{ duration: 0.3 }}
        type='submit'
        className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
      >
        Envoyer maintenant <Image src={assets.right_arrow_white} alt='' className='w-4'/>
      </motion.button>
      
      <motion.a
        href="https://calendly.com/khouimohamed99/30min"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 rounded-full py-3 gap-2 bg-blue-600 text-white font-semibold 
                  shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 
                  transition-colors duration-200 mx-auto"
      >
        📅 Réserver un appel
      </motion.a>
    </motion.div>

    <p className='mt-4'>{result}</p>
  </motion.form>
</motion.div>  );
};

export default Contact;
