import Image from "next/image";
import logo from "./ui/img/NaqshLogo.png";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-100  px-20 py-4">
      <a href="/">
        <Image src={logo} width={100} height={100} alt="logo of naqsh" />
      </a>
      <a
        className="border rounded-lg p-2  bg-white text-slate-900 group-hover:text-white text-sm font-semibold flex items-center space-x-3  hover:bg-sky-400 hover:ring-sky-400"
        href="/"
      >
        <h3>Home</h3>
      </a>
    </div>
  );
}

export default Navbar;
