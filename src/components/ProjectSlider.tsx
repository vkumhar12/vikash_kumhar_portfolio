/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-stack e-commerce platform built with the MERN stack.",
    image: "/vikash_portfolio.png",
  },
  {
    id: 2,
    title: "CRM Platform",
    description: "A CRM platform to manage customer relationships efficiently.",
    image: "/images/crm.png",
  },
  {
    id: 3,
    title: "ERP System",
    description: "An ERP system to manage company resources and operations.",
    image: "/images/erp.png",
  },
  // Add more projects as needed
];

const ProjectSlider = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleSelectProject = (index: number) => {
    setSelectedProjectIndex(index);
  };

  const selectedProject = projects[selectedProjectIndex];

  const slideVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: -100, scale: 0.9, transition: { duration: 0.8 } },
  };

  return (
    <div className='relative h-screen w-full flex items-center justify-center bg-gradient-to-r from-gray-900 via-purple-900 to-violet-600 overflow-hidden'>
      {/* Floating Navigation Buttons */}
      <motion.button
        className='absolute left-6 top-1/2 transform -translate-y-1/2 bg-purple-600 p-4 rounded-full shadow-lg hover:scale-105 transition duration-300 z-50'
        whileHover={{ scale: 1.2 }}
        onClick={() =>
          setSelectedProjectIndex(
            (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
          )
        }
      >
        ◀
      </motion.button>

      <motion.button
        className='absolute right-6 top-1/2 transform -translate-y-1/2 bg-purple-600 p-4 rounded-full shadow-lg hover:scale-105 transition duration-300 z-50'
        whileHover={{ scale: 1.2 }}
        onClick={() =>
          setSelectedProjectIndex(
            (prevIndex) => (prevIndex + 1) % projects.length
          )
        }
      >
        ▶
      </motion.button>

      {/* Big Slider (Detailed View with Overlay and Animation) */}
      <motion.div
        key={selectedProject.id}
        variants={slideVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='absolute inset-0 flex flex-col items-center justify-center bg-white/50 shadow-xl rounded-lg overflow-hidden w-full h-full backdrop-blur-md'
      >
        <motion.img
          src={selectedProject.image}
          alt={selectedProject.title}
          className='w-2/3 h-2/3 object-cover rounded-lg shadow-2xl'
          whileHover={{ scale: 1.05 }}
        />
        <motion.div
          className='absolute bottom-12 text-center p-6 backdrop-blur-md bg-white/80 rounded-lg shadow-lg'
          //   whileHover={{ scale: 1.02 }}
        >
          <h2 className='text-4xl font-bold text-gray-800'>
            {selectedProject.title}
          </h2>
          <p className='text-lg text-gray-700 mt-4'>
            {selectedProject.description}
          </p>
        </motion.div>
      </motion.div>

      {/* Small Slider (3D Carousel Thumbnails) */}
      <div className='absolute bottom-8 flex space-x-8 items-center justify-center z-50'>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            onClick={() => handleSelectProject(index)}
            className={`cursor-pointer p-2 border-2 rounded-lg bg-white shadow-lg hover:scale-105 transition duration-300 ${
              selectedProjectIndex === index
                ? "border-purple-500"
                : "border-gray-300"
            }`}
            whileHover={{ rotateY: 10, rotateX: 5 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-20 h-20 object-cover rounded-md'
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
// import { motion } from "framer-motion";
// import { useState } from "react";

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Personal Portfolio",
//     description:
//       "A modern, responsive portfolio website showcasing my skills, projects, and experience as a developer. Built with React, Next.js, and Tailwind CSS.",
//     image: "/vikash_portfolio.png",
//   },
//   {
//     id: 2,
//     title: "CRM Platform",
//     description: "A CRM platform to manage customer relationships efficiently.",
//     image: "/ubone_art.png",
//   },
//   {
//     id: 3,
//     title: "ERP System",
//     description: "An ERP system to manage company resources and operations.",
//     image: "/vikash_portfolio.png",
//   },
// ];

// const ProjectSlider = () => {
//   const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

//   const handleSelectProject = (index: number) => {
//     setSelectedProjectIndex(index);
//   };

//   const selectedProject = projects[selectedProjectIndex];

//   const slideVariants = {
//     hidden: { opacity: 0, x: 100, scale: 0.9 },
//     visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8 } },
//     exit: { opacity: 0, x: -100, scale: 0.9, transition: { duration: 0.8 } },
//   };

//   return (
//     <div className='relative flex  px-10 max-w-7xl border '>
//       <motion.div
//         key={selectedProject.id}
//         variants={slideVariants}
//         initial='hidden'
//         animate='visible'
//         exit='exit'
//         className='flex-grow flex items-center justify-center bg-white shadow-xl rounded-lg overflow-hidden m-4 p-4'
//       >
//         <motion.img
//           src={selectedProject.image}
//           alt={selectedProject.title}
//           className='w-full h-full object-cover rounded-lg shadow-2xl'
//           whileHover={{ scale: 1.05 }}
//         />
//         <motion.div className='absolute bottom-12 text-center p-6 backdrop-blur-md bg-white/80 rounded-lg shadow-lg'>
//           <h2 className='text-4xl font-bold text-gray-800'>
//             {selectedProject.title}
//           </h2>
//           <p className='text-lg text-gray-700 mt-4'>
//             {selectedProject.description}
//           </p>
//         </motion.div>
//       </motion.div>

//       <div className='flex flex-col space-y-4 p-4'>
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.id}
//             onClick={() => handleSelectProject(index)}
//             className={`cursor-pointer p-2 border-2 rounded-lg bg-white shadow-lg hover:scale-105 transition duration-300 ${
//               selectedProjectIndex === index
//                 ? "border-purple-500"
//                 : "border-gray-300"
//             }`}
//             whileHover={{ rotateY: 10, rotateX: 5 }}
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className='w-32 h-32 object-cover rounded-md'
//             />
//             <h3 className='text-center mt-2 text-md font-semibold'>
//               {project.title}
//             </h3>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectSlider;
