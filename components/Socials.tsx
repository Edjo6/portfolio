import { FaUntappd } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import React from "react";

interface SidebarIconProps {
  icon: React.ElementType;
  link: string;
}

const socialData = [
  { icon: FaUntappd, link: "https://untappd.com/user/oeledwin" },
  { icon: AiFillInstagram, link: "https://www.instagram.com" },
  { icon: AiFillLinkedin, link: "https://www.linkedin.com" },
  { icon: AiFillGithub, link: "https://github.com" },
  { icon: AiFillMail, link: "" },
];

const SidebarIcon = ({ icon, link }: SidebarIconProps) => {
  return (
    <li>
      <a href={link}>
        <div className="bg-gray-400 p-2 rounded-3xl hover:rounded-xl transition-all duration-300">
          {React.createElement(icon, { size: 40 })}        
        </div>
      </a>
    </li>
  );
};

function Socials() {
  return (
    <ul className="flex p-5 gap-5 justify-center">
      {socialData.map(({ icon, link }) => (
        <SidebarIcon key={link} icon={icon} link={link} />
      ))}
    </ul>
  );
}

export default Socials;
