import { useState, useEffect } from "react";

function Header() {
  const [links, setLinks] = useState([
    { name: "الرئيسية", id: "home" },
    { name: "عنّا", id: "about" },
    { name: "الخدمات", id: "services" },
    { name: "الموقع", id: "location" },
    { name: "اتصل بنا", id: "contact" },
  ]);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto w-[80%] flex items-center justify-between py-2 md:py-1">
        <a
          href="#home"
          className="basis-1/3 flex items-center justify-start text-white w-full"
        >
          <img
            src="/src/assets/imgs/logo3.jpg"
            alt="logo-img"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full ml-1.5"
          />
          <div className="logo__text text-right">
            <h2 className="text-lg md:text-2xl font-bold">MAGIC</h2>
            <p className="text-[12px] md:text-xs">Dental Lab</p>
          </div>
        </a>
        <nav className="hidden md:flex basis-2/3 text-right">
          <ul className="flex gap-12 justify-end text-white">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.id}`}
                  className="text-white text-[18px] opacity-[0.9] hover:opacity-[1] hover:underline transition-all duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
