import { useContext, useEffect } from "react";
import { ProgressContext } from "../../App";

const ContactUs = () => {
  const [, setProgress] = useContext(ProgressContext);
  useEffect(() => {
    setProgress(100);
  }, [setProgress]);

  return (
    <div className="mt-14 max-w-[1140px] mx-auto w-full">
      <div className="w-4/5 mx-auto flex justify-center items-center">
        <div className="w-3/5 ">
          <h1 className="text-6xl font-bold font-poppins mb-7 text-gray-900">
            Contact us
          </h1>
          <p className="text-gray-600">
            If you have a project you'd like to share with us, or even just a
            quick question, we'd love to hear from you. Get in touch below!
          </p>
        </div>
        <div className="w-2/5">
          <img
            className="w-full"
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6172ac60f31f7d2be728adb1_Illustration_Contact.svg"
            alt=""
          />
        </div>
      </div>
      <div className="-mb-32 -ml-10">
        <img
          className="w-64"
          src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617139496a588a79af2738b8_Bg_Left.svg"
          alt=""
        />
      </div>
      <div className="w-4/5 mx-auto flex items-start justify-center mt-10 ml-[200px]">
        <img
          className="w-24 mr-7"
          src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6185586e548fd0ece365253d_Ellen.png"
          alt=""
        />
        <div className="relative ">
          <img
            className="absolute top-0 md:left-0 left-4 "
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6138788897a559a17f14737b_%E2%80%9C.svg"
            alt=""
          />
          <p className="md:text-xl text-md mt-10  text-gray-600 font-work md:p-0 p-5">
            For us, it's all about helping our clients to do more. Whether that
            be online, or by being more efficient, we want to help your
            organisation be the very best version of itself.
          </p>
          <p className="mt-2 text-gray-700 text-xl font-work">
            Jamie Novick, CEO
          </p>
          <img
            className="absolute bottom-0 md:right-0 right-5"
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6138788897a559ea9b14737c_%E2%80%9D.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
