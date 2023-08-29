import React from "react";

const ArticlesView = () => {
    return (
        <div className="">
            <p className="w-[40vw] text-4xl flex mx-auto text-center leading-relaxed py-[15vh]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </p>
            <div className="flex flex-col gap-y-7">
                <h1 className="text-4xl font-bold">Articles</h1>
                <p className="w-[30vw] tracking-wider">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                </p>
            </div>
            <div className="w-full py-20">
                <img
                    className="w-full object-contain"
                    src="/assets/images/spiderman.png"
                    alt=""
                />
            </div>
        </div>
    );
};

export default ArticlesView;
