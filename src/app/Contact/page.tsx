import React from "react";

const ContactsView = () => {
    return (
        <div className="space-y-10 pb-20">
            <div className="flex flex-col gap-y-7">
                <h1 className="text-4xl font-bold">Articles</h1>
                <p className="w-[30vw] tracking-wider">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                </p>
            </div>
            <div className="w-full p-10 grid grid-cols-3 bg-black rounded-lg">
                <div className="col-span-2 my-auto">
                    <h1>Stay in the loop</h1>
                    <p>
                        Subscribe to receive the latest news and updates about
                        TDA. We promise not to spam you!
                    </p>
                </div>
                <div className="relative col-span-1">
                    <input
                        type="text"
                        placeholder="Enter email address"
                        className="bg-white w-full h-20 rounded-lg p-5"
                    />

                    <button
                        type="button"
                        className="absolute right-5 top-5 bottom-5 rounded-xl py-3 px-5 text-center bg-primary-color text-white"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactsView;
