const Service = () => {
  const serviceList = [
    {
      id: 1,
      title: "Web Design & Development",
      img: "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/612764058976f539ef9c2296_1.svg",
    },
    {
      id: 2,
      title: "CRM & Digital Transformation",
      img: "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6127640566125b37721f4585_2.svg",
    },
    {
      id: 3,
      title: "CRM & Digital Transformation",
      img: "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6127640638af1e51609049dc_3.svg",
    },
  ];
  return (
    <div className="md:flex justify-center mt-10 gap-x-7 font-work">
      {serviceList.map((service) => (
        <div className="p-7 shadow-xl rounded-lg md:m-0 m-10">
          <div className="flex justify-center mb-5">
            <img src={service.img} alt="" />
          </div>
          <div className="flex justify-center">
            <h1 className="text-center text-2xl w-4/5">{service.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
