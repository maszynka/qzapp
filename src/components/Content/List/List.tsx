import React from "react";
import { Link } from "react-router-dom";
import { slashSuffix } from "../../../data/helpers/string";

interface match {
    isExact: boolean;
    path: string;
    url: string;
    params: object;
}

interface ListProps {
    match: match;
    entries: EntryType[];
    type: string;
}

interface QuestionType {
    question: string;
    answers: string[];
    correct: number;
    explanation: string;
}

interface QuizType {
    label: string;
    alias: string;
    questions: QuestionType[];
}

interface EntryType {
    label: string;
    alias: string;
    groups?: EntryType[];
    quizzes?: QuizType[];
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
