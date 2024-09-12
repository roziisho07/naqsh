import React from "react";

function SocialWork() {
  return (
    <div>
      <section>
        <div className="w-[100vw] md:w-full py-24  mt-10 font-sans p-8 bg-slate-900">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src="https://res.cloudinary.com/dbtqrbhh6/image/upload/v1726171174/IMG_3162_fbz9f7.jpg"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-4xl font-bold sm:text-3xl">
                  Promoting Mental Health Awareness through Naqsh Arts Camp
                </h2>

                <p className="mt-4 text-gray-900">
                  {`Naqsh Arts Camps are designed to promote mental health awareness among young children and youth in various region's of Gilgit-Baltistan. These camps blend creative expression with mental well-being, offering art workshops, mindfulness sessions, and open discussions. The camps aim to nurture creativity, build emotional resilience, and raise awareness about mental health challenges in the region’s youth, contributing to a healthier, more connected community.`}
                </p>

                <a
                  href="#"
                  className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  Read Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SocialWork;
