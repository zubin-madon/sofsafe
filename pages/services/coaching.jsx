import Link from 'next/dist/client/link';
function Coaching() {
  return (
    <div className="text-white mt-10">
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="text-3xl font-medium title-font mb-2">
              BRAVE - A SofSafe Methodology
            </h1>

          </div>

          <div className="text-right pr-24 self-end">
              <Link href="/services/">
                <a className="text-green-500 inline-flex items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
                  </svg>
                  &nbsp;Back To Services
                </a>
              </Link>
            </div>


          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg bg-green-900/[0.1] hover:scale-105">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-3xl text-white title-font mb-2">
                  What is BRAVE?
                </h2>
                <p className="leading-relaxed text-xl">
                  <li>
                    BRAVE is a modern approach To Remote Software Development.
                    It was created after studying Agile, NASA flight operations,
                    SUBSAFE, and model-based systems engineering (MBSE). BRAVE
                    combines these methodologies while embracing the quick pace
                    needed when building modern software.
                    <br />
                  </li>
                  <li>
                    BRAVE procedures ensure that every software development task
                    contributes to business continuity by utilizing meticulous
                    engineering validation and a detailed documentation system
                    designed to facilitate long-term maintainability. The BRAVE
                    development methodology is a collection of philosophies,
                    policies, and procedures that are well documented,
                    actionable, and structured for ease of learning.
                    <br />
                  </li>
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg bg-green-900/[0.1] hover:scale-105">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-white text-3xl title-font mb-2">
                  What are the most common causes of failure for software
                  development projects?
                </h2>
                <p className="leading-relaxed text-xl">
                  When we started researching various software development
                  failures 6 years ago, we saw a common pattern. From the FAA’s
                  AAS program in the 1980s to modern startups in the 2010s, the
                  primary threats to business continuity are:
                  
                    <li>
                    Technical failures/delays due to the lack of an adequate process for the review of requirements, architecture, and proposed code.
                    </li>

                    <li>
                    Key technical milestones could only be accomplished by a few team members because the technical documentation system did not facilitate efficient
                     knowledge transfer to the entire team.
                    </li>

                    <li>
                    These threats have a significant negative impact on the maintainability, reliability, and performance of developed software. 
                    As well, they increase employee burnout and lead to delays in project timelines. Failure to counter these threats during the initial development
                     of a software solution often dooms the software to failure for the rest of its service life. And in some cases, the company that makes the software.
                    </li> 
                </p>
              </div>
            </div>

            <div className="w-full p-4">
              <div className="border border-gray-200 p-6 rounded-lg bg-green-900/[0.1] hover:scale-105">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-white text-3xl title-font mb-2">
                How does BRAVE work?
                </h2>
                <p className="leading-relaxed text-xl">
                BRAVE procedures ensure that every software development task contributes
                 to business continuity by utilizing meticulous engineering validation and a detailed documentation system designed to facilitate long-term maintainability.
                  
                    <li>
                    Blueprint: An experienced engineer updates the software's detailed blueprint documents with the changes needed. If required, they create experimental code
                     to verify assumptions.
                    </li>

                    <li>
                    Review: A second experienced engineer validates that the proposed changes in the blueprint document will accomplish the goal of the task, 
                    not create unacceptable business risk, and ensure the changes can be understood by another engineer.
                    </li>

                    <li>
                    Assemble: An engineer performs the needed software changes using the blueprint as a guide, which enables them to code in a flow state. 
                    For code that requires more skill to implement, an experienced engineer will write the code.
                    </li>

                    <li>
                    Verify: Secondary testing is performed by QA for end-user-facing changes or an experienced engineer for infrastructure changes.
                    </li>
                    <li>
                    Enact: An experienced engineer verifies that the blueprint documents match the actual state of the tested code, 
                    and then coordinates with dev-ops to deploy the changes, so they can benefit customers.
                    </li>
                </p>
              </div>
            </div>

            <div className="w-full p-4">
              <div className="border border-gray-200 p-6 rounded-lg bg-green-900/[0.1] hover:scale-105">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-white text-3xl title-font mb-2">
                How well has BRAVE performed?
                </h2>
                <p className="leading-relaxed text-xl">
                We started testing that system 5 years ago with an all-remote cross-functional team from 11 countries. 
                That team brought to market and maintained two SaaS platforms and three IoT products. The primary benefits were:
                  <li>
                  Team members requested fewer knowledge transfer meetings. Instead, they made use of written documentation.
                  </li>
                  <li>
                    For startups that have the luxury of being flush with cash,
                    we charge our standard hourly rates.
                  </li>
                  <li>
                  Employees were able to maintain a better work/life balance.
                  </li>
                  <li>
                  Key personnel moving on to a new opportunity had a greatly reduced impact on business continuity.
                  </li>
                  <li>
                  Shorter time between hiring new employees and their first production code commits going to live.
                  </li>
                
                  <li>
                  Team members were able to rapidly and efficiently switch between applying their 
                  skills to the maintenance of existing software projects and the creation of new software projects.
                  </li>
                  <li>
                  Minimum time to no meeting time was required when handing over tasks between developers.
                  </li>
             
                  <li>
                  Team members were able to quickly transition to working on maintenance and features for software projects they were not familiar with.
                  </li>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg bg-green-900/[0.1] hover:scale-105">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-white text-3xl title-font mb-2">
                How can your team implement the BRAVE methodology?
                </h2>
                <p className="leading-relaxed text-xl">
                We provide a consulting service where we provide workshops, 1-on-1 mentoring, and process improvement analysis. With everything we teach, we also provide actionable written documentation for your team to reference. If you are starting a team, we can teach them good practices from the start and be available to mentor them in a long-term relationship. For those who already have an established team, we can help analyze the current processes and suggest improvements. 
                If you would like to learn more, please contact us at Info@SofSafe.cloud.
                </p>
              </div>
            </div>

          <div className="pt-10 text-right pr-24">
            <Link href="/services/">
              <a className="text-green-500 inline-flex items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
                </svg>
                &nbsp;Back To Services
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
  }
    export default Coaching;