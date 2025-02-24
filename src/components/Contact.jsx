import React from 'react'
import { assets } from '../../assets/assets'

const Contact = () => {

    // https://docs.web3forms.com/how-to-guides/js-frameworks/react-js/simple-react-contact-form
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "8a27e9d8-a354-491b-91a1-d59dfdc89bb0");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
  };
  return (
    <div id='contact' className='w-full px-[12%] py-10 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Contact with me
      </h4>
      <h2 className='text-center text-5xl font-Ovo'>
        Get in touch
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I'd love to hear from you! If you have any questions, comments, or 
        feedback, please use the form below
      </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>

        <div className='grid-cols-auto gap-6 mt-10 mb-8'>
            <input 
                type="text" 
                placeholder='Enter your name' 
                required
                className='p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                name='name'
            />
            <input 
                type="email" 
                placeholder='Enter your email' 
                required
                className='p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                name='email'
            />
        </div>

        <textarea rows='6' placeholder='Enter your message' required
        className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'
        name='message'></textarea>

        <button 
            className='w-max py-3 px-8 flex items-center justify-between gap-2 bg-black/80 
            text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer'
            type='submit'
        > 
            Submit now <img src={assets.right_arrow_white} alt="" className='w-4 mt-1' />
        </button>

        <p className='mt-4'>{result}</p>
      </form>
    </div>
  )
}

export default Contact