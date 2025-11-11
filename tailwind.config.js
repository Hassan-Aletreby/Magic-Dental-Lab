module.exports = {
  theme: {
    extend: {
      keyframes: {
        pulseGlow: {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "0.6",
            filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))",
          },
          "50%": {
            transform: "scale(1.15)",
            opacity: "1",
            filter: "drop-shadow(0 0 35px rgba(255,255,255,1))",
          },
        },
      },
      animation: {
        pulseGlow: "pulseGlow 2s ease-in-out infinite",
      },
    },
  },
};
