import Image from "next/image";
import logo from "../components/ui/img/NaqshLogo.png";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center font-sans  ">
      <div className="md:w-[30rem] ">
        <Image src={logo} alt="logo of naqsh" />
      </div>
      <section className="flex items-center justify-center flex-col gap-2 p-4">
        <h1 className="text-[24px]">Welcome to Naqsh</h1>
        <h2>Your creative partner</h2>
      </section>
      <section className="flex items-start left-0 w-full flex-col py-6">
        <h1 className="text-2xl">Services</h1>
        <h2>Get Started Today!</h2>
      </section>

      <div className="gap-y-2 grid lg:grid-cols-3 lg:gap-6 p-2 ">
        <a
          href="#"
          className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
        >
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6  stroke-sky-500 group-hover:stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
              />
            </svg>

            <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
              Music, Sound Design and VFX
            </h3>
          </div>
          <p className="text-slate-500 group-hover:text-white text-sm">
            Create a new project from a variety of starting templates.
          </p>
        </a>
        <a
          href="#"
          className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
        >
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6  stroke-sky-500 group-hover:stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>

            <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
              Photography and Editing
            </h3>
          </div>
          <p className="text-slate-500 group-hover:text-white text-sm">
            Create a new project from a variety of starting templates.
          </p>
        </a>
        <a
          href="#"
          className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
        >
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6  stroke-sky-500 group-hover:stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>

            <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
              Videography, Editing and VFX
            </h3>
          </div>

          <p className="text-slate-500 group-hover:text-white text-sm">
            Create a new project from a variety of starting templates.
          </p>
        </a>
        <a
          href="#"
          className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
        >
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6  stroke-sky-500 group-hover:stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>

            <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
              Graphics design
            </h3>
          </div>

          <p className="text-slate-500 group-hover:text-white text-sm">
            Create a new project from a variety of starting templates.
          </p>
        </a>
        <a
          href="#"
          className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
        >
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 stroke-sky-500 group-hover:stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>

            <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
              Website Design
            </h3>
          </div>

          <p className="text-slate-500 group-hover:text-white text-sm">
            Create a new project from a variety of starting templates.
          </p>
        </a>
      </div>
    </div>
  );
}

export default Hero;
