import React from "react";
import Hero from "../../public/assets/AKR08352.jpg";


const Header = () => {
	return (
        <div className="hero-section overflow-y-scroll bg-cover bg-fixed bg-center">
            <div className="bg-black h-full w-full bg-opacity-40">
                <div className="text-white flex flex-col h-full w-full p-16 items-start justify-end tracking-widest overflow-hidden">
                    <div className="font-serif text-3xl py-4">Shaz's Graduation Photos</div>
                    <div className="font-normal uppercase">April 6, 2024</div>
                    <button className="arrow-scroll h-16 -mb-16 relative w-full" onClick={() => scrollTo({ top: innerHeight, behavior: "smooth"})}>
                        <div className="arrow"></div>
                        <div className="arrow"></div>
                        <div className="arrow"></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
