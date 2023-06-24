import React from "react";

const Background = () => (
    <div className="absolute top-0 left-0 z-[-1] flex h-[100vh] w-[100vw]  items-start justify-center overflow-x-hidden pt-20 opacity-10">
        <div className="relative aspect-square w-[40vw] max-w-xl animate-spin-slow">
            <div className="bg-emerald-300 absolute -left-1/3 -top-1/3 h-full w-full animate-bgmove rounded-full blur-3xl " />
            <div className="absolute -right-1/3 -top-1/3 h-full w-full animate-bgmove rounded-full bg-[#f9a8d4] blur-3xl animation-delay-1000" />
            <div className="absolute top-1/3 h-full w-full animate-bgmove rounded-full bg-[#67e8f9] blur-3xl animation-delay-2000" />
        </div>
    </div>
);

export default Background;