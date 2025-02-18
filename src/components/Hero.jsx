import background from "../assets/imgs/back.jpg";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-center text-white relative z-10 py-32">
        <h2 className="text-6xl font-bold mt-[20%]">Magic Dental Lab</h2>
        <p className="mt-4 text-xl"> - ابتسامتك أولويتنا - </p>
      </div>
    </section>
  );
}

export default HeroSection;
