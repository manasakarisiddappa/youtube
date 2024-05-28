import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { IoAppsSharp } from "react-icons/io5";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API, generateSearchURL } from "../utils/constants";
import { cacheData } from "../utils/searchSlice";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";
import { addDarkTheme, addLightTheme } from "../utils/themeSlice";
import { addVideos } from "../utils/videoSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [showItems, setShowItems] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const searchCache = useSelector((store) => store.cacheResult);
  const [transcript, setTranscript] = useState("");
  const themeMode = useSelector((store) => store.theme.themeMode);

  const themeClickHandler = () => {
    if (themeMode === "light") {
      dispatch(addDarkTheme());
    } else {
      dispatch(addLightTheme());
    }
  };

  const navigate = useNavigate();
  const transcriptRef = useRef("");
  const recognitionRef = useRef(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const startSpeechRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.onstart = () => {
      setIsSpeaking(true);
    };
    recognition.onresult = (event) => {
      const currentTranscript = event.results[0][0].transcript;
      transcriptRef.current = currentTranscript;
    };
    recognition.onend = () => {
      setIsSpeaking(false);
      const transcript = transcriptRef.current;
      if (transcript.length > 0) {
        const searchQuery = encodeURIComponent(transcript);
        if (window.location.pathname !== "/search") {
          navigate(`/search?q=${searchQuery}`);
        } else {
          navigate(`?q=${searchQuery}`, { replace: true });
        }
        transcriptRef.current = "";
      }
      recognitionRef.current = null;
    };
    recognitionRef.current = recognition;
    recognition.start();
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchData();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchData = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheData({ [searchQuery]: json[1] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid  grid-flow-col m-2 p-2 shadow-md sticky top-0 z-50 bg-white dark:bg-gray-900  dark:text-white">
      <div className="flex col-span-1">
        <GiHamburgerMenu
          className="text-2xl mt-2.5 hover:cursor-pointer hidden md:block"
          onClick={toggleMenuHandler}
        />
        <div className="flex gap-1 justify-center items-center">
          <Link className="flex" to={"/"}>
            <BsYoutube className="text-orange-600 text-3xl ml-2 hover:cursor-pointer" />
            <span className="text-xl ml-1 font-medium hover:cursor-pointer">
              EasyStream
            </span>
          </Link>
        </div>
      </div>
      <div className="col-span-10 px-10 flex items-center">
        <div className="w-full">
          <div className=" w-full flex ">
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              onFocus={() => setShowItems(true)}
              onBlur={() => setShowItems(false)}
              type="text"
              className="sm:w-1/2 border border-gray-400 p-2 pl-5 rounded-l-full dark:bg-gray-900 w-[130px]"
            />
            <Link to={"/search?q=" + searchQuery}>
              <button
                style={{ height: "41px" }}
                className="border border-gray-400 rounded-r-full w-10 flex items-center justify-center"
              >
                <AiOutlineSearch />
              </button>
            </Link>

            {/* <div
              className="hover:cursor-pointer ml-1 sm:ml-3 mt-3 "
              onClick={themeClickHandler}
            >
              {themeMode === "light" ? <MdOutlineLightMode /> : <MdLightMode />}
            </div> */}
          </div>
          {showItems && (
            <div className="fixed rounded-lg">
              <ul
                style={{ width: "440px" }}
                className={
                  suggestions.length &&
                  "bg-white py-2 px-5 dark:py-0 dark:px-0 rounded-lg shadow-sm"
                }
              >
                {suggestions.map((value, index) => {
                  return (
                    <li
                      key={index}
                      className="flex px-2 py-2 items-center gap-2 hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <AiOutlineSearch />
                      {value}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        {isSpeaking && (
          <div className="speech-box border text-black">
            <input value={transcriptRef.current}></input>
          </div>
        )}
        <div
          className="text-xl bg-zinc-700 p-3  text-white rounded-full hover:cursor-pointer hover:bg-zinc-500 hidden md:block"
          onClick={startSpeechRecognition}
        >
          <TiMicrophone />
        </div>
      </div>

      <div className="flex gap-5 items-center text-xl ">
        <div className=" hidden md:block">
          <BsCameraVideo />
        </div>
        <div className="relative hidden md:block">
          <BsBell />
          <span className="absolute bottom-2 left-2 bg-red-600 rounded-full px-1 text-xs">
            9+
          </span>
        </div>
      </div>
    </div>
  );
};

export default Head;
