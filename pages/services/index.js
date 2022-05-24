import Link from 'next/dist/client/link';
import Image from 'next/image';
function services() {
  return (
<section className="text-gray-500 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-white">SERVICES</h1>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 m-3 p-3">

      <div className="col-span-1 px-8 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-2xl font-medium title-font mb-4 pb-4 text-white">Startup Assistance Service</h2>
        <img className="object-contain w-1/2 mt-5 mb-5" src="https://images.pexels.com/photos/6774944/pexels-photo-6774944.jpeg?cs=srgb&dl=pexels-kindel-media-6774944.jpg&fm=jpg" alt="startup services"></img>
        <h3 className="text-2xl font-medium title-font mb-4 pb-4 text-gray-400">Get experienced help during the part of the journey where most startups fail</h3>
        <p className="leading-relaxed text-xl mb-4">
  Managing a startup is HARD, there is an overwhelming amount of work to do. You need to do the “invisible” work of hiring a team, creating processes and meeting with investors. All while leading from the front to bring your idea to the market. We&apos;ve been there.
  </p>
        <Link href="/services/startup">
        <a className="text-green-500 inline-flex items-center">Read More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
        </Link>
      </div>

      <div className="col-span-1 px-8 border-l-2 border-gray-200 border-opacity-60">
      <h2 className="text-2xl font-medium title-font mb-4 pb-4 text-white">Team Coaching</h2>
      <img className="object-contain w-1/2 mt-5 mb-5" src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?cs=srgb&dl=pexels-fauxels-3183150.jpg&fm=jpg" alt="coaching"></img>
      <h3 className="text-2xl sm:text-2xl font-medium title-font mb-4 pb-4 text-gray-400">A Modern Approach To Remote Software Development</h3>
      <p className="leading-relaxed text-xl mb-4">
      We studied Agile, NASA flight operations, SUBSAFE, and model-based systems engineering (MBSE). Then we created BRAVE, which combines those methodologies while embracing the quick pace needed when building modern software. 
      </p>
      <Link href="/services/coaching">
      <a className="text-green-500 inline-flex items-center">Read More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
        </Link>
      </div> 

      <div className="col-span-1 px-8 border-l-2 border-gray-200 border-opacity-60">
      <h2 className="text-2xl font-medium title-font mb-4 pb-4 text-white">Software Safety Procedures</h2>
      <img className="object-contain w-1/2 mt-5 mb-5" src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?cs=srgb&dl=pexels-danny-meneses-943096.jpg&fm=jpg" alt="software safety"></img>
      <h3 className="text-2xl sm:text-2xl font-medium title-font mb-4 pb-4 text-gray-400">Would you drive over a bridge every day if it was as reliable as most modern software?</h3>
      <p className="leading-relaxed text-xl mb-4">
      Software Safety Procedures are individual, actionable, and auditable processes that can be integrated into a team's existing workflow.  The foundation of these procedures are the principles in modern structural engineering that allow submarines, bridges, and large buildings to be safe and maintainable.
      </p> 
      <Link href="/services/software">
      <a className="text-green-500 inline-flex items-center">Read More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>      
      </Link>
      </div> 

    </div>
  </div>
</section>
  )
}

export default services