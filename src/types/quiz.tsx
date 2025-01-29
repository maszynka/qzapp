export interface Question {
    question: string,
    answers: string[],
    correct: number,
    explanation: string
}

export interface Quiz {
    label: string,
    alias: string,
    questions: Question[]
}

export interface Entry {
    label: string,
    alias: string,
    groups?: Entry[],
    quizzes?: Quiz[] | ReadonlyArray<Quiz>
}
