export type Question = {
    id: number;
    question: string;
    required: boolean;
    options: QuestionOption[];
}

export type QuestionOption = { value: string; label: string; score: -1 | 1 }


export type QuestionOptionProps = {
    questionId: string;
    option: QuestionOption;
    onSelect: (id: string, value: any) => void;
    selected: any;
}

export type QuestionCardProps = {
    question: Question;
    onSelect: (id: string, value: string) => void;
    onNext: () => void;
    selected: string;
    totalQuestions: number;
}
  
export type Result = {
    title: string;
    description: string;
}