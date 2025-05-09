import Link from "next/link";
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

function ProjectsList() {
  return (
    <div
      className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-2 max-w-screen-lg gap-8 p-4 mx-auto min-h-screen"
      id="projects"
    >
      {" "}

      {/* ATCASA */}
      <a  target="blank">
        <div className="relative flex items-center justify-center border-zinc-800 border-1  bg-gradient-to-br from-black via-blue-600 to-zinc-black rounded-3xl overflow-hidden group">
          <div className="relative p-10 transition-transform duration-500 ease-in-out group-hover:scale-105">
            <img
              src="https://i.imgur.com/nUItXDf.png"
              alt="Atcasa"
              className="rounded-sm shadow-xl w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-4/5 bg-gradient-to-t from-black to-transparent z-10" />
          </div>

          {/* Title and Subtitle */}
          <div className="absolute bottom-3 left-8 text-left z-20">
            <div className="flex items-center gap-2 text-white">
              <div className="text-lg md:text-xl">Atcasa</div>
              <div className="bg-zinc-600 p-1.5 rounded-full opacity-40">
                <FiExternalLink />
              </div>
            </div>

            <p className="text-zinc-500 mt-1 truncate text-wrap text-xs md:text-sm w-60 lg:w-80">
              Website for renting and managing properties, built for both
              property hosts and guests.
            </p>
          </div>
        </div>
      </a>
      {/* TICKZY */}
      <a  target="blank">
        <div className="relative flex items-center justify-center border-zinc-800 border-1  bg-gradient-to-b from-black via-zinc-700 to-zinc-black rounded-3xl overflow-hidden group">
          <div className="relative p-10 transition-transform duration-500 ease-in-out group-hover:scale-105">
            <img
              src="https://i.imgur.com/ym9hHrd.png"
              alt="Atcasa"
              className="rounded-sm shadow-xl w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-4/5 bg-gradient-to-t from-black to-transparent z-10" />
          </div>

          {/* Title and Subtitle */}
          <div className="absolute bottom-3 left-8 text-left z-20">
            <div className="flex items-center gap-2 text-white">
              <div className="text-lg md:text-xl">Tickzy</div>
              <div className="bg-zinc-600 p-1.5 rounded-full opacity-40">
                <FiGithub />
              </div>
            </div>

            <p className="text-zinc-500 mt-1 truncate text-wrap  text-xs md:text-sm w-60 lg:w-80">
              Website for managing events and handling ticket sales and
              bookings.
            </p>
          </div>
        </div>
      </a>
      {/* WANDERWAVE */}
      <a  target="blank">
        <div className="relative flex items-center justify-center border-zinc-800 border-1  bg-gradient-to-bl from-white via-[#CCDEE6] to-zinc-white rounded-3xl overflow-hidden group">
          <div className="relative p-10 transition-transform duration-500 ease-in-out group-hover:scale-105">
            <img
              src="https://i.imgur.com/pvWw093.png"
              alt="WanderWave"
              className="rounded-sm shadow-xl w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-4/5 bg-gradient-to-t from-black to-transparent z-10" />
          </div>

          {/* Title and Subtitle */}
          <div className="absolute bottom-3 left-8 text-left z-20">
            <div className="flex items-center gap-2 text-white">
              <div className="text-lg md:text-xl">WanderWave</div>
              <div className="bg-zinc-600 p-1.5 rounded-full opacity-40">
                <FiExternalLink />
              </div>
            </div>

            <p className="text-zinc-500 mt-1 truncate text-wrap  text-xs md:text-sm w-60 lg:w-80">
              Company profile website for a travel agency.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectsList;
