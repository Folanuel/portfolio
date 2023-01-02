import React from "react";

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-[#08192f] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full ">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
                <p className="text-4xl font-bold border-b-4 inline border-blue-400">
                About
                </p>
            </div>
            <div></div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
                <p>Hi nice to meet you, please take a look around </p>
            </div>
            <div>
                <p>
                I am a French Toast 🍞lover and I am passionate about building efficient software that improves the lives of people. I build web apps that are responsive. 
                </p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default About;
