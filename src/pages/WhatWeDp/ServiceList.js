import ValueCard from "../AboutUs/ValueCard";

const ServiceList = () => {
  const serviceDetailsData = [
    {
      id: 1,
      title: "Digital design + UX research",
      img: "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6172c5f6d6d888f1cb8fc497_ic_UX.svg",
      description:
        "We know how to help you put your audiences first and our experienced team can guide you through research, discovery and testing to deliver a platform that fits not just for some, but for all of your users.",
      list: [
        "Stakeholder interviews",
        "Research and surveys",
        "Audience analysis",
        "Usability testing",
      ],
    },
    {
      id: 2,
      title: "Digital transformation and CRM",
      img: "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6172c605ae5883073e790d35_IC_CRM.svg",
      description:
        "Our team knows how to tackle everything from the strategic planning and governance of a transformation project through to the reengineering of your organisation's processes to make the most of your new platforms.",
      list: [
        "Outcomes and KPI analysis",
        "Business process mapping and reengineering",
        "Training and coaching",
      ],
    },
    {
      id: 3,
      title: "Data strategy",
      img: "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6172c6454d957a1465f76e5f_IC_Data.svg",
      description:
        "Having the right data strategy is critical to gaining tangible benefits from your digital tools. Our team can help you ideate, implement and execute a strategy to ensure the highest levels of data quality and effectiveness.",
      list: [
        "Organisational taxonomy",
        "Data quality",
        "Data quality",
        "Data science and predictive analytics",
      ],
    },

    {
      id: 4,
      title: "Hosting, monitoring and security",
      img: "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6172c628e0d732a45ae23758_ic_Host.svg",
      description:
        "The Compuco infrastructure team have developed platforms supporting thousands of users. Let us be your guide to ensure that your platform has the highest levels of reliability and security.",
      list: [
        "Managed hosting",
        "Infrastructure monitoring",
        "Infrastructure monitoring",
        "Security audits",
      ],
    },
  ];
  return (
    <div
      style={{
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/612788dee2b702272f364ae9_Testimonial%20BG.svg)",
        backgroundRepeat: "no-repeat",
      }}
      className="text-center bg-[#12243b]"
    >
      <div className="md:mt-14 mt-0 max-w-[1140px] mx-auto w-full md:py-10 p-5 text-white">
        <img
          className="w-24 mx-auto my-5"
          src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617278ba98a543166e30b681_emblem_2.png"
          alt=""
        />
        <h1 className="text-4xl font-bold font-poppins">Services we offer</h1>
        <p className="mt-5 mb-10 w-96 mx-auto font-work">
          We underpin these technologies with the experience that counts to
          deliver for you both now and in future.
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mb-16">
          {serviceDetailsData.map((ourValue) => (
            <ValueCard key={ourValue.id} ourValue={ourValue} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
