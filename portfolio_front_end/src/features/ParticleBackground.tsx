import { useParticleConfig, useParticleEngine } from "@hooks";
import { ISourceOptions } from "@tsparticles/engine";
import Particles from "@tsparticles/react";

const ParticleBackground = () => {
  const initialized = useParticleEngine();
  const config = useParticleConfig();

  if (!initialized) {
    return null;
  }

  return <Particles id="tsparticles" options={config as ISourceOptions} />;
};

export default ParticleBackground;
