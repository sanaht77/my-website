import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


export default function Particle() {

  const particlesInit = useCallback(async (main) => {
    await loadFull(main);
  }, []);

  return (
    console.log("Particle mounted"),
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 1 },
        particles: {
          number: { value: 25, density: { enable: true, value_area: 800 } },
          color: { value: "#281d40ff" },
          shape: { type: "star", options: { sides: 5 } },
          opacity: { value: 0.8 },
          size: { value: 4 },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: { enable: true, speed: 5, sync: false }
          },
          links: { enable: true, distance: 600, color: "#ffffff", opacity: 0.4, width: 2 },
          move: {
            enable: true, speed: 2, direction: "none", random: false, straight: false,
            outModes: { default: "out" }
          }
        },
        interactivity: {
          events: { onHover: { enable: true, mode: ["grab"] }, resize: true },
          modes: {
            grab: { distance: 400, links: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200 }, push: { quantity: 4 }, remove: { quantity: 2 }
          }
        },
        detectRetina: true,
        background: { color: "#151414ff", position: "50% 50%", repeat: "no-repeat", size: "cover" }
      }}
    />
  );
}
