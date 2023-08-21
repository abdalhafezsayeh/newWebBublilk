/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import { VscListUnordered } from "react-icons/vsc";
import { BiLogInCircle, BiUserCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { AiOutlineBars, AiOutlineClose, AiOutlineLogin, AiOutlineMenu } from "react-icons/ai";
import ModalCom from "./globalComponents/Modal";
import Login from "./globalComponents/Login";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsBookmarks } from "react-icons/bs";
import UpdateProfile from "./globalComponents/UpdateProfile";
import { UserData } from "../context/userContext";
import Trips from "./globalComponents/Trips";
import SidePar from "./pwa/SidePar";
import SignUp from "./globalComponents/SignUp";
import { MdAppRegistration } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";

const Navbarr = () => {
  const router = useRouter();
  const { data, setUserData, handelSetFlagUserNotLoginInDesktop, flagUserNotLoginInDesktop } = useContext(UserData);

  const [showModalLogin, setShowModalLogin] = useState(false);
  const handleCloseMdalLogin = (_) => {
    event.preventDefault();
    setShowModalLogin(!showModalLogin);
  };

  const [showModalProfile, setShowModalProfile] = useState(false);
  const handleCloseMdalProfile = (_) => {
    event.preventDefault();
    setShowModalProfile(!showModalProfile);
  };

  const [showModalTrips, setShowModalTrips] = useState(false);
  const handleCloseMdalTrips = (_) => {
    event.preventDefault();
    setShowModalTrips(!showModalTrips);
  };

  const handleCloseMdalSignUp = (_) => {
    event.preventDefault();
    handelSetFlagUserNotLoginInDesktop()
  };


  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);

  const btn = useRef(null);
  const menu = useRef(null);

  useEffect(() => {
    if (btn.current) {
      if (active) {
        setActive2(true);
      } else {
        setActive2(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // write function change background color navbar when scrol
  const [navbarr, setNavbarr] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 5) {
      setNavbarr(true);
    } else {
      setNavbarr(false);
    }
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const closeListNavbarWhenScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    if (scrollPosition >= 5) {
      setActive(false);
    } else {
      // console.log('lol')
    }
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", closeListNavbarWhenScroll);
    return () => {
      window.removeEventListener("scroll", closeListNavbarWhenScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window != "undefined") {
      window.innerWidth > 639
        ? window.addEventListener("scroll", changeNavbar)
        : null;
    }

    return () => {
      window.removeEventListener("scroll", closeListNavbarWhenScroll);
    };
  }, []);

  const handleClocseListNavbar = () => {
    setActive2(false);
    setActive(false);
  };

  const serviceRoutes =
    router.pathname == "/taxi-aeroport-geneve-gare" ||
    router.pathname == "/transport-business-solutions-entreprise" ||
    router.pathname == "/transport-business-solutions-entreprise/taxi-navette-entreprise" ||
    router.pathname == "/transport-business-solutions-entreprise/taxi-pour-deplacements-professionnels" ||
    router.pathname == "/transport-business-solutions-entreprise/taxi-seminaires-congres" ||
    router.pathname == "/evenements-prives" ||
    router.pathname == "/evenements-prives/anniversaire" ||
    router.pathname == "/evenements-prives/mariage" ||
    router.pathname == "/evenements-prives/bapteme";
  const businessSolutionsRoutes = router.asPath.startsWith("/transport-business-solutions-entreprise");
  const eventsRoutes = router.asPath.startsWith("/evenements-prives");

  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("KiroTravel_User");
    if (data || user) {
      setUser(data);
    } else {
      setUser(null);
    }
  }, [data]);

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem("KiroTravel_User");
    location.reload();
  };

  const handleProfileFromProfile = () => {
    setShowModalProfile(true);
    setShowProfileMenu(!showProfileMenu);
  };

  const handleTrips = () => {
    setShowModalTrips(true);
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <>
      {active2 && (
        <div
          className="fixed top-0 left-0 bg-transparent w-full h-full z-[80]"
          onClick={() => handleClocseListNavbar()}
        ></div>
      )}

      <div
        className={`${
          navbarr || active2
            ? "bg-[#ffffffeb]  text-black shadow-2xl"
            : "text-black bg-white"
        } duration-200 sticky w-full top-0 z-[90] hidden md:block`}
      >
        <div className="flex justify-between items-center relative">
          <div
            onClick={() => {
              router.push("/");
            }}
            className="cursor-pointer w-20 h-20 ml-2 sm:ml-4 lg:ml-8"
          >
            <img
              className="w-full h-full object-contain"
              src="/logo.webp"
              alt="-Centre Hospitalier Annecy Genevois - Site de Saint-Julien en Genevois taxi gare"
            />
          </div>

          {/* Content List  */}
          <div className="">
            <ul className="absolute left-2/4 lg:hidden flex gap-3">
              {!user && (
                <>
                  <li
                    onClick={() => setShowModalLogin(true)}
                    className="lg:hidden block"
                  >
                    <span className="cursor-pointer py-2 lg:py-0 px-2  duration-100 hover:text-secondary">
                      <AiOutlineLogin size={25} />
                    </span>
                  </li>
                  <li
                    onClick={() => handleCloseMdalSignUp(true)}
                    className="lg:hidden block"
                  >
                    <span className="cursor-pointer py-2 lg:py-0 px-2  duration-100 hover:text-secondary">
                      <MdAppRegistration size={25} />
                    </span>
                  </li>
                </>
              )}

              {user && (
                <li className="lg:hidden block relative">
                  <div
                    className="cursor-pointer py-2 px-3 w-[90px] border-[1px] border-[#999] rounded-3xl flex justify-between items-center text-black  duration-500 hover:text-main"
                    onClick={toggleProfileMenu}
                  >
                    {showProfileMenu ? (<AiOutlineClose size={20} className="animate__animated animate__heartBeat" />) : (<AiOutlineBars size={20} className="animate__animated animate__heartBeat" />)}
                    <BiUserCircle size={25} />
                  </div>
                  <div
                    className={`myProfileShowOrHide duration-500 z-50 rounded-b-xl lg:absolute -left-32 top-12 bg-[#ffffffeb] drop-shadow-2xl min-w-[120px] text-black ${
                      showProfileMenu ? "block animate__animated animate__fadeInDown" : "hidden animate__animated animate__fadeInUp"
                    }`}
                  >
                    <ul className="p-1 w-[200px]">
                      <li
                        onClick={() => handleProfileFromProfile()}
                        className="flex gap-2 px-2 h-20 items-center border-b-[1px] border-[#999] cursor-pointer hover:bg-main duration-100  hover:text-white py-2"
                      >
                        <span>
                          <CgProfile size={30} />
                        </span>
                        <span className="flex flex-col">
                          <span className="text-[13px]">Ahmed</span>
                          <span className="text-[11px] text-[#555]">Online</span>
                        </span>
                      </li>
                      <li
                        onClick={() => handleTrips()}
                        className="flex justify-between items-center cursor-pointer hover:bg-main duration-100  hover:text-white py-2"
                      >
                        <div className="flex gap-2 px-2 justify-center items-center">
                          <span>
                            <BsBookmarks size={20} />
                          </span>
                          <span className="text-[#112211] text-[14px]">Trips</span>
                        </div>
                        <span>  <IoIosArrowForward /> </span>
                      </li>
                      <li
                        onClick={() => handleLogout()}
                        className="flex gap-2 px-2 items-center cursor-pointer hover:bg-main duration-100  hover:text-white py-2"
                      >
                        <span>
                          <IoLogOut size={20} />
                        </span>
                        <span  className="text-[#112211] text-[14px]">Logout</span>
                      </li>
                    </ul>
                  </div>
                </li>
              )}
            </ul>

            {/* Button Toggle List Navbar  */}
            <div
              ref={btn}
              onClick={() => setActive(!active)}
              className="block lg:hidden cursor-pointer border-[1px] border-[#999] p-1 rounded-[3px] mr-8 lg:mr-10"
            >
              {active2 ? (
                <span
                  className={`${
                    navbarr || active2 ? "text-black" : "text-[#999]"
                  }`}
                >
                  <AiOutlineClose size={25} />
                </span>
              ) : (
                <span
                  className={`${
                    navbarr || active2 ? "text-black" : "text-[#999]"
                  }`}
                >
                  <VscListUnordered size={25} />
                </span>
              )}
            </div>

            {/* List Navbar  */}
            <ul
              ref={menu}
              className={`absolute lg:static -left-0 w-full lg:mr-10 duration-100  ${
                active
                  ? "top-[80px] bg-[#ffffffeb] shadow-2xl lg:shadow-none"
                  : "-top-[600px] bg-transparent"
              } ${
                navbarr ||
                router.pathname == "/offre-du-moment-vtc-taxi/" ||
                router.pathname == "/media"
                  ? "lg:text-black"
                  : "lg:text-white"
              }   text-black lg:bg-transparent lg:flex lg:items-center gap-4 flex-col lg:flex-row`}
            >
              <Link
                onClick={() => handleClocseListNavbar()}
                href="/"
                className={`${
                  router.pathname == "/" ? "border-b-[2px] border-black font-bold text-black" : "bg-transparent"
                } block uppercase py-2 lg:py-2 px-3 text-black/80 text-[13px] hover:bg-main duration-100 cursor-pointer`}
              >
                Home
              </Link>
              <li
                className={`${
                  serviceRoutes ? "border-b-[2px] border-black font-bold text-black" : "bg-transparent"
                } relative cursor-pointer py-2 px-2 hover:bg-main duration-100 overflow-hidden lg:overflow-visible`}
              >
                <div className="myServHaver text-[13px] text-black/80 flex items-center gap-2 ">
                  <span className="lg:py-0">SERVICES</span>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>
                {/* Show Or Hidden When Hover In Element  */}
                <div className="myServShowOrHide z-50 lg:absolute -left-60 top-11 bg-[#ffffffeb] drop-shadow-2xl min-w-[350px] text-black">
                  <ul className="p-3">
                    <Link
                      onClick={() => handleClocseListNavbar()}
                      href="/taxi-aeroport-geneve-gare/"
                      className={`${
                        router.pathname == "/taxi-aeroport-geneve-gare/"
                          ? "bg-main"
                          : "bg-transparent"
                      } block py-2 border-b-[1px] text-[13px] border-[#999] hover:bg-main duration-100 px-1 hover:text-white`}
                    >
                      AÉROPORT & GARE – Taxi
                    </Link>
                    <li className="relative">
                      <span
                        className={`busines text-[14px] ${
                          businessSolutionsRoutes ? "bg-main" : "bg-transparent"
                        } block cursor-pointer py-2 border-b-[1px] border-[#999] hover:bg-main duration-100 px-1 hover:text-white`}
                      >
                        <span className="flex items-center justify-between">
                          <span>BUSINESS & SOLUTIONS ENTREPRISE</span>
                          <span>
                            <RiArrowRightSLine size={20} />
                          </span>
                        </span>
                      </span>
                      {/* Show Or Hidden When Hover In Element BUSINESS */}
                      <ul className="businesShow lg:absolute h-auto shadow-xl -right-52 bg-[#ffffffeb] text-black">
                        <li>
                          <Link
                            onClick={() => handleClocseListNavbar()}
                            href="/transport-business-solutions-entreprise/"
                            className={`text-[13px] ${
                              router.pathname == "/transport-business-solutions-entreprise/"
                                ? "bg-main"
                                : "bg-transparent"
                            } py-2 block border-b-[1px] border-[#999] hover:bg-main duration-100 px-1 hover:text-white`}
                          >
                            Business & solutions entreprise
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => handleClocseListNavbar()}
                            href="/transport-business-solutions-entreprise/taxi-pour-deplacements-professionnels"
                            className={`text-[13px] ${
                              router.pathname ==
                              "/transport-business-solutions-entreprise/taxi-pour-deplacements-professionnels"
                                ? "bg-main"
                                : "bg-transparent"
                            } py-2 block border-b-[1px] border-[#999] hover:bg-main duration-100 px-1 hover:text-white`}
                          >
                            Déplacements Professionnels
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => handleClocseListNavbar()}
                            href="/transport-business-solutions-entreprise/taxi-navette-entreprise/"
                            className={`text-[13px] ${
                              router.pathname ==
                              "/transport-business-solutions-entreprise/taxi-navette-entreprise/"
                                ? "bg-main"
                                : "bg-transparent"
                            } relative block cursor-pointer py-2 border-b-[1px] border-[#999] hover:bg-main duration-100 px-1 hover:text'} py-2 border-b-[1px] border-[#999] hover:bg-main duration-100 px-1 hover:text-white`}
                          >
                            Navette Entreprise
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => handleClocseListNavbar()}
                            href="/transport-business-solutions-entreprise/taxi-seminaires-congres"
                            className={`text-[13px] ${
                              router.pathname ==
                              "/transport-business-solutions-entreprise/taxi-seminaires-congres"
                                ? "bg-main"
                                : "bg-transparent"
                            } relative block cursor-pointer py-2 hover:bg-main duration-100 px-1 hover:'} py-2 hover:bg-main duration-100 px-1 hover:text-white`}
                          >
                            SEMINAIRES & CONGRÈS
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <Link
                      onClick={() => handleClocseListNavbar()}
                      href="/Louer-une-voiture/"
                      className={`py-2 text-[13px] ${
                        router.pathname == "/Louer-une-voiture"
                          ? "bg-main"
                          : "bg-transparent"
                      } block border-b-[1px] border-[#999] hover:bg-main duration-100 px-1 hover:text-white`}
                    >
                      MISE À DISPOSITION
                    </Link>

                    <li className="relative">
                      <span
                        className={`evens ${
                          eventsRoutes ? "bg-main" : "bg-transparent"
                        } text-[13px] block cursor-pointer py-2 border-b-[1px] border-[#999] hover:bg-main duration-100 px-1 hover:text-white`}
                      >
                        <span className="flex items-center justify-between">
                          <span>EVENEMENTS PRIVÉS</span>
                          <span>
                            <RiArrowRightSLine size={20} />
                          </span>
                        </span>
                      </span>
                      {/* Show Or Hidden When Hover In Element BUSINESS */}
                      <ul className="evenShow lg:absolute h-auto shadow-xl -right-36 top-0 bg-[#ffffffeb] text-black">
                        <li>
                          <Link
                            onClick={() => handleClocseListNavbar()}
                            href="/evenements-prives"
                            className={`text-[13px] ${
                              router.pathname == "/evenements-prives"
                                ? "bg-main"
                                : "bg-transparent"
                            } py-2 block border-b-[1px] border-[#999] hover:bg-main duration-100 px-1 hover:text-white`}
                          >
                            Evenements privés
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => handleClocseListNavbar()}
                            href="/evenements-prives/anniversaire"
                            className={`text-[13px] ${
                              router.pathname == "/evenements-prives/anniversaire"
                                ? "bg-main"
                                : "bg-transparent"
                            } py-2 block border-b-[1px] border-[#999] hover:bg-main duration-100 px-1 hover:text-white`}
                          >
                            Anniversaire
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => handleClocseListNavbar()}
                            href="/evenements-prives/mariage"
                            className={`text-[13px] ${
                              router.pathname == "/evenements-prives/mariage"
                                ? "bg-main"
                                : "bg-transparent"
                            } relative block cursor-pointer py-2 border-b-[1px] border-[#999] hover:bg-main duration-100 px-1 hover:text'} py-2 border-b-[1px] border-[#999] hover:bg-main duration-100 px-1 hover:text-white`}
                          >
                            Mariage
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => handleClocseListNavbar()}
                            href="/evenements-prives/bapteme"
                            className={`text-[13px] ${
                              router.pathname == "/evenements-prives/bapteme"
                                ? "bg-main"
                                : "bg-transparent"
                            } relative block cursor-pointer py-2 hover:bg-main duration-100 px-1 hover:'} py-2 hover:bg-main duration-100 px-1 hover:text-white`}
                          >
                            Baptême
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <Link
                      onClick={() => handleClocseListNavbar()}
                      href="/chauffeurs-taxi-pour-enfants"
                      className={`py-2 text-[13px] ${
                        router.pathname == "/chauffeurs-taxi-pour-enfants"
                          ? "bg-main"
                          : "bg-transparent"
                      } block border-b-[1px] border-[#999] hover:bg-main duration-100 px-1 hover:text-white`}
                    >
                      CHAUFFEURS POUR ENFANTS
                    </Link>

                    <Link
                      onClick={() => handleClocseListNavbar()}
                      href="/Circuits"
                      className={`py-2 text-[13px] ${
                        router.pathname == "/Circuits"
                          ? "bg-main"
                          : "bg-transparent"
                      } block border-b-[1px] border-[#999] hover:bg-main duration-100 px-1 hover:text-white`}
                    >
                      CIRCUITS TOURISTIQUES
                    </Link>
                  </ul>
                </div>
              </li>
              <li
                className={`${
                  router.pathname == "/conciergerie" ||
                  router.pathname == "/blogs" ? "border-b-[2px] border-black font-bold text-black" : "bg-transparent" } relative items-center text-[13px] gap-2 py-2 lg:py-0 px-2 hover:bg-main duration-100 hover:text-white cursor-pointer`}
              >
                <div className="myAutresHaver text-black/80 flex items-center gap-2 cursor-pointer">
                  <span className="lg:py-2">AUTRES SERVICES</span>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>

                {/* Show Or Hidden When Hover In Element  */}
                <div className="myAutresShowOrHide z-50 lg:absolute -left-40 top-10 bg-[#ffffffeb] drop-shadow-2xl min-w-[350px] text-black">
                  <ul className="p-3">
                    <Link
                      onClick={() => handleClocseListNavbar()}
                      href="/conciergerie"
                      className={`block ${
                        router.pathname == "/conciergerie"
                          ? "bg-main"
                          : "bg-transparent"
                      } py-2 text-[13px] border-b-[1px] border-[#999] hover:bg-main duration-100 px-1 hover:text-white cursor-pointer`}
                    >
                      CONCIERGERIE
                    </Link>
                    <Link
                      onClick={() => handleClocseListNavbar()}
                      href="/blogs"
                      className={`block ${
                        router.pathname == "/blogs"
                          ? "bg-main"
                          : "bg-transparent"
                      } py-2 text-[13px] hover:bg-main duration-100 px-1 hover:text-white cursor-pointer`}
                    >
                      BLOG
                    </Link>
                  </ul>
                </div>
              </li>

              {!user && (
                <>
                  <li
                    onClick={() => setShowModalLogin(true)}
                    className="hidden lg:block"
                  >
                    <span className="cursor-pointer py-2 lg:py-0 px-2 text-black duration-100 hover:text-secondary">
                      <AiOutlineLogin size={20} />
                    </span>
                  </li>
                  <li
                    onClick={() => handleCloseMdalSignUp(true)}
                    className="hidden lg:block"
                  >
                    <span className="cursor-pointer py-2 text-black lg:py-0 px-2  duration-100 hover:text-secondary">
                      <MdAppRegistration size={20} />
                    </span>
                  </li>
                </>
              )}

              {user && (
                <li className="hidden lg:block relative ml-72">
                  <div
                    className="cursor-pointer py-2 px-3 w-[90px] border-[1px] border-[#999] rounded-3xl flex justify-between items-center text-black  duration-500 hover:text-main"
                    onClick={toggleProfileMenu}
                  >
                    {showProfileMenu ? (<AiOutlineClose size={20} className="animate__animated animate__heartBeat" />) : (<AiOutlineBars size={20} className="animate__animated animate__heartBeat" />)}
                    <BiUserCircle size={25} />
                  </div>
                  <div
                    className={`myProfileShowOrHide duration-500 z-50 rounded-b-xl lg:absolute -left-32 top-12 bg-[#ffffffeb] drop-shadow-2xl min-w-[120px] text-black ${
                      showProfileMenu ? "block animate__animated animate__fadeInDown" : "hidden"
                    }`}
                  >
                    <ul className="p-1 w-[200px]">
                      <li
                        onClick={() => handleProfileFromProfile()}
                        className="flex gap-2 px-2 h-20 items-center border-b-[1px] border-[#999] cursor-pointer hover:bg-main duration-100  hover:text-white py-2"
                      >
                        <span>
                          <CgProfile size={30} />
                        </span>
                        <span className="flex flex-col">
                          <span className="text-[13px]">Ahmed</span>
                          <span className="text-[11px] text-[#555]">Online</span>
                        </span>
                      </li>
                      <li
                        onClick={() => handleTrips()}
                        className="flex justify-between items-center cursor-pointer hover:bg-main duration-100  hover:text-white py-2"
                      >
                        <div className="flex gap-2 px-2 justify-center items-center">
                          <span>
                            <BsBookmarks size={20} />
                          </span>
                          <span className="text-[#112211] text-[14px]">Trips</span>
                        </div>
                        <span>  <IoIosArrowForward /> </span>
                      </li>
                      <li
                        onClick={() => handleLogout()}
                        className="flex gap-2 px-2 items-center cursor-pointer hover:bg-main duration-100  hover:text-white py-2"
                      >
                        <span>
                          <IoLogOut size={20} />
                        </span>
                        <span  className="text-[#112211] text-[14px]">Logout</span>
                      </li>
                    </ul>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <SidePar showLogin={handleCloseMdalLogin} />

      {/* Start Login  */}
      <ModalCom visible={showModalLogin} onClose={handleCloseMdalLogin}>
        <Login
          handelNext={() => {
            setShowModalLogin(false);
            window.location.reload();
          }}
          hiddenElement={true}
        />
      </ModalCom>

      <ModalCom visible={flagUserNotLoginInDesktop} onClose={handleCloseMdalSignUp}>
        <SignUp classInDesktop={"bg-[#FFF] px-3 h-[500px]  py-8 rounded-b-xl w-full"} hiddenElement={true} />
      </ModalCom>

      {/* Start Profile  */}
      <ModalCom visible={showModalProfile} onClose={handleCloseMdalProfile}>
        <UpdateProfile setShowModalProfile={setShowModalProfile} />
      </ModalCom>

      {/* Start Trips */}
      <ModalCom visible={showModalTrips} onClose={handleCloseMdalTrips}>
        <Trips setShowModalTrips={setShowModalTrips} />
      </ModalCom>
    </>
  );
};

export default Navbarr;
