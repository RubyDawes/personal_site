import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Menu, Home, BookOpen, Mail, Microscope, Code2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { to: "/", text: "Home", Icon: Home },
    { to: "/work", text: "Research", Icon: Microscope },
    { to: "/publications", text: "Publications", Icon: BookOpen },
    { to: "/software", text: "Software & Tools", Icon: Code2 },
    { to: "/contact", text: "Contact", Icon: Mail },
  ];

  return (
    <header className="bg-[#FAA275] flex flex-col justify-center items-center p-4 " style={{}}>
      <img
        src='https://pbs.twimg.com/profile_images/1185996917974753280/ksIHCycs_400x400.jpg'
        alt="Ruebena Dawes Avatar"
        className="w-40 h-40 rounded-full mb-4 shadow-md border-white border-4"
      />
      <h1 className="text-4xl font-bold mb-2">Dr. Ruebena Dawes</h1>
      <nav className="w-full mt-4">
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-purple-800">
            <Menu size={24} />
          </button>
        </div>
        <ul className={`flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-6 ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>
          {navItems.map(({ to, text, Icon }) => (
            <li key={to} className="border border-white hover:border-black rounded-md p-2">
              <Link to={to} className="text-white hover:text-black  tracking-wide flex items-center">
                <Icon size={20} className="mr-2" />
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;