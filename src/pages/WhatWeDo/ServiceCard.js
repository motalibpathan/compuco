const ServiceCard = ({ work }) => {
  const { id, title, description, illustration, technologies } = work;
  return (
    <div className="md:flex justify-center items-start gap-x-20 font-work my-14 p-5">
      <div className={`md:w-1/2 w-full ${id % 2 === 0 && "order-2"}`}>
        <h1 className="md:text-3xl text-2xl font-bold text-gray-700 mb-5 font-poppins">
          {title}
        </h1>
        <p className="text-lg">{description}</p>
        <p className="text-gray-600 mt-5">Key Technologies</p>
        <div className="flex items-center gap-5 mt-5">
          {technologies.map((t, i) => (
            <img width={100} key={i} src={t} alt="" />
          ))}
        </div>
      </div>
      <div className={`md:w-1/2 w-full ${id % 2 === 0 && "order-1"} `}>
        <img className="w-[450px]" src={illustration} alt="" />
      </div>
    </div>
  );
};

export default ServiceCard;
