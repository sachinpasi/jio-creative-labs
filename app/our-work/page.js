"use client";

import React, { useEffect, useMemo, useState } from "react";
import Icon from "../components/UI/Icon";
import ClientDropdown from "../components/UI/ClientDropdown";
import WorkDropdown from "../components/UI/WorkDropdown";

const OurWorkPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorkOptions, setSelectedWorkOptions] = useState([]);
  const [selectedClientOptions, setSelectedClientOptions] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [modalContant, setmodalContant] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleCardClick = (item) => {
    setmodalContant(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setmodalContant(null);
  };

  const work = useMemo(
    () => [
      {
        id: 1000,
        workName: "Website UI/UX Design",
        workType: "Web Design",
        clientType: "Startup",
        subheading: "Crafting Intuitive User Experiences",
        shortDescription:
          "Tailored website designs focused on user experience, ensuring seamless navigation and engagement.",
        logDescription:
          "Completed website UI/UX design for startup client, prioritizing intuitive navigation and engaging user interface elements to enhance user experience and drive conversions.",
      },
      {
        id: 1001,
        workName: "Responsive Design",
        workType: "Web Design",
        clientType: "Startup",
        subheading: "Ensuring Compatibility Across Devices",
        shortDescription:
          "Designing websites that adapt seamlessly to various screen sizes and devices for enhanced accessibility.",
        logDescription:
          "Implemented responsive design principles for startup client's website, ensuring optimal display and functionality across all devices, including desktops, tablets, and smartphones.",
      },
      {
        id: 1002,
        workName: "Prototype Development",
        workType: "Web Design",
        clientType: "Startup",
        subheading: "Bringing Ideas to Life",
        shortDescription:
          "Building interactive prototypes to visualize and refine website concepts before full development.",
        logDescription:
          "Developed interactive prototypes for startup client's website, facilitating comprehensive visualization and refinement of design concepts prior to full-scale development.",
      },
      {
        id: 1005,
        workName: "Full Stack Development",
        workType: "Web Dev",
        clientType: "Startup",
        subheading: "End-to-End Web Solutions",
        shortDescription:
          "Comprehensive web development services covering both frontend and backend aspects for seamless functionality.",
        logDescription:
          "Executed full stack development for startup client's website, encompassing frontend design and backend functionality implementation to deliver a cohesive and functional web solution.",
      },
      {
        id: 1006,
        workName: "Logo Design",
        workType: "Graphic Design",
        clientType: "Small Business",
        subheading: "Creating Memorable Brand Identities",
        shortDescription:
          "Crafting unique and impactful logos to visually represent small businesses' brand identities.",
        logDescription:
          "Designed a distinctive logo for small business client, capturing their brand essence and fostering recognition and trust among their target audience.",
      },
      {
        id: 1007,
        workName: "Brochure Design",
        workType: "Graphic Design",
        clientType: "Small Business",
        subheading: "Compelling Collateral for Small Businesses",
        shortDescription:
          "Designing visually appealing brochures to showcase products, services, and brand offerings.",
        logDescription:
          "Developed engaging brochure design for small business client, highlighting key products and services to attract potential customers and drive sales.",
      },
      {
        id: 1009,
        workName: "SEO Optimization",
        workType: "Digital Marketing",
        clientType: "Medium Business",
        subheading: "Boosting Online Visibility and Ranking",
        shortDescription:
          "Optimizing website content and structure to improve search engine ranking and drive organic traffic.",
        logDescription:
          "Implemented SEO optimization strategies for medium business client, enhancing online visibility and search engine ranking to attract targeted traffic and boost conversions.",
      },
      {
        id: 1010,
        workName: "Social Media Campaigns",
        workType: "Digital Marketing",
        clientType: "Medium Business",
        subheading: "Strategic Engagement on Social Platforms",
        shortDescription:
          "Creating impactful social media campaigns to increase brand awareness and engagement.",
        logDescription:
          "Executed targeted social media campaigns for medium business client, driving increased brand visibility and engagement among the target audience.",
      },
      {
        id: 1011,
        workName: "Email Marketing",
        workType: "Digital Marketing",
        clientType: "Medium Business",
        subheading: "Direct Communication with Target Audience",
        shortDescription:
          "Crafting personalized email campaigns to nurture leads and drive conversions.",
        logDescription:
          "Developed and implemented email marketing campaigns for medium business client, resulting in increased lead nurturing and conversion rates.",
      },
      {
        id: 1012,
        workName: "Content Creation",
        workType: "Social Media",
        clientType: "Nonprofit Organization",
        subheading: "Inspiring Engagement through Compelling Content",
        shortDescription:
          "Producing engaging content to connect with audiences and advance the mission of nonprofit organizations.",
        logDescription:
          "Created compelling content for social media platforms for nonprofit organization client, driving engagement and awareness of their cause.",
      },
      {
        id: 1013,
        workName: "Community Management",
        workType: "Social Media",
        clientType: "Nonprofit Organization",
        subheading: "Fostering Meaningful Online Communities",
        shortDescription:
          "Building and managing online communities to foster engagement and support for nonprofit causes.",
        logDescription:
          "Managed online communities for nonprofit organization client, fostering meaningful interactions and support for their cause.",
      },
      {
        id: 1014,
        workName: "Social Media Advertising",
        workType: "Social Media",
        clientType: "Nonprofit Organization",
        subheading: "Amplifying Impact through Targeted Advertising",
        shortDescription:
          "Utilizing social media advertising to increase reach and engagement for nonprofit organizations' initiatives.",
        logDescription:
          "Implemented targeted social media advertising campaigns for nonprofit organization client, amplifying the impact of their initiatives and expanding their reach.",
      },
      {
        id: 1015,
        workName: "Keyword Research",
        workType: "SEO",
        clientType: "E-commerce Business",
        subheading: "Optimizing Content for Search Intent",
        shortDescription:
          "Conducting in-depth keyword research to identify relevant search terms and optimize content for better visibility.",
        logDescription:
          "Conducted comprehensive keyword research for e-commerce business client, identifying high-value keywords to optimize content and improve search engine visibility.",
      },
    ],
    []
  );

  const list = useMemo(() => {
    if (
      selectedClientOptions.length === 0 &&
      selectedWorkOptions.length === 0
    ) {
      return work;
    }

    return work.filter((project) => {
      return (
        (selectedClientOptions.length === 0 ||
          selectedClientOptions.includes(project.clientType)) &&
        (selectedWorkOptions.length === 0 ||
          selectedWorkOptions.includes(project.workType))
      );
    });
  }, [selectedWorkOptions, selectedClientOptions, work]);

  useEffect(() => {
    setfilteredList(list);
  }, [list]);

  return (
    <div className=" md:px-12 px-5 container md:py-[150px] py-[90px]">
      <div className="w-full">
        <h1 className="uppercase text-h4">Our Workfolio</h1>
        <div className="h-[1.5px] w-full bg-[#1D1D1F]"></div>
      </div>
      <div className="w-full ">
        <div className="my-8 md:mx-16 flex flex-col md:flex-row justify-between md:items-center items-start ">
          <ClientDropdown
            label="Type Of Client"
            options={[
              { id: 100, value: "Startup" },
              { id: 101, value: "Small Business" },
              { id: 102, value: "Medium Business" },
              { id: 103, value: "Enterprise" },
              { id: 104, value: "Nonprofit Organization" },
              { id: 105, value: "E-commerce Business" },
              { id: 106, value: "Agency" },
              { id: 107, value: "Freelancer" },
              { id: 108, value: "Educational Institution" },
              { id: 109, value: "Healthcare Industry" },
              { id: 110, value: "Technology Industry" },
            ]}
            selectedOptions={selectedClientOptions}
            setSelectedOptions={setSelectedClientOptions}
          />
          <WorkDropdown
            label="Type Of Work"
            options={[
              { id: 1, value: "Web Design" },
              { id: 2, value: "Web Dev" },
              { id: 3, value: "Graphic Design" },
              { id: 4, value: "Digital Marketing" },
              { id: 5, value: "Social Media" },
              { id: 6, value: "SEO" },
              { id: 7, value: "Content Creation" },
              { id: 8, value: "Mobile Apps" },
              { id: 9, value: "Branding" },
              { id: 10, value: "UI/UX Design" },
            ]}
            selectedOptions={selectedWorkOptions}
            setSelectedOptions={setSelectedWorkOptions}
          />
          <button
            onClick={() => {
              setSelectedClientOptions([]);
              setSelectedWorkOptions([]);
            }}
          >
            <p className="font-source-sans text-[26px] text-black-2 text-nowrap whitespace-nowrap ">
              All Projects
            </p>
          </button>
        </div>
        <div className="flex flex-wrap gap-4 mb-12 md:mb-0">
          {filteredList.map((_, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                handleCardClick(_);
              }}
              className="relative w-[374px] h-[374px] bg-[#5092DE] flex justify-center items-center cursor-pointer overflow-x-hidden"
              style={{ zIndex: 12 - index }}
            >
              <div
                className={`absolute inset-0  transition-transform duration-[800ms] transform flex justify-center items-center ${
                  hoveredIndex === index ? "-translate-x-full" : "translate-x-0"
                } cover`}
              >
                <Icon name="WORK_1" height={290} width={290} />{" "}
              </div>

              <div
                className={`absolute inset-0  bg-white transition-transform duration-[800ms] transform ${
                  hoveredIndex === index ? "translate-x-0" : "translate-x-full"
                } cover`}
              ></div>
              <div
                style={{
                  background: "rgba(151, 71, 255, 0.51)",
                }}
                className={`absolute inset-0 bg-opacity-50 transition-transform duration-[800ms] flex flex-col p-4 gap-4 justify-center items-center transform ${
                  hoveredIndex === index ? "translate-x-0" : "translate-x-full"
                } cover`}
              >
                <Icon
                  name="JCL_LOGO_ROUND"
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <div className="flex flex-col items-start gap-1">
                  <h3>{_?.workName}</h3>
                  <p className="font-source-sans text-[12px] font-medium">
                    {_?.subheading}
                  </p>
                  <p className="font-source-sans text-[18px] leading-[20px]">
                    {_?.shortDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 flex justify-center items-center z-50 w-full"
        >
          <div className="bg-[#CFE5FF] p-8  w-[900px] md:h-[450px] h-[calc(100vh-68px)] top-[34px] flex flex-col md:flex-row md:justify-between justify-around relative">
            <Icon
              name="WORK_1"
              height={200}
              width={200}
              className="object-contain md:hidden"
            />{" "}
            <Icon
              name="WORK_1"
              height={350}
              width={350}
              className="object-contain hidden md:block"
            />{" "}
            <div className="flex flex-col justify-center">
              <h1 className="font-source-sans text-[36px] font-black mb-4">
                {modalContant?.workName || "Lorem ipsum dolor sit amet"}
              </h1>
              <p className="text-[15px] font-medium mb-4">
                {modalContant?.subheading ||
                  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam`}
              </p>
              <p className="text-[15px] font-medium mb-4">
                {modalContant?.shortDescription ||
                  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam`}
              </p>
              <p className="text-[15px] font-medium mb-4">
                {modalContant?.logDescription ||
                  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam`}
              </p>
            </div>
            <button
              onClick={closeModal}
              className=" absolute right-4 top-4 mt-4 text-white px-4 py-2 "
            >
              <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.2372 3.1393C20.3584 3.0183 20.4545 2.87462 20.5201 2.71647C20.5857 2.55832 20.6196 2.38879 20.6197 2.21757C20.6198 2.04634 20.5862 1.87678 20.5207 1.71854C20.4553 1.56031 20.3594 1.41652 20.2384 1.29537C20.1174 1.17422 19.9737 1.07809 19.8155 1.01247C19.6574 0.946846 19.4879 0.913016 19.3166 0.912911C19.1454 0.912806 18.9758 0.946427 18.8176 1.01185C18.6594 1.07728 18.5156 1.17323 18.3944 1.29423L10.5314 9.1573L2.67055 1.29423C2.42588 1.04956 2.09404 0.912109 1.74802 0.912109C1.402 0.912109 1.07016 1.04956 0.825485 1.29423C0.580814 1.53891 0.443359 1.87075 0.443359 2.21677C0.443359 2.56279 0.580814 2.89463 0.825485 3.1393L8.68855 11.0001L0.825485 18.8609C0.704336 18.982 0.608236 19.1259 0.54267 19.2842C0.477105 19.4424 0.443359 19.6121 0.443359 19.7834C0.443359 19.9548 0.477105 20.1244 0.54267 20.2827C0.608236 20.441 0.704336 20.5848 0.825485 20.706C1.07016 20.9506 1.402 21.0881 1.74802 21.0881C1.91935 21.0881 2.089 21.0543 2.24729 20.9888C2.40558 20.9232 2.5494 20.8271 2.67055 20.706L10.5314 12.8429L18.3944 20.706C18.6391 20.9503 18.9708 21.0875 19.3166 21.0873C19.6624 21.0871 19.994 20.9495 20.2384 20.7048C20.4827 20.4602 20.6199 20.1284 20.6197 19.7826C20.6195 19.4368 20.4819 19.1053 20.2372 18.8609L12.3742 11.0001L20.2372 3.1393Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurWorkPage;
