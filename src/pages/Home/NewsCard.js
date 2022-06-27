const NewsCard = ({ news }) => {
  const { title, img, by, time } = news;
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-lg">
      <img className="w-full max-h-[260px]" src={img} alt="" />
      <div className="p-3">
        <div className="flex items-center gap-x-3 text-gray-500 font-work">
          <p>By {by}</p>
          <p>On {time}</p>
        </div>
        <h2 className="text-2xl font-bold font-poppins text-gray-600 mt-3 hover:text-[#00d8aa] duration-500">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default NewsCard;
