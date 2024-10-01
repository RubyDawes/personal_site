import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Menu, Home, Sparkle, BookOpen, User, Mail, PenTool} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { to: "/", text: "Home", Icon: Home },
    { to: "/work", text: "Current Research", Icon: Sparkle },
    { to: "/publications", text: "Publications", Icon: BookOpen },
    { to: "/talks", text: "Talks", Icon: User },
    { to: '/other', text: 'Other Writing', Icon: PenTool },
    { to: "/contact", text: "Contact", Icon: Mail },
  ];

  return (
    <header className="bg-[#efe7dc] flex flex-col justify-center items-center p-4 mt-4" style={{}}>
      <img
        src='https://pbs.twimg.com/profile_images/1185996917974753280/ksIHCycs_400x400.jpg'
        alt="Ruebena Dawes Avatar"
        className="w-28 h-28 rounded-full mb-4 shadow-md"
      />
      <h1 className="text-4xl font-bold mb-2">Dr. Ruebena Dawes</h1>
      <h2 className="text-2xl mb-2">Postdoctoral Researcher</h2>
      <h4 className="text-md mb-2">Computational Rare Disease Genomics Group</h4>
      <h4 className="text-md mb-2">University of Oxford</h4>
      <nav className="w-full mt-4">
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-purple-800">
            <Menu size={24} />
          </button>
        </div>
        <ul className={`flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-6 ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>
          {navItems.map(({ to, text, Icon }) => (
            <li key={to} className="border border-gray-800 rounded-md p-2">
              <Link to={to} className="text-gray-600 hover:text-purple-800  tracking-wide flex items-center">
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