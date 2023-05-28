"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

import React from "react";

import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";

export default function SearchHeaderOptions() {
    const pathName = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const searchTerm = searchParams.get("searchTerm");

    function selectTab(tab) {
        router.push(`/search/${tab === "images" ? "image" : "web"}?searchTerm=hello`);
    }
    return (
        <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 tex-gray-700 text-sm">
            <div
                onClick={() => selectTab("all")}
                className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
                    pathName === "/search/web" && "!text-blue-600 !border-blue-600"
                } `}
            >
                <AiOutlineSearch className="text-md" />
                <p>All</p>
            </div>
            <div
                onClick={() => selectTab("images")}
                className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
                    pathName === "/search/image" && "!text-blue-600 !border-blue-600"
                } `}
            >
                <AiOutlineCamera className="text-md" />
                <p>Images</p>
            </div>
        </div>
    );
}
