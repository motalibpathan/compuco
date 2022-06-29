import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

const Brands = () => {
  const [visible, setVisible] = useState(false);
  //background-position: 95% 85%;
  //background-size: 657px;
  //background-repeat: no-repeat;
  const containerStyle = {
    background:
      "url(https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/62331a8e5b10716d0f6bbb2d_bg-blobs.svg)",
    backgroundPosition: "90% 75%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "657px",
  };
  return (
    <div style={containerStyle}>
      <ReactVisibilitySensor partialVisibility onChange={(v) => setVisible(v)}>
        <div className="mt-24 max-w-[1140px] mx-auto w-full">
          <h1
            className={`font-poppins text-center md:text-5xl text-2xl font-bold ${
              visible ? "opacity-100 translate-y-0" : "translate-y-24 opacity-0"
            } duration-1000 `}
          >
            People we've worked with
          </h1>
          <div
            className={`grid md:grid-cols-6 grid-cols-2 justify-items-center items-center space-x-5 space-y-5 mb-10 mt-16  ${
              visible ? "opacity-100 " : "opacity-0"
            } duration-1000  `}
          >
            <img
              className="w-20"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61384b5f7d9b28e1785846fa_5.png"
              alt=""
            />
            <img
              className="w-20"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61384b05284ec4f981a4cd5a_2.png"
              alt=""
            />
            <img
              className="w-20"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61276a6cbe86889683b19294_3.png"
              alt=""
            />
            <img
              className="w-20"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61276a6c47c7ce6d10cb3628_4.png"
              alt=""
            />
            <img
              className="w-20"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61276cf5d4be1d610d9043bf_12.png"
              alt=""
            />
            <img
              className="w-20"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61384b7708ccdbfab34d4c86_6.png"
              alt=""
            />
          </div>
          <div
            className={`grid md:grid-cols-6 grid-cols-2  space-x-7 space-y-7 justify-items-center ${
              visible ? "opacity-100 " : " opacity-0 "
            } duration-1000 `}
          >
            <img
              className="w-32"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617647a9810724dfcccadd92_7.png"
              alt=""
            />
            <img
              className="w-20"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617647969511439e30b3357c_8.png"
              alt=""
            />
            <img
              className="w-20"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617647d228685f3a2763c179_1.png"
              alt=""
            />
            <img
              className="w-20"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617647fe7e0851ef3b846875_10.png"
              alt=""
            />
            <img
              className="w-20"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6176725d10aa2aa1529727f7_9.png"
              alt=""
            />
            <img
              className="w-20"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6176723224f6311a5f4eb065_ASE.png"
              alt=""
            />
          </div>

          <div className="md:flex gap-10 mt-16">
            <div className="md:w-3/5 w-full md:p-0 p-9">
              <img
                src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61712b1a66a17c2bdc605262_Pic-1.png"
                alt=""
              />
            </div>
            <div className="md:w-2/5 w-full md:p-0 p-16 mt-auto">
              <img
                src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61712b1aca026f6ff08a567b_Pic-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </ReactVisibilitySensor>
    </div>
  );
};

export default Brands;
