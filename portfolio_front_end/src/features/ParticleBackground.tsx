import { useParticleConfig } from "@hooks";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const initializeParticles = async (engine: Engine) => {
  await loadSlim(engine);
};

const ParticleBackground = () => {
  const config = useParticleConfig();

  return (
    <ParticlesProvider init={initializeParticles}>
      <Particles id="tsparticles" options={config as ISourceOptions} />
    </ParticlesProvider>
  );
};

export default ParticleBackground;
