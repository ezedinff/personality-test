import { ResultContext } from "lib/contexts";
import { Question } from "lib/types";
import router from "next/router";
import { useContext, useEffect, useState } from "react";


const useQuestions = () => {
    const { data, error } = useSWR<Question[]>("/api/questions", fetcher);
    const questions = data;
    const isLoading = !error && !data;
    const isError = error;

    return {
        questions,
        isLoading,
        isError,
    };
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useSWR: <T>(key: string, fetcher: (key: string) => Promise<T>) => {
    data: T | undefined;
    error: any;
} = (key, fetcher) => {
    const [data, setData] = useState(undefined);
    const [error, setError] = useState<any>(undefined);

    useEffect(() => {
        fetcher(key)
            .then((data: any) => {
                setData(data);
            })
            .catch((error) => {
                setError(error);
            });
    }, [key]);

    return {
        data,
        error,
    };
};



const useTest = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const { questions, isLoading, isError } = useQuestions();
    const [answers, setAnswers] = useState<{ [key: string]: string }>({});
    const { setResult } = useContext(ResultContext);
    useEffect(() => {
        if (questions) {
            const question = questions[currentQuestion];
            if (question) {
                setAnswers((prev) => ({ ...prev, [question.id]: '' }));
            }
        }
    }, [currentQuestion]);

    const handleOptionSelect = (questionId: string, option: string) => {
        setAnswers((prev) => ({ ...prev, [questionId]: option }));
    };

    const handleNext = () => {
        if (questions && currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            const request = {
                method: "POST",
                body: JSON.stringify(answers),
                headers: {
                    "Content-Type": "application/json",
                },
            };
            fetch("/api/result", request)
                .then((res) => res.json())
                .then((result) => {
                    setResult(result);
                    router.push("/result");
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return {
        currentQuestion: questions ? questions[currentQuestion] : null,
        handleNext,
        handleOptionSelect,
        questions,
        answers,
        isLoading,
        isError,
    };
};


export default useTest;