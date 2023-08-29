import React from "react";

const NavbarView = () => {
    return (
        <header className="sticky top-0 w-[80vw] py-3 z-20 flex items-center justify-between mx-auto px-5 bg-none drop-shadow-lg backdrop-blur-lg">
            <div className="flex gap-x-5 items-center">
                <svg
                    width="70"
                    height="70"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#FA9021"
                        d="M7.97 16L5 19c-.33.3-.77.5-1.25.5A1.75 1.75 0 0 1 2 17.75v-.25l1-7.38A4.524 4.524 0 0 1 7.5 6h9c2.36 0 4.29 1.81 4.5 4.12l1 7.38v.25a1.75 1.75 0 0 1-1.75 1.75c-.48 0-.92-.2-1.25-.5l-2.97-3H7.97M7 8v2H5v1h2v2h1v-2h2v-1H8V8H7m9.5 0a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75m-1.75 1.75a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75m3.5 0a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75M16.5 11.5a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75Z"
                    />
                </svg>
            </div>
            <div className="flex gap-x-14 items-center">
                <h1 className="text-xl font-light hover:text-primary-color hover:underline">
                    Home
                </h1>
                <h1 className="text-xl font-light hover:text-primary-color hover:underline">
                    About Us
                </h1>
                <h1 className="text-xl font-light hover:text-primary-color hover:underline">
                    Portfolio
                </h1>
                <h1 className="text-xl font-light hover:text-primary-color hover:underline">
                    News
                </h1>
                <button className=" bg-primary-color px-5 py-3 text-base rounded-lg">
                    Contact Us
                </button>
            </div>
        </header>
    );
};

export default NavbarView;
