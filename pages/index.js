import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/dist/client/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SofSafe</title>
        <meta
          name="description"
          content="We Help Startups That Benefit Our World"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded p-6"
                src="/logo512.png"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-white text-3xl title-font font-medium mb-1">
                  We Help Startups That Benefit The World
                </h1>
                <div className="flex mb-4">
                  <span className="flex m-3 pl-3 py-2 border-l-2 border-gray-500 space-x-2s">
                    <a className="text-gray-400 pl-3">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-400 pl-3">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-400 pl-3">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <p className="leading-relaxed text-justify text-2xl text-gray-400">
                  Our software engineering expertise helps startups that are
                  building innovative solutions which go beyond merely the next
                  quarter's profits, and aim to make a positive impact on the
                  environment and our society as a whole. We help founders
                  create software that will provide them an edge in their
                  industry. Our team combines strong technical architecture
                  skills with a focus on accountability, collaboration and
                  empathy.
                </p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>

                <div className="flex">
                  <Link href="/#contact">
                    <button className="flex ml-auto text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded">
                      Get in Touch
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="container px-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="text-white text-lg">
            <h1 className="text-3xl">What We Do</h1>
            <div  className="container px-1 py-4 mx-auto">
              <div  className="flex flex-wrap -m-2">
                <div  className="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div  className="h-full flex items-center border-gray-200 p-4 rounded-lg bg-green-200/[0.2] hover:bg-green-900 hover:scale-105">
                    <img
                      alt="team"
                       className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src="/01cloud-computing.jpg"
                    />
                    <div  className="flex-grow">
                      <h2  className="text-gray-200 title-font font-medium">
                        Create Cloud Solutions Architecture
                      </h2>
                    </div>
                  </div>
                </div>

                <div  className="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div  className="h-full flex items-center border-gray-200 p-4 rounded-lg bg-green-200/[0.2] hover:bg-green-900 hover:scale-105">
                    <img
                      alt="team"
                       className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src="/02team.jpg"
                    />
                    <div  className="flex-grow">
                      <h2  className="text-gray-200 title-font font-medium">
                        Build Your Product and Team
                      </h2>
                    </div>
                  </div>
                </div>

                <div  className="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div  className="h-full flex items-center border-gray-200 p-4 rounded-lg bg-green-200/[0.2] hover:bg-green-900 hover:scale-105">
                    <img
                      alt="team"
                       className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src="/03team.jpg"
                    />
                    <div  className="flex-grow">
                      <h2  className="text-gray-200 title-font font-medium">
                        Provide Coaching to Existing Teams
                      </h2>
                    </div>
                  </div>
                </div>

                <div  className="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div  className="h-full flex items-center border-gray-200 p-4 rounded-lg bg-green-200/[0.2] hover:bg-green-900 hover:scale-105">
                    <img
                      alt="team"
                       className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src="/04software.jpg"
                    />
                    <div  className="flex-grow">
                      <h2  className="text-gray-200 title-font font-medium">
                        Make Software and Hardware Work Together
                      </h2>
                      <p  className="text-gray-500"></p>
                    </div>
                  </div>
                </div>

                <div  className="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div  className="h-full flex items-center border-gray-200 p-4 rounded-lg bg-green-200/[0.2] hover:bg-green-900 hover:scale-105">
                    <img
                      alt="team"
                       className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src="/05linux.jpg"
                    />
                    <div  className="flex-grow">
                      <h2  className="text-gray-200 title-font font-medium">
                        Solve Difficult Linux Challenges
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/services">
                <button className="mt-4 flex ml-auto text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded">
                  Details
                </button>
              </Link>
            </div>
          </div>
          </div>
          </div>
        </section>
      </main>
    </div>
  );
}
