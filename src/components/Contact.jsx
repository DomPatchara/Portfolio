import { assets } from "../../assets/assets";
import { motion } from "framer-motion";
import useSectionInview from "../hook/useInView";
import toast from "react-hot-toast";
import axios from "axios";

const Contact = () => {
  const { ref } = useSectionInview("Contact");

  // https://docs.web3forms.com/how-to-guides/js-frameworks/react-js/simple-react-contact-form

  const onSubmit = async (event) => {
    event.preventDefault();
    const id = toast.loading("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8a27e9d8-a354-491b-91a1-d59dfdc89bb0");

    try {
      await axios.post("https://api.web3forms.com/submit", formData);
      toast.success("Form Submitted Successfully", { id });
      event.target.reset();
    } catch (error) {
      console.log("Error", err);
      toast.error("An unexpected error occurred.");
    }
  };
  return (
    <div ref={ref} id="contact" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='w-full max-w-screen overflow-x-hidden px-[12%] py-10 bg-[url("/assets/public/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
      >
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="text-center mb-2 text-lg font-Ovo"
        >
          Contact with me
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl font-Ovo"
        >
          Get in touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        >
          I'd love to hear from you! If you have any questions, comments, or
          feedback, please use the form below
        </motion.p>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          onSubmit={onSubmit}
          className="max-w-2xl mx-auto"
        >
          <div className="grid-cols-auto gap-6 mt-10 mb-8">
            <motion.input
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: 0.6 }}
              type="text"
              placeholder="Enter your name"
              required
              className="p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-DarkHover/30 dark:border-white/90"
              name="name"
            />
            <motion.input
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              type="email"
              placeholder="Enter your email"
              required
              className="p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-DarkHover/30 dark:border-white/90"
              name="email"
            />
          </div>

          <motion.textarea
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.6 }}
            rows="6"
            placeholder="Enter your message"
            required
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-DarkHover/30 dark:border-white/90"
            name="message"
          ></motion.textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="w-max py-3 px-8 flex items-center justify-between gap-2 bg-black/80 
            text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer dark:bg-transparent dark:border-[0.5px] dark:hover:bg-DarkHover"
            type="submit"
          >
            Submit now{" "}
            <img src={assets.right_arrow_white} alt="" className="w-4 mt-1" />
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
