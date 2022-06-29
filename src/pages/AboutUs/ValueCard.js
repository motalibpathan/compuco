const ValueCard = ({ ourValue }) => {
  const { title, img, description, list } = ourValue;
  return (
    <div className="bg-white p-7 rounded-lg text-gray-600 font-work text-left">
      <img src={img} alt="" />
      <h1 className="text-2xl my-6">{title}</h1>
      <p>{description}</p>
      {list && (
        <ul className="list-disc ml-5 mt-5">
          {list.map((l) => (
            <li>{l}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ValueCard;
