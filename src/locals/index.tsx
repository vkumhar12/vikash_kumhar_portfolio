import { BiCommentDetail, BiLogoGmail } from "react-icons/bi";
import {
  FaCss3,
  FaHtml5,
  FaLinkedinIn,
  FaNetworkWired,
  FaNpm,
  FaReact,
  FaYarn,
} from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoIosContact, IoLogoJavascript } from "react-icons/io";
import { MdRestartAlt } from "react-icons/md";
import { SiPostman, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const navigationData = [
  {
    label: ">> Intro",
    link: "/",
    icon: <MdRestartAlt />,
    isOuterLink: false,
  },
  {
    label: ">> About",
    link: "#about",
    icon: <BiCommentDetail />,
    isOuterLink: false,
  },
  // {
  //   label: ">> Skills",
  //   link: "#about",
  //   icon: <BiCommentDetail />,
  //   isOuterLink: false,
  // },
  // {
  //   label: ">> Experience",
  //   link: "#projects",
  //   icon: <FaNetworkWired />,
  //   isOuterLink: false,
  // },
  {
    label: ">> Projects",
    link: "#projects",
    icon: <FaNetworkWired />,
    isOuterLink: false,
  },
  {
    label: ">> Contact",
    link: "#contact",
    icon: <IoIosContact />,
    isOuterLink: false,
  },
];

export const socialIconList = [
  {
    icon: <FiGithub />,
    link: "https://github.com/vkumhar12",
    color: "bg-blue-600 text-white",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/vikash-kumhar-7a67b8216/",
    color: "bg-blue-400 text-white",
  },
  {
    icon: <BiLogoGmail />,
    link: "mailto:vikashkumhar13@gmail.com",
    color: "bg-orange-600 text-white",
  },
];

export const heroSliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 5.5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 6000,
  cssEase: "linear",
  autoplaySpeed: 0,
  pauseOnHover: false,
  arrows: false,
  rtl: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3.5,
      },
    },
  ],
};

export const heroSectionIconsArray = [
  {
    icon: <FaHtml5 />,
    title: "HTML",
  },
  {
    icon: <FaCss3 />,
    title: "CSS",
  },
  {
    icon: <IoLogoJavascript />,
    title: "Javascript",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind",
  },
  // {
  //   icon: <FaNodeJs />,
  //   title: "Node.js",
  // },
  // {
  //   icon: <SiExpress />,
  //   title: "Express",
  // },
  // {
  //   icon: <DiMongodb />,
  //   title: "MongoDB",
  // },
  {
    icon: <FaReact />,
    title: "React",
  },
  {
    icon: <TbBrandNextjs />,
    title: "Next.js",
  },
  {
    icon: <SiPostman />,
    title: "Postman",
  },
  {
    icon: <FaNpm />,
    title: "npm",
  },
  {
    icon: <FaYarn />,
    title: "yarn",
  },
];
