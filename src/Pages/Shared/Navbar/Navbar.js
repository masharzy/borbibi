import React from "react";
import NavigationShape1 from "../../../images/navigation-shape1.png";
import NavigationShape2 from "../../../images/navigation-shape2.png";
import logo from "../../../images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div class="absolute w-full left-0 top-0 z-50">
      <div className="navbar bg-base-100 p-5 bg-transparent px-8">
        <div className="navbar-start">
          <ul class="social-icons flex justify-around">
            <li
              className="text-white bg-[#ffffff66] inline-flex items-center justify-center w-[45px] h-[45px] rounded-full
             hover:bg-[#f17677] cursor-pointer duration-500 mr-4"
            >
              <a
                href="https://web.facebook.com/borbibimedia/"
                rel="noreferrer"
                target="_blank"
              >
                <FaFacebookF />
              </a>
            </li>
            <li
              className="text-white bg-[#ffffff66] inline-flex items-center justify-center w-[45px] h-[45px] rounded-full
             hover:bg-[#f17677] cursor-pointer duration-500  mr-4"
            >
              <a
                href="https://twitter.com/borbibimedia?fbclid=IwAR2zU5XKDIgKG1kEsXtoMna7D737m1G5Te8chTISfkHYy8XzIoYKYTu9lPo"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li
              className="text-white bg-[#ffffff66] inline-flex items-center justify-center w-[45px] h-[45px] rounded-full
             hover:bg-[#f17677] cursor-pointer duration-500 mr-4"
            >
              <a
                href="https://www.linkedin.com/in/borbibimedia"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li
              className="text-white bg-[#ffffff66] inline-flex items-center justify-center w-[45px] h-[45px] rounded-full
             hover:bg-[#f17677] cursor-pointer duration-500 mr-4"
            >
              <a
                href="https://www.instagram.com/borbibimedia"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li
              className="text-white bg-[#ffffff66] inline-flex items-center justify-center w-[45px] h-[45px] rounded-full
             hover:bg-[#f17677] cursor-pointer duration-500"
            >
              <a
                href="https://www.youtube.com/channel/UCrPZT6oJ-H3xXR2HJaEBbPQ"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-center">
          <div class="logo-section flex items-center justify-center">
            <img class="w-[100px]" src={NavigationShape1} alt="" />
            <a
              class="bg-white rounded-full ml-[25px] mr-[25px] h-[120px] w-[120px] justify-center inline-flex items-center before:absolute  before:border-white before:border-[5px] before:rounded-full before:animate-spin border before:w-[150px] before:h-[150px] before:border-dotted relative before:duration-[5000s]"
              href="/"
            >
              <img src={logo} alt="biyerful-logo" />
            </a>
            <img class="w-[100px]" src={NavigationShape2} alt="" />
          </div>
        </div>
        <div className="navbar-end">
          <button className="text-white px-[20px] py-[13px] bg-transparent rounded-full border-2 text-[14px] flex justify-center items-center mr-5">
            <FaRegUser />
            &nbsp; Login
          </button>
          <button className="text-white px-[20px] py-[13px] bg-transparent rounded-full border-2 text-[14px] flex justify-center items-center">
            <FaHeadphonesAlt />
            &nbsp; Register
          </button>
        </div>
      </div>
      <div class="navigation-bottom flex justify-center">
        <ul className="menu menu-horizontal text-white rounded-box font-normal text-base">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/service">Our Service</a>
          </li>
          <li>
            <a href="/blog">Blogs</a>
          </li>
          <li>
            <a href="/profile-search">Search</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
