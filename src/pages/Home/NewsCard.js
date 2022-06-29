import ReactVisibilitySensor from "react-visibility-sensor";

const NewsCard = ({ news }) => {
  const { title, img, by, time } = news;
  return (
    <ReactVisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <div
          className={`rounded-lg overflow-hidden bg-white shadow-lg ${
            isVisible ? " translate-y-0" : "translate-y-10 "
          } duration-1000 `}
        >
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
      )}
    </ReactVisibilitySensor>
  );
};

export default NewsCard;
