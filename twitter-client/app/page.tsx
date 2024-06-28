import { Inter } from "next/font/google";
import React from "react";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import {
  BsBell,
  BsBookmark,
  BsEnvelope,
  BsSearch,
  BsTwitter,
} from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode; // so basically images are type of reactNode
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BsSearch />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
];

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-52">
        <div className="col-span-3 pt-8 px-2">
          <div className="text-4xl h-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all w-fit">
            <BsTwitter />
          </div>
          <div className="mt-4 text-xl pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer mt-2"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pr-10">
              <button className="bg-[#1d9df0] font-semibold text-lg rounded-full w-full p-4">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[0.5px] border-l-[0.5px] border-gray-400"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
