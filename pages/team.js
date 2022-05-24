import { teamData } from "../src/data/teamdata";
import Image from 'next/image';
function Team() {
  return (
    <div>
        <section className="text-gray-400 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-3xl font-medium title-font mb-4 text-white tracking-widest">OUR TEAM</h1>
                   </div>
                <div className="flex flex-wrap -m-2">

                    {teamData.map((member) => {
                      
                        return (
                          
      <div className="p-4 lg:w-1/2">
      <div className="hidden">key={member.id}</div>
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left p-5 bg-slate-700/[0.4] hover:bg-green-400/[0.1] hover:scale-105 rounded-md">
          <Image alt="team" layout="intrinsic" width="800" height="800" className=" rounded-lg w-24 h-24 object-contain object-top sm:mb-0 mb-4" src={member.image} />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-white">{member.name}</h2>
            <h3 className="text-gray-400 mb-3">{member.position}</h3>
            <p className="mb-4 text-justify">{member.description}</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>

                            )
                    })}
                    </div>
            </div>
        </section>
    </div>
  )
}

export default Team;