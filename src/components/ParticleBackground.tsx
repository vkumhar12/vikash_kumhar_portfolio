import React from "react";
import Particles from "react-tsparticles";
// import { Container } from "tsparticles"; // Import the Container type
import { Container, Engine } from "tsparticles-engine"; // Import the types for particles

const ParticleBackground: React.FC = () => {
  // Define the init function with type and return a Promise
  const particlesInit = async (main: Engine): Promise<void> => {
    // console.log(main);
    // You can also initialize any plugins or custom configurations here
  };

  // Define the loaded function with type and return a Promise
  const particlesLoaded = async (container?: Container): Promise<void> => {
    // console.log(container);
  };

  return (
    <div className="border border-red-500 h-screen">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 100, // Increase number of particles
              density: {
                enable: true,
                value_area: 800,
              },
            },
            size: {
              value: 5, // Adjust size for better visibility
              random: true,
            },
            opacity: {
              value: 0.5,
            },
            move: {
              enable: true,
              speed: 3, // Adjust speed for smoother movement
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Ensure particles are behind other content
        }}
      />
    </div>
  );
};

export default ParticleBackground;
