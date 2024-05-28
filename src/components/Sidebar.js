import React from "react";
import {
  MdHistory,
  MdHomeFilled,
  MdOutlineFeedback,
  MdOutlineFlag,
  MdOutlineHelp,
  MdOutlineSlowMotionVideo,
  MdOutlineSmartDisplay,
  MdOutlineSportsVolleyball,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdSettings,
  MdSubscriptions,
  MdThumbUpOffAlt,
} from "react-icons/md";
import { GiFilmStrip } from "react-icons/gi";
import { TbDeviceGamepad2, TbMusic } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { useSelector } from "react-redux";
export default function Sidebar() {
  const toggleMenu = useSelector((store) => store.app.isMenuOpen);
  const mainLinks = [
    { icon: <MdHomeFilled className="texl-xl" />, name: "Home" },
    { icon: <FaRegCompass className="texl-xl" />, name: "Explore" },
    { icon: <MdOutlineSlowMotionVideo className="texl-xl" />, name: "Shorts" },
    { icon: <MdSubscriptions className="texl-xl" />, name: "Subscriptions" },
  ];
  const secondaryLinks = [
    { icon: <MdOutlineVideoLibrary className="texl-xl" />, name: "Library" },
    { icon: <MdHistory className="texl-xl" />, name: "History" },
    {
      icon: <MdOutlineSmartDisplay className="texl-xl" />,
      name: "Your Videos",
    },
    { icon: <MdOutlineWatchLater className="texl-xl" />, name: "Watch Later" },
    { icon: <MdThumbUpOffAlt className="texl-xl" />, name: "Liked Videos" },
  ];
  const subscriptionLinks = [
    { icon: <MdOutlineSportsVolleyball className="texl-xl" />, name: "Sport" },
    { icon: <TbMusic className="texl-xl" />, name: "Music" },
    { icon: <TbDeviceGamepad2 className="texl-xl" />, name: "Gaming" },
    { icon: <GiFilmStrip className="texl-xl" />, name: "Films" },
  ];
  const helpLinks = [
    { icon: <MdSettings className="texl-xl" />, name: "Settings" },
    { icon: <MdOutlineFlag className="texl-xl" />, name: "Report Hostory" },
    { icon: <MdOutlineHelp className="texl-xl" />, name: "Help" },
    { icon: <MdOutlineFeedback className="texl-xl" />, name: "Send Feedback" },
  ];

  const textLinks = [
    [
      "About",
      "Press",
      "Copyright",
      "Contact us",
      "Creator",
      "Advertise",
      "Developers",
    ],
    [
      "Terms",
      "Privacy",
      "Policy & Safety",
      "How Youtube Works",
      "Test new features",
    ],
  ];
  return (
    toggleMenu && (
      <div className="w-2/12 pb-8 pr-5 overflow-auto sticky top-0 z-30 h-full dark:text-white hidden md:block">
        <ul className="flex flex-col border-b-2 border-gray-700">
          {mainLinks.map(({ icon, name }) => {
            return (
              <li
                key={name}
                className={`pl-6 py-3 hover:bg-zinc-600 flex items-center gap-5 text-decoration-none hover:cursor-pointer`}
              >
                {icon}
                <span className="text-sm tracking-wider">{name}</span>{" "}
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-col border-b-2  border-gray-700">
          {secondaryLinks.map(({ icon, name }) => {
            return (
              <li
                key={name}
                className={`pl-6 py-3 hover:bg-zinc-600 flex items-center gap-5 hover:cursor-pointer`}
              >
                {icon}
                <span className="text-sm tracking-wider">{name}</span>{" "}
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-col border-b-2  border-gray-700">
          {subscriptionLinks.map(({ icon, name }) => {
            return (
              <li
                key={name}
                className={`pl-6 py-3 hover:bg-zinc-600 flex items-center gap-5 hover:cursor-pointer`}
              >
                {icon}
                <span className="text-sm tracking-wider">{name}</span>{" "}
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-col border-b-2  border-gray-700">
          {helpLinks.map(({ icon, name }) => {
            return (
              <li
                key={name}
                className={`pl-6 py-3 hover:bg-zinc-600 flex items-center gap-5 hover:cursor-pointer`}
              >
                {icon}
                <span className="text-sm tracking-wider">{name}</span>{" "}
              </li>
            );
          })}
        </ul>
        <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
          {textLinks[0].map((name) => {
            return <li key={name}>{name}</li>;
          })}
        </ul>
        <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
          {textLinks[1].map((name) => {
            return <li key={name}>{name}</li>;
          })}
        </ul>
        <span className="px-4 text-sm text-zinc-400 ">&copy;2023 Google</span>
        <br />
        <p className="px-4 pt-3 text-sm text-zinc-400">
          This Clone is for learning web development Only.
        </p>
      </div>
    )
  );
}
