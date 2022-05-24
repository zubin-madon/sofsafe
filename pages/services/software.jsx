import Link from 'next/dist/client/link';
function Software() {
    return (
      <div className="text-white mt-10">
        <section className="body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="text-3xl font-medium title-font mb-2">
                Would you drive over a bridge every day if it was as reliable as
                most modern software?
              </h1>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-2xl text-justify mb-5">
                Software Safety Procedures are individual, actionable, and
                auditable processes that can be integrated into a team's
                existing workflow. The foundation of these procedures are the
                principles in modern structural engineering that allow
                submarines, bridges, and large buildings to be safe and
                maintainable.
              </p>
              <h2 className="text-2xl font-medium title-font mb-2 text-center">
                Six Pillars of Maintainable and Reliable Software
              </h2>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-2xl text-justify">
                Much of SOFSAFE is based on SUBSAFE, the US Navy's program for
                ensuring submarines are maintainable and dependable over a long
                period. SOFSAFE also takes core concepts from civil engineering,
                which has brought us the infrastructure we rely on every day.
              </p>
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
                  <h2 className="text-3xl text-white title-font mb-2">
                    Software Blueprints
                  </h2>
                  <p className="leading-relaxed text-xl">
                    Just like bridges, every software application is different.
                    Imagine a construction company saved money by not making
                    detailed blueprints for a high-rise building. Instead, they
                    gave their electricians documents explaining how the future
                    occupants wanted to use each room in the building. Would you
                    feel safe in that building?
                    <br /> That approach sounds absurd; however, that is how
                    most of the software industry operates. Many teams have user
                    stories and flowcharts, yet they still need a meeting to do
                    the equivalent of determining what circuit breaker controls
                    an outlet.
                    <br /> At the start of a software project, a team can answer
                    questions quickly due to having extensive knowledge of the
                    project in their short-term memory. Over time, people move
                    on to other projects or forget some implementation details;
                    gradually, it becomes more expensive to maintain and add new
                    features to even a small project.
                    <br /> SOFSAFE's software blueprint procedure solves this
                    issue by specifying what must be documented for database
                    fields, method arguments, instance variables, and other
                    vital details. Unlike code comments, updating the software
                    blueprint can be done by anyone on the team and doesn't
                    require re-running automated and manual tests due to making
                    a git commit that fixes a typo in a comment. Documentation
                    can be improved over time by the entire team, enabling
                    engineers who are new to a team to make reliable production
                    changes much quicker.
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
                    Software Blueprint Reviews
                  </h2>
                  <p className="leading-relaxed text-xl">
                    On July 17, 1981, at the Hyatt Regency Hotel in Kansas City,
                    Missouri, 114 people died because a structural engineer
                    accepted a welder's plan via a phone call without performing
                    necessary calculations or viewing sketches that would have
                    revealed severe flaws. The structural engineering world
                    learned from that event. It changed its procedures to
                    require blueprints to be reviewed by a second engineer both
                    on initial creation and when there are changes to a
                    blueprint. <br />
                    Have you seen a developer verbally propose a solution to a
                    complex problem, and everyone listens and agrees to take
                    that path? That is the software equivalent of what killed
                    those 114 people. That engineering firm had gotten away with
                    not doing blueprint reviews for years, but it eventually
                    caught up with them. Software teams get away with not doing
                    software blueprint reviews for years, but any money saved by
                    that “streamlining” is lost when a major preventable
                    incident occurs.
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
                    Tech Stack Stories
                  </h2>
                  <p className="leading-relaxed text-xl">
                    Have you listened to an engineer explain how various
                    solution components interact to accomplish a user goal? They
                    are telling a story of what causes events to start, where
                    data will go, and what infrastructure will be involved. How
                    many of those stories exist in your organization? Are they
                    being documented? How would you find them, and how do you
                    know they are accurate?
                    <br />
                    SOFSAFE overcomes this challenge with Tech Stack Stories,
                    which are like user stories but for technology
                    infrastructure. A tech stack story tells HOW technology
                    infrastructure achieves a specific user or business goal.
                    This differs significantly from a tech stack diagram that
                    only documents the infrastructure in a solution.
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
                    Story Reviews
                  </h2>
                  <p className="leading-relaxed text-xl">
                    Modern submarine construction is very similar to software
                    development. Individual modules of the submarine are
                    built-in parallel by multiple shipyards. When a module is
                    ready, it is sent to the assembly shipyard to be combined
                    with the other modules of the submarine. This is only
                    possible because extensive peer review during the design
                    phases verifies that all the modules will work together when
                    assembled.
                    <br /> Like Shipyards, software development teams work in
                    parallel to build individual modules and combine them into
                    the desired software. Peer review of user stories and tech
                    stack stories enables finding issues long before writing a
                    single line of code, reducing burnout, development time, and
                    costs.
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
                  Combining Software Planning and QA into a Single Role
                </h2>
                <p className="leading-relaxed text-xl">
                  How often have you seen a software release pass QA testing,
                  only for the project's business analyst to state, “this isn't
                  what the client needs.” The bare minimum for testing software
                  is making sure the solution is reliable; software testing
                  needs to include frequent verification that the solution is
                  making progress towards meeting the customer's needs
                  accurately. For that reason, the people who plan the software,
                  and have the most in-depth knowledge of customer needs, should
                  be involved with software testing regularly.
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
export default Software;