const ClientReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Adam Donnan",
      title: "CEO, IES",
      img: "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61277a94a229ff7c399b0dc5_ies_logo.png",
      reviewText:
        "In an industry where there are many vendors who over-promise but underdeliver, Compuco has delivered above and beyond. Their dedication and commitment has been a breath of fresh air and has enabled us to extend our membership offering and reduce the administrative burden of running membership services.",
    },
    {
      id: 2,
      name: "Tatenda Kupara",
      title: "Head of IT, PRI",
      img: "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61277a94c92eb850fff3a49e_PRI_logo.png",
      reviewText:
        "The team exceeded our expectations in delivering a truly integrated, intuitive platform that thousands of our members rely on and that we continue to evolve together since.",
    },
  ];

  return (
    <div className="bg-[#00d8aa]">
      <div className="md:mt-24 mt-10 max-w-[1140px] mx-auto w-full md:py-20 py-10 px-10">
        <div className="flex justify-center pb-8">
          <img
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6171286e48a425a4e1189588_emblem.svg"
            alt=""
          />
        </div>
        <h1 className="md:text-4xl text-3xl font-bold font-poppins text-center mb-5">
          What our clients say
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-md p-7 font-work text-gray-700"
            >
              <div className="flex items-center mb-3">
                <img src={review.img} alt="" />
                <div className="ml-3">
                  <h1 className="text-xl font-bold mb-3">{review.name}</h1>
                  <p>{review.title}</p>
                </div>
              </div>
              <p>"{review.reviewText}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
