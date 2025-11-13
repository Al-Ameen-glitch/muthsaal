import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawer] = useState(false);
  const drawerRef = useRef(null);

  const toggleNavbar = () => {
    setMobileDrawer(!mobileDrawerOpen);
  };

  useEffect(() => {
    if (!mobileDrawerOpen) return;

    const handleOutsideClick = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setMobileDrawer(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [mobileDrawerOpen]);

  const handleNavClick = (href, e) => {
    if (href === "#") {
      e && e.preventDefault();
      setMobileDrawer(false);
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      setMobileDrawer(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">
              Muthsaal Investment NIG LTD
            </span>
          </div>

          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex space-x-4">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="bg-linear-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md"
              >
                Create an account
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div
              ref={drawerRef}
              className="fixed right-0 z-20 bg-neutral-900 w-full pt-85 pb-10 flex flex-col items-center justify-center lg:hidden"
            >
              <button
                onClick={toggleNavbar}
                className="absolute top-6 right-6 text-white text-2xl"
                aria-label="Close menu"
              >
                <X />
              </button>
              <ul className="w-full flex flex-col items-center justify-center mt-10">
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(item.href, e)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6 mt-8">
                <a
                  href="#"
                  onClick={(e) => handleNavClick("#", e)}
                  className="py-2 px-3 border rounded-md"
                >
                  Sign In
                </a>
                <a
                  href="#"
                  onClick={(e) => handleNavClick("#", e)}
                  className="bg-linear-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md"
                >
                  Create an account
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
