import { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Particle() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    console.log("Particle mounted");
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 1 },
        particles: {
          number: { value: 50, density: { enable: true, value_area: 800 } },
          color: { value: "#b3265cff" },
          shape: {
            type: "star",
            options: {
              star: { sides: 5 } // or use polygon with type: "polygon"
            }
          },
          opacity: {
            value: 0.2,
            random: false,
            animation: { enable: false, speed: 1, minimumValue: 0.1, sync: false }
          },
          size: {
            value: 3,
            random: true,
            animation: { enable: false, speed: 40, minimumValue: 0.1, sync: false }
          },
          links: { enable: true, distance: 150, color: "#d4477dff", opacity: 0.2, width: 1 },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
          }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true
          },
          modes: {
            grab: { distance: 400, links: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 0.8, speed: 3 },
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
            remove: { quantity: 2 }
          }
        },
        detectRetina: true,
        background: {
          color: "#ffffffff",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        }
      }}
    />
  );
}

//#1b0119ff
