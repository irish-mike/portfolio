import type { Engine } from "@tsparticles/engine";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

const useParticleEngine = (): boolean => {
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    const initEngine = async () => {
      await initParticlesEngine(async (engine: Engine) => {
        await loadSlim(engine); 
      });
      setInitialized(true); 
    };

    initEngine();
  }, []);

  return initialized;
};

export default useParticleEngine;
