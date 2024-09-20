
const particles = {
  autoPlay: true,
  background: {
    color: {
      value: "#2f323f"
    }
  },
  fullScreen: {
    enable: false,
    zIndex: -10
  },
  detectRetina: true,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "repulse"
      },
      onHover: {
        enable: true,
        mode: "attract"
      },
      resize: {
        enable: false,
      }
    },
    modes: {
      attract: {
        distance: 800,
        duration: 0.2,
        factor: 0.2,
        speed: 0.5,
        maxSpeed: 0.1
      },
      repulse: {
        distance: 500,
        duration: 2,
        speed: 0.5,
        maxSpeed: 1
      }
    }
  },
  particles: {
    color: {
      value: "#ffffff",
      animation: {
        h: {
          enable: true,
          speed: 1,
          sync: true
        }
      }
    },
    move: {
      enable: true,
      speed: 0.25,
      random: true,
      direction: "none",
      outModes: {
        default: "out"
      },
      warp: true
    },
    number: {
      value: 100
    },
    opacity: {
      value: 0.8
    },
    shape: {
      type: "circle"
    },
    size: {
      value: 2.8
    }
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true
};

export default particles;