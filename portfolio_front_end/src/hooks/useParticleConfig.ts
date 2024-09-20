import { particles as defaultParticles } from "@data";
import { useEffect, useMemo, useState } from "react";

const useParticleConfig = () => {
  const [count, setCount] = useState(0);

  const updateParticleCount = () => {
    const width = window.innerWidth;
    const newCount = width >= 1024 ? 1000 : width >= 768 ? 500 : 100;
    setCount(newCount);
  };

  useEffect(() => {
    updateParticleCount();
    window.addEventListener("resize", updateParticleCount);
    return () => {
      window.removeEventListener("resize", updateParticleCount);
    };
  }, []);

  const config = useMemo(() => ({
    ...defaultParticles,
    particles: {
      ...defaultParticles.particles,
      number: {
        ...defaultParticles.particles.number,
        value: count,
      },
    },
  }), [count]);

  return config;
};

export default useParticleConfig;
