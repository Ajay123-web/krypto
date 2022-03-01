import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => {
  return (
    <div className="flex justify-center items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
      <div
        className={`flex justify-center items-center rounded-full w-10 h-10 ${color}`}
      >
        {icon}
      </div>
      <div className="flex flex-col ml-5 flex-1">
        <h3 className="mt-2 text-white text-lg">{title}</h3>
        <p className="text-white mt-1 test-sm md:w-9/12">{subtitle}</p>
      </div>
    </div>
  );
};

function Services() {
  return (
    <div className="flex flex-col md:flex-row p-10 justify-between items-center gradient-bg-services">
      <div className="mr-3 mb-3 md:mb-1">
        <h1 className="text-white text-3xl sm:text-5xl text-gradient">
          Services that we <br /> continue to improve
        </h1>
      </div>
      <div className="flex flex-col ml-3">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security gurantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
      </div>
    </div>
  );
}

export default Services;
