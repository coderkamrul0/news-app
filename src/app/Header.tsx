import Link from "next/link";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <FaBars className="cursor-pointer" />
        <Link href={"/"} prefetch={false}>
          <h1 className="font-serif text-2xl md:text-4xl text-center">
            The <span className="underline decoration-6 decoration-orange-400">Current</span> News
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
            {/* Dark Button  */}
          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
            Subscribe Now
          </button>
        </div>
      </div>
      {/* NavLinks  */}
      <NavLinks/>
      {/* Search Box  */}
      <SearchBox/>
    </header>
  );
};

export default Header;
