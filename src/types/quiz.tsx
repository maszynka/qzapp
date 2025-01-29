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

export type Entry = Readonly<EntryRaw> | EntryRaw
export type EntryRaw = {
    label: string,
    alias: string,
    groups?: Entry[],
    quizzes?: Quiz[] | ReadonlyArray<Quiz>
}
