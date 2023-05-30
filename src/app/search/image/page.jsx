import ImageSearchResults from "@/components/ImageSearchResults";
import Link from "next/link";
import React from "react";
const API_KEY = process.env.GOOGLE_API_KEY;
const CONTEXT = process.env.GOOGLE_CONTEXT_KEY;
export default async function page({ searchParams }) {
    const startIndex = searchParams.start || 1;
    const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex} `
    );

    if (response.status !== 200) {
        throw new Error("Failed to fetch");
    }

    const data = await response.json();

    const results = data;

    if (!results) {
        return (
            <div className="flex flex-col justify-center items-center pt-10 px-6 sm:px-0">
                <h1 className="text-3xl pb-4">No results</h1>
                <p className="text-lg">
                    Try searching for something else or go back to the{" "}
                    <Link className="text-blue-500" href="/">
                        Homepage
                    </Link>
                </p>
            </div>
        );
    }
    return <div>{results && <ImageSearchResults results={results} />}</div>;
}
