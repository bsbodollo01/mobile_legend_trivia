import { M_PLUS_1 } from "next/font/google";
import React from "react";

const HeroesView = () => {
    const games = [
        { id: 1, img: "/assets/images/hero-argus.jpg", name: "Argus" },
        { id: 2, img: "/assets/images/hero-aldous.jpg", name: "Aldous" },
        { id: 3, img: "/assets/images/hero-alucard.jpg", name: "Alucard" },
        { id: 4, img: "/assets/images/hero-alpha.jpg", name: "Alpha" },
        { id: 5, img: "/assets/images/hero-yss.jpg", name: "Yi Sun-shin" },
    ];
    return (
        <div className="">
            <div className="flex justify-between pb-10">
                <h1 className="text-4xl font-semibold">Mobile Legend Heroes</h1>
                <button className=" text-white text-lg rounded-lg px-7 py-3 bg-secondary-color">
                    SEE ALL
                </button>
            </div>
            <div className="grid grid-cols-5 gap-x-1">
                {games.map((game) => {
                    return (
                        <div className="">
                            <img
                                className="w-72 h-[400px] cursor-pointer bg-gray-50 rounded-3xl"
                                src={game.img}
                                alt=""
                            />
                            <h1 className="flex justify-center pt-7 text-lg">
                                {game.name}
                            </h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HeroesView;
