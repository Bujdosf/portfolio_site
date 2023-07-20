"use client";
import Head from "next/head";
import Image from "next/image";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import pfp from "public/assets/pfp.jpeg";
import rps from "public/assets/rps2.png";
import login from "public/assets/login.png";
import skylex_delivery from "public/assets/skylex-delivery.png";

const SingleItem = ({ imageSrc, title, description, siteLink, githubLink }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const expandedRef = useRef(null);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (expandedRef.current && !expandedRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  }

  return (
    <div className={`basis-1/3 flex-1 ${isExpanded ? "" : "hover:scale-105"}`}>
      <div
        className={`relative h-full flex flex-col justify-between${
          isExpanded ? " h-3/4" : ""
        }`}
        onClick={handleCardClick}
      >
        <div>
          <Image src={imageSrc} layout="responsive" objectFit="cover" />
        </div>
        <div className="bg-white dark:bg-blue-200 p-4 rounded-b-3xl text-center dark:text-black">
          <div>
            <h3 className="text-lg font-medium pt-2 pb-4">{title}</h3>
          </div>
        </div>
      </div>
      {isExpanded && (
        <div
          ref={expandedRef}
          className="overflow-hidden min-w-min min-h-min fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 md:text-sm bg-white rounded-3xl dark:bg-slate-600 dark:text-white flex justify-center items-center z-50"
        >
          <div className="p-8 rounded-3xl flex items-center overflow-auto">
            <div className="w-1/2">
              <div className="mb-4">
                <Image
                  src={imageSrc}
                  alt="Your Image"
                  layout="responsive"
                  className="w-full"
                />
              </div>
              <div className="text-4xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                {siteLink && (
                  <a href={siteLink} target="_blank" rel="noopener noreferrer">
                    <FaGlobe className="hover:text-blue-500" />
                  </a>
                )}
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub className="hover:text-github dark:hover:filter dark:hover:invert" />
                  </a>
                )}
              </div>
            </div>
            <div className="w-1/2 p-4">{description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""} id="top-section">
      <Head>
        <title>Bujdos Ferenc</title>
        <meta
          name="description"
          content="Website created by Bujdos Ferenc, mainly for portfolio purposes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-violet-50 px-10 dark:bg-gray-900 md:px-20 lg:px-40 text-black">
        <section className="min-h-screen">
          <nav className="pt-2 mb-20 flex justify-between dark:text-white fixed left-10 right-10 z-10 ">
            <h1></h1>
            <ul className="flex flex-wrap items-center">
              <li
                className="cursor-pointer text-2xl ml-8 mb-6 mt-2"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
              </li>
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2  mb-3 rounded-md ml-4"
                href="#top-section"
              >
                Top
              </a>
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2  mb-3 rounded-md ml-4"
                href="#about-section"
              >
                About
              </a>
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2  mb-3 rounded-md ml-4"
                href="#portfolio-section"
              >
                Portfolio
              </a>
            </ul>
          </nav>

          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Bujdos Ferenc
            </h2>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-5 mb-5 md:h-96 md:w-96">
              <Image src={pfp} layout="fill" objectFit="cover" />
            </div>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Dev whatever
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Whatever
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://github.com/Bujdosf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="hover:text-github dark:hover:filter dark:hover:invert" />
              </a>
              <a
                href="https://www.linkedin.com/in/ferenc-bujdos-965017234/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="hover:text-linkedin" />
              </a>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center">
          <a
            href="https://github.com/Bujdosf/portfolio_site/tree/main/public/assets/CV.docx"
            download
          >
            <button className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-8 py-4  mb-3 rounded-md ml-7"
                >
              Önéletrajzom letöltése
            </button>
          </a>
        </section>

        <section id="about-section">
          <div>
            <h3 className="text-3xl py-1 pt-20 dark:text-white ">
              Programozási nyelvek melyekkel tanulmányaim ideje alatt szerencsém
              volt ismerkednem:
            </h3>
            <ul className="text-md py-2 list-disc ml-4 pl-4  text-gray-800 dark:text-gray-200">
              <li>C</li>
              <li>C#</li>
              <li>Java/Kotlin (mind desktop mind android környezetben)</li>
              <li>Python</li>
              <li>Webes nyelvek:</li>
              <ul className="list-inside list-disc">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>Tailwind</li>
              </ul>
            </ul>
            <h3 className="text-2xl py-1 pt-10 dark:text-white ">Egyebek:</h3>
            <ul className="text-md py-2 list-disc ml-4 pl-4  text-gray-800 dark:text-gray-200">
              <li>OpenGL</li>
              <li>MySQL</li>
              <li className="font-bold">Linux ismeret</li>
              <li className="font-bold">AWS / Cloudformation</li>
              <li>Kis szinten Assembly</li>
              <li>Illetve Verilog</li>
            </ul>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"></p>
          </div>
        </section>

        <section className="py-10" id="portfolio-section">
          <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap rounded-3xl">
            <SingleItem
              imageSrc={rps}
              title="RPS Website"
              githubLink="https://github.com/Bujdosf/Rock-Paper-Scissors_Website"
              siteLink="https://bujdosf.github.io/Rock-Paper-Scissors_Website/"
              description={
                <>
                  <p class="mb-4 text-lg text-center">
                    Webes egyetemi órára első project feladat.
                  </p>
                  <div class="flex items-center justify-center">
                    <div>
                      <p>Amit tanultam ez alatt:</p>
                      <ul class="list-disc ml-4 pl-4">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS + LocalStorage</li>
                      </ul>
                    </div>
                  </div>
                </>
              }
            />

            <SingleItem
              imageSrc={login}
              title="Login Website"
              githubLink="https://github.com/Bujdosf/PHP_LoginWebsite"
              siteLink="http://bujdosf.42web.io/index.php"
              description={
                <>
                  <p class="mb-4 text-lg text-center">
                    Webes egyetemi órára második project feladat.
                  </p>
                  <p class="mb-4">
                    Kicsit komplikáltabb feladat mint egy RPS oldal. Feladat
                    volt egy adatbázis létrehozása egy (akár) ingyenes
                    site-hosting oldalon, és feltölteni 2 oszloppal, email-cím
                    és kedvenc szín.
                  </p>
                  <p class="mb-4">
                    Minden infó meg volt előre adva, az email-jelszó páros
                    titkosítva egy txt állományban melyel php kommunikál,
                    viszont mivel csak akkor éro el az adatbázist ha az
                    email-jelszó páros (titkosítva) megegyezik egy a txt-ben
                    megtalálttal, ezért semmilyen sql-injection ellen merülő
                    megoldást nem is kellett bevezetni.
                  </p>
                  <p class="mb-4">
                    A Project vége csak valami visszajelzés az adott felhasználó
                    kedvenc színéről, mint pl a háttér változtatása a megadott
                    színre.
                  </p>
                  <p>Amit tanultam ez alatt:</p>
                  <ul className="list-disc ml-4 pl-4">
                    <li>PHP</li>
                    <li>Kicsit több CSS</li>
                  </ul>
                </>
              }
            />

            <SingleItem
              imageSrc={skylex_delivery}
              title="H2 DB Java App"
              githubLink="https://github.com/kiss-mate/sfm-project/tree/endgame/"
              description={
                <>
                  <p class="mb-4 text-lg text-center">
                    Egyetemi SFM órára csoport projekt.
                  </p>
                  <div class="flex items-center justify-center">
                    <div>
                      <p>Amit tanultam ez alatt:</p>
                      <ul class="list-disc ml-4 pl-4">
                        <p>
                          Főleg csak softver-paradigmok. Egyikőnk már munka
                          alatt csinálta velünk ezt, szóval tudott tanítani
                          minket hogy hogy megy vállalti környezetekben, még
                          akkor is ha egy kicsit sok volt egyszerre
                        </p>
                        <p>Illetve egy kis adatbázis bevezető</p>
                      </ul>
                    </div>
                  </div>
                </>
              }
            />
          </div>
        </section>

      </main>
    </div>
  );
}
