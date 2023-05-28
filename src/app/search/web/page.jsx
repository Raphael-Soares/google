import React from "react";
const API_KEY = process.env.GOOGLE_API_KEY;
const CONTEXT = process.env.GOOGLE_CONTEXT_KEY;
export default async function page({ searchParams }) {
    const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT}&q=${searchParams.searchTerm} `
    );

    const data = await response.json();

    const results = data.items;

    return <div>{results && results.map((result) => <h1>{result.title}</h1>)}</div>;
}
