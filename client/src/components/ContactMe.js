import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_40mptef",
        "template_54mqla4",
        e.target,
        "FSbjMbFNlJOLGuiuP"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="max-w-[1100px] mx-auto my-28 ">
      <h1 className="font-tenor text-4xl py-5 tracking-wider w-full text-center">
        CONTACT ME
      </h1>
      <div className="mt-16 lg:flex justify-center">
        <div className="lg:max-w-[320px] px-4">
          <h1 className="font-tenor text-2xl py-5 tracking-wider">
            My Address
          </h1>
          <p className="text-gray-600 pb-3 flex text-sm">
            <ImLocation className="text-4xl my-auto pr-2" />
            Brgy. Poblacion 09 Catanuan, Quezon Philippines (4311)
          </p>
          <p className="text-gray-600 pb-3 flex text-sm">
            <BsFillTelephoneInboundFill className="text-3xl my-auto pr-2" />
            <a href="tel:09079681450">+63-907-968-1450</a>
          </p>
          <p className="text-gray-600 pb-3 flex text-sm">
            <FaFacebookF className="text-2xl my-auto pr-2 ml-1" />
            <a
              href="https://www.facebook.com/carolyn.ollarte.98"
              target="_blank"
              rel="noreferrer"
            >
              My facebook{" "}
            </a>
          </p>
          <p className="text-gray-600 pb-3 flex text-sm">
            <FaTwitter className="text-3xl my-auto pr-2" />
            <a
              href="https://twitter.com/clryyy"
              target="_blank"
              rel="noreferrer"
            >
              My twitter
            </a>
          </p>
          <p className="text-gray-600 pb-3 flex text-sm">
            <FaInstagramSquare className="text-3xl my-auto pr-2" />
            <a
              href="https://www.instagram.com/clyrxsm/"
              target="_blank"
              rel="noreferrer"
            >
              My instagram
            </a>
          </p>
        </div>
        <div className="h-auto w-auto mx-5 ">
          <h1 className="font-tenor text-center text-2xl py-5 tracking-wider">
            Get In Touch
          </h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 lg:flex gap-2 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="h-11 w-[100%] lg:w-[300px] p-2 rounded-md outline-[#E2B8AC]"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                required
                className="h-11 w-[100%]  lg:w-[300px] p-2 rounded-md outline-[#E2B8AC]"
              />
            </div>
            <div className="h-auto w-full  mt-2">
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                required
                className="h-32 p-2 rounded-md w-full outline-[#E2B8AC]"
              />
            </div>
            <button
              type="submit"
              className="flex justify-center bg-[#E2B8AC] hover:bg-[#e0bbb0] text-white mt-2 py-2 px-4 rounded-full hover:drop-shadow-md duration-500 w-full cursor-pointer"
            >
              Send
              <RiSendPlaneLine className="my-auto ml-1" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
