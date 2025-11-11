import logo from "../assets/imgs/logo withnot background .png";

export default function Loader() {
  return (
    <div
      className="flex justify-center items-center h-screen bg-black"
      style={{
        animation: "fadeBg 2s infinite alternate",
      }}>
      <style>
        {`
          @keyframes pulseGlow {
            0% {
              transform: scale(1);
              opacity: 0.85;
              filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.4));
            }
            25% {
              transform: scale(1.12);
              opacity: 1;
              filter: drop-shadow(0 0 22px rgba(255, 255, 255, 0.8));
            }
            50% {
              transform: scale(1);
              opacity: 0.85;
              filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.4));
            }75% {
              transform: scale(1.12);
              opacity: 1;
              filter: drop-shadow(0 0 22px rgba(255, 255, 255, 0.8));
            }100% {
              transform: scale(1);
              opacity: 0.85;
              filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.4));
            }
          }
        `}
      </style>

      <img
        src={logo}
        alt="Loading..."
        style={{
          width: "140px",
          height: "140px",
          animation: "pulseGlow 2s ease-in-out infinite",
        }}
      />
    </div>
  );
}
