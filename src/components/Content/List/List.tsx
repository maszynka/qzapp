import React from "react";
import { Link } from "react-router-dom";
import { slashSuffix } from "../../../data/helpers/string";
import { Entry, Question } from "../../../types/quiz";

interface match {
    isExact: boolean;
    path: string;
    url: string;
    params: object;
}

interface ListProps {
    match: match;
    entries: Entry[];
    type: string;
}




export const List: React.FC<ListProps> = ({ match, entries, type }) => {
    return (
        <>
            {entries.map((entry, i) => (
                <Link to={slashSuffix(match.url) + entry.alias} key={i}>
                    {entry.label}
                </Link>
            ))}
        </>
    );
};
