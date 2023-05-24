import React from "react";

const Header = () => {
  return (
    <header className="w-full py-10 px-0 absolute flex flex-row justify-around top-0">
      <p className="text-black font-medium text-base cursor-pointer hover:text-yellow-500">Tailwind</p>

      <ul className="flex flex-row gap-12 text-black font-medium text-base">
        <li className="cursor-pointer hover:text-yellow-500">Docs</li>
        <li className="cursor-pointer hover:text-yellow-500">Components</li>
        <li className="cursor-pointer hover:text-yellow-500">Blog</li>
        <li className="cursor-pointer hover:text-yellow-500">Showcase</li>
      </ul>

      <div className="flex flex-row gap-6 text-black font-medium text-base">
        <p className="cursor-pointer hover:text-yellow-500">Login</p>
        <p className="cursor-pointer hover:text-yellow-500">Sign up</p>
      </div>
    </header>
  );
};

export default Header;
