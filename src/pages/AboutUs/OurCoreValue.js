import ValueCard from "./ValueCard";

const OurCoreValue = () => {
  const valuesData = [
    {
      id: 1,
      title: "Committed to client success",
      img: "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6131c8f19979f7501e3600e8_Icon.svg",
      description:
        "We become a trusted extension of your team to ensure we succeed, together.",
    },
    {
      id: 2,
      title: "Data-driven expertise",
      img: "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6131c9f4ecce339aaebfae3c_Data%20driven.svg",
      description:
        "We harness the transformative power of data-driven decision making to reimagine the way you work.",
    },
    {
      id: 3,
      title: "Creativity for everyone",
      img: "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6131ca06d8749f9e273f4396_Creativity.svg",
      description:
        "We believe that technology is for everyone and place inclusivity at the heart of our design process.",
    },
  ];
  return (
    <div
      style={{
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/612788dee2b702272f364ae9_Testimonial%20BG.svg)",
      }}
      className="text-center bg-[#12243b]"
    >
      <div className="md:mt-14 mt-0 max-w-[1140px] mx-auto w-full md:py-10 p-5 text-white">
        <img
          className="w-24 mx-auto my-5"
          src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617278ba98a543166e30b681_emblem_2.png"
          alt=""
        />
        <h1 className="text-4xl font-bold font-poppins">Our Core Value</h1>
        <p className="mt-5 mb-10 w-96 mx-auto font-work">
          Our dedicated team are driven by three core values that underpin
          everything we do.
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mb-16">
          {valuesData.map((ourValue) => (
            <ValueCard key={ourValue.id} ourValue={ourValue} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCoreValue;
