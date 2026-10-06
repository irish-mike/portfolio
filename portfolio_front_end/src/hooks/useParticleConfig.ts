import { particles as defaultParticles } from "@data";
import { useEffect, useMemo, useState } from "react";

const useParticleConfig = () => {
  const getParticleCount = () => {
    const width = window.innerWidth;
    return width >= 1024 ? 376 : width >= 768 ? 209 : 84;
  };

  const [count, setCount] = useState(getParticleCount);

  useEffect(() => {
    const updateParticleCount = () => {
      setCount(getParticleCount());
    };

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
