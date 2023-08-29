import React from "react";

const ProjectsView = () => {
    const images = [
        "/assets/images/spiderman.png",
        "/assets/images/spiderman.png",
        "/assets/images/spiderman.png",
    ];
    const images2 = [
        "/assets/images/spiderman.png",
        "/assets/images/spiderman.png",
    ];
    return (
        <div className="w-full mx-auto flex flex-col gap-y-10">
            <h1 className="text-center text-4xl">Our Recent Projects</h1>
            <p className="text-md text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </p>
            <div className="grid grid-cols-3 space-x-5">
                {images.map((img) => {
                    return (
                        <div className="">
                            <img
                                className="h-[30vh] cursor-pointer bg-gray-50 rounded-3xl"
                                src={img}
                                alt=""
                            />
                        </div>
                    );
                })}
            </div>
            <div className="grid grid-cols-2 space-x-5 mx-auto">
                {images2.map((img) => {
                    return (
                        <div className="">
                            <img
                                className=" w-[30vw] h-[30vh] cursor-pointer bg-gray-50 rounded-3xl"
                                src={img}
                                alt=""
                            />
                        </div>
                    );
                })}
            </div>
            <div className=" justify-center mx-auto py-10">
                <button className=" text-white text-2xl rounded-lg px-10 py-5 bg-secondary-color">
                    SEE ALL
                </button>
            </div>
        </div>
    );
};

export default ProjectsView;
