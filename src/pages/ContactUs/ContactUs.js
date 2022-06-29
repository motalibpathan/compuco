import { useContext, useEffect } from "react";
import { ProgressContext } from "../../App";
import ContactBox from "../Home/ContactBox";

const ContactUs = () => {
  const [, setProgress] = useContext(ProgressContext);
  useEffect(() => {
    setProgress(100);
  }, [setProgress]);

  return (
    <>
      <div className="md:mt-14 mt-0 max-w-[1140px] mx-auto w-full">
        <div className="md:w-4/5 w-full mx-auto md:flex justify-center items-center p-5">
          <div className="md:w-3/5 w-full mb-5 md:mb-0">
            <h1 className="md:text-6xl text-4xl font-bold font-poppins mb-7 text-gray-900">
              Contact us
            </h1>
            <p className="text-gray-600">
              If you have a project you'd like to share with us, or even just a
              quick question, we'd love to hear from you. Get in touch below!
            </p>
          </div>
          <div className="md:w-2/5 w-full">
            <img
              className="w-full"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6172ac60f31f7d2be728adb1_Illustration_Contact.svg"
              alt=""
            />
          </div>
        </div>
        <div className="md:-mb-32 md:-ml-10 ">
          <img
            className="md:w-64 w-32"
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617139496a588a79af2738b8_Bg_Left.svg"
            alt=""
          />
        </div>
        <div className="md:w-4/5 w-full mx-auto md:flex md:items-start md:justify-center mt-10 md:ml-[200px] mb-14">
          <img
            className="w-24 md:mr-7 mx-auto"
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6185586e548fd0ece365253d_Ellen.png"
            alt=""
          />
          <div className="relative md:text-left text-center">
            <img
              className="absolute top-0 md:left-0 left-4 "
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6138788897a559a17f14737b_%E2%80%9C.svg"
              alt=""
            />
            <p className="md:text-xl text-md mt-10  text-gray-600 font-work md:p-0 p-5">
              For us, it's all about helping our clients to do more. Whether
              that be online, or by being more efficient, we want to help your
              organisation be the very best version of itself.
            </p>
            <p className="mt-2 text-gray-700 text-xl font-work">
              Ellen Storvik, Chief Client Officer
            </p>
            <img
              className="absolute bottom-9 md:right-0 right-5"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6138788897a559ea9b14737c_%E2%80%9D.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <ContactBox />
    </>
  );
};

export default ContactUs;
