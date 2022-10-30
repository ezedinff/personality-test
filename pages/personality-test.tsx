import QuestionCard from "@/components/QuestionCard";
import useTest from "@/lib/hooks/useTest";

export default function Test() {
    const { currentQuestion, handleNext, handleOptionSelect, questions, answers, isLoading, isError } = useTest();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20">
                {isLoading && <div className="text-2xl"><svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg></div>}
                {isError && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"> Something went wrong. Please try again later.</div>}
                {currentQuestion && questions && (
                    <div className="flex flex-col items-center justify-center w-full flex-1 px-20">
                        <QuestionCard
                            question={currentQuestion}
                            totalQuestions={questions.length}
                            onSelect={handleOptionSelect}
                            onNext={handleNext}
                            selected={answers[currentQuestion.id]}
                        />
                    </div>
                )}
            </main>
        </div>
    );
}
