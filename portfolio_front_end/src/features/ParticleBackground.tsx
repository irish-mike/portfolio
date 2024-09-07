import { particles } from "@data";
import { Container, ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback, useEffect, useState } from "react";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  // Initialize particles engine once per app lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load the slim version of the engine
    }).then(() => {
      setInit(true); // Set initialized to true after loading is complete
    });
  }, []);

  // Callback when particles are loaded
  const particlesLoaded = useCallback(async (container?: Container): Promise<void> => {
    // You can handle custom logic here once the particles are loaded
    console.log("Particles loaded", container);
  }, []);

  // Ensure particles configuration is passed as ISourceOptions
  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded} // Pass particlesLoaded callback
        options={particles as ISourceOptions} // Use imported particles config
      />
    );
  }

  return <></>; // Render nothing if particles are not initialized yet
};

export default ParticleBackground;
