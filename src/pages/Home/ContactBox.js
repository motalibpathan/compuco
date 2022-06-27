const ContactBox = () => {
  return (
    <div className="bg-[#12243b]">
      <div className="mt-24 max-w-[1140px] mx-auto w-full md:px-10 px-5 py-10 grid md:grid-cols-2 grid-cols-1 space-y-5">
        <div className="text-white font-work md:order-1 order-2 flex flex-col items-center md:mt-0 mt-10">
          <img
            className="w-4/5 block md:ml-[-40px] ml-0 md:order-1 order-2"
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/616fb7698cab07cff9b46d6f_Pic-p-500.png"
            alt=""
          />
          <div className="text-center md:order-2 order-1">
            <h1 className="text-3xl mb-2 ">Address</h1>
            <p> Compuco, </p>
            <p>Hope House Suite 16, Perseverance Works</p>
            <p>37 Hackney Road, Shoreditch</p>
            <p>London, E2 7NX</p>
            <h1 className="text-3xl mb-2 mt-10">Get in touch</h1>
            <p>Email: hello@compuco.io</p>
            <p>Phone: 0207 096 3336</p>
          </div>
        </div>
        <div className="md:order-2 order-1">
          <div className="p-7 bg-white rounded-xl">
            <h1 className="md:text-5xl text-3xl font-bold font-poppins md:text-left text-center">
              Get in touch
            </h1>
            <img
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg"
              alt=""
              className="mb-8"
            />
            <form className="font-work">
              <div className="mb-5">
                <label className="text-gray-700 " htmlFor="">
                  First name
                </label>
                <input
                  className="block px-3 py-3 rounded-md w-full mt-2 border outline-none focus:border-[#00d8aa]"
                  type="text"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="mb-5">
                <label className="text-gray-700 " htmlFor="">
                  Last name
                </label>
                <input
                  className="block px-3 py-3 rounded-md w-full mt-2 border outline-none focus:border-[#00d8aa]"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="mb-5">
                <label className="text-gray-700 " htmlFor="">
                  Email address
                </label>
                <input
                  className="block px-3 py-3 rounded-md w-full mt-2 border outline-none focus:border-[#00d8aa]"
                  type="email"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="mb-5">
                <label className="text-gray-700 " htmlFor="">
                  Message
                </label>
                <textarea
                  className="block px-3 py-3 rounded-md w-full mt-2 border outline-none focus:border-[#00d8aa]"
                  placeholder="Enter your first name"
                ></textarea>
              </div>
              <div>
                <input type="checkbox" class="accent-[#00d8aa] mr-2" />
                <label htmlFor="" className="text-gray-700">
                  I confirm that I have read and that I agree to the Privacy
                  Policy
                </label>
              </div>
              <input
                className="bg-gradient-to-r from-[#00d8aa] to-[#05f8f5] w-full rounded-xl py-3 cursor-pointer mt-5 font-bold hover:to-[#00d8aa] hover:from-[#05f8f5] duration-500"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
