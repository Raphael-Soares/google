"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomeSearch() {
    const [input, setInput] = useState("");
    const [randomSearchLoading, setRandomSearchLoading] = useState(false);
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        if (!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`);
    }

    async function randomResearch() {
        setRandomSearchLoading(true);
        const response = await fetch("https://random-word-api.herokuapp.com/word").then((res) =>
            res.json().then((data) => data[0])
        );
        setRandomSearchLoading(false);
        router.push(`/search/web?searchTerm=${response}`);
    }
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex items-center w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
            >
                <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-grow focus:outline-none"
                />
                <BsFillMicFill className="text-lg" />
            </form>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center mt-8">
                <button className="btn" type="submit">
                    Google search
                </button>
                <button
                    className="btn flex items-center justify-center"
                    disabled={randomSearchLoading}
                    onClick={randomResearch}
                >
                    {randomSearchLoading ? (
                        <img src="/loading.svg" className="w-6 text-center" />
                    ) : (
                        "I am feeling lucky"
                    )}
                </button>
            </div>
        </>
    );
}
