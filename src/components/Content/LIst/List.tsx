import React from 'react'
import {Link, RouteComponentProps} from 'react-router-dom'
import PropTypes from 'prop-types'
import { slashSuffix } from '../../../data/helpers/string'

interface match {
    isExact: boolean;
    path: string;
    url: string;
}

interface ListProps {
    match: match,
    entries: EntryType[],
    type: string
}

interface QuestionType {
    question: string,
    answers: string[],
    correct: number,
    explanation: string
}

interface QuizType {
    label: string,
    alias: string,
    questions: QuestionType[]
}

interface EntryType {
    label: string,
    alias: string,
    groups: EntryType[],
    quizzes: QuizType[]
}

// export const BreadcrumbsItem: React.FC<RouteComponentProps> = ({ match }) => {

export const List: React.FC<ListProps> = ({ match, entries, type }) => {
    console.log(entries);
    return (
    <>
        {
            entries.map((entry, i) => (
                <Link to={slashSuffix(match.url) + entry.alias} key={i}>
                    {entry.label}
                </Link>
            )
        }
    </>)
};