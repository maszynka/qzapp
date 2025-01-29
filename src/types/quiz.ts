export interface Entry {
    label: string;
    alias: string;
    groups?: readonly Entry[];
    quizzes?: readonly Entry[];
    questions?: {
        question: string;
        answers: string[];
        correct: number;
        explanation: string;
    }[];
}
