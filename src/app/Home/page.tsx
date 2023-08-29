import React from "react";

const HomeView = () => {
    return (
        <main className="">
            <div className="w-[80vw] h-[90vh] flex items-center justify-between mx-auto my-10">
                <div className="w-[40vw] flex flex-col gap-y-20">
                    <div className="flex flex-col gap-y-5">
                        <h1 className="text-lg font-medium text-tertiary-color">
                            Read about mobile legend heroes, items and more
                        </h1>
                        <h1 className="text-6xl capitalize font-bold">
                            Mobile Legends: Bang Bang
                        </h1>
                        <p className="text-lg text-[#FFF]">
                            Mobile Legends: Bang Bang is a mobile multiplayer
                            online battle arena (MOBA) game developed and
                            published by Moonton, a subsidiary of ByteDance.
                            Released in 2016, the game grew in popularity; most
                            prominently in Southeast Asia.
                        </p>
                    </div>
                    <button className="bg-primary-color px-5 py-3 rounded-3xl w-[12vw] h-14">
                        Get more details
                    </button>
                </div>
                <div className="absolute top-0 -right-72">
                    <img
                        src="/assets/images/controller.png"
                        className="w-[55vw] h-[90vh] drop-shadow-2xl object-contain bg-transparent"
                        alt=""
                    />
                </div>
            </div>
        </main>
    );
};

export default HomeView;
