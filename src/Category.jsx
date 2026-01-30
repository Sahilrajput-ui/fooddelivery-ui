import React from "react";
import { RiGalleryView2 } from "react-icons/ri";
import { FaPastafarianism } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";

const Category = [
  {
    id: 1,
    name: "All",
    icon: <RiGalleryView2 className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 2,
    name: "breakfast",
    icon: <MdFreeBreakfast className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 3,
    name: "soups",
    icon: <TbSoupFilled className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 4,
    name: "pasta",
    icon: <FaPastafarianism className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 5,
    name: "main-course",
    icon: <MdOutlineFoodBank className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 6,
    name: "pizza",
    icon: <GiFullPizza className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 7,
    name: "burger",
    icon: <FaHamburger className="w-[60px] h-[60px] text-green-600" />,
  },
];
export default Category
