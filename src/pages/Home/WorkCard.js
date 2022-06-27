const WorkCard = ({ work }) => {
  const { img, title } = work;
  return (
    <div className="rounded-md shadow-xl overflow-hidden">
      <img className="w-full" src={img} alt="" />
      <p className="p-5 text-2xl text-gray-700 font-bold hover:underline hover:text-[#00d8aa] cursor-pointer">
        {title}
      </p>
    </div>
  );
};

export default WorkCard;
