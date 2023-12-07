
import Image from "next/image";
import NavbarLinks from "../NavbarLinks/NavbarLinks";
import logo from "@/assets/logo.png"


const Navbar = () => {
    return (
        <div className="bg-black">
            <div className="navbar  max-w-7xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavbarLinks></NavbarLinks>
                        </ul>
                    </div>
                    <button className="flex items-center gap-2">
                        <Image src={logo} height={50} width={50} alt="logo"/>
                        <p className="text-xl font-bold font-kanit text-white">CINEMATEK</p>
                    </button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu bg-none  menu-horizontal px-1">
                        <NavbarLinks></NavbarLinks>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-orange-600 text-white border-none font-bold">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;