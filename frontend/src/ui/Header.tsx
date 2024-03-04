import React from "react";
import { menuArray } from "../data/menuData";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" flex justify-between bg-slate-800 py-3 px-24">
      <div>
        <p className=" text-gray-400 text-[20px] font-bold">
          Book Management System
        </p>
      </div>
      <div>
        <ul className=" flex gap-4">
          {menuArray.map(({ title, link }) => (
            <Link to={link}>
              <li key={link} className=" text-white text-[16px] uppercase">
                {title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
