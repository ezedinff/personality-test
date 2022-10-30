import { useRef } from "react";
import { QuestionCardProps, QuestionOptionProps } from "../../lib/types";

const QuestionOption = ({ questionId, option, onSelect, selected }: QuestionOptionProps) => {
    const radioButtonRef = useRef<HTMLInputElement>(null);
    return (
      <li key={option.value} className={"block p-2 border border-gray-300 rounded-md cursor-pointer my-2 " + (selected === option.value ? 'border-purple-500' : '')}>
        <label className="px-2 py-1 mr-2 cursor-pointer min-w-full w-full flex items-center" htmlFor={option.value} onClick={() => radioButtonRef.current?.click()}>
          <input ref={radioButtonRef} type="radio" name="select" className='hidden' value={option.value} checked={selected === option.value} onChange={(e: any) => {
            onSelect(questionId, e.target.value);
          }} />
          <span className={'inline-block w-6 h-6 text-center rounded-md ' + (selected === option.value ? 'bg-purple-500 text-white' : '')}>{option.value}</span>
          <span className="ml-2">{option.label}</span>
        </label>
      </li>
    );
}

const QuestionCardHeader = ({ question, totalQuestions }: { question: QuestionCardProps['question'], totalQuestions: QuestionCardProps['totalQuestions'] }) => {
    return (
        <div className="my-2 py-5 sm:px-6 border-b border-gray-200">
            <h4 className="text-md leading-6 font-medium text-gray-700">
                Question {question.id} of {totalQuestions}
            </h4>
            <h2 className="mt-1 max-w-2xl text-2xl leading-7 font-semibold text-gray-900">
                {question.question}
            </h2>
        </div>
    );
}

const QuestionCardFooter = ({ isLastQuestion, required, onNext, selected }: {isLastQuestion: boolean; required: boolean;  onNext: QuestionCardProps['onNext'], selected: QuestionCardProps['selected'] }) => {
    return (
        <div className="my-4 flex justify-end">
        <button className={"bg-purple-500 text-white px-6 py-2 rounded-md " + (required && !selected ? 'opacity-50 cursor-not-allowed' : '')}
          disabled={required && !selected}
          onClick={() => {
            onNext();
          }}>
          {isLastQuestion ? 'Finish' : 'Next'}
        </button>
      </div>
    );
}

const QuestionCard = ({ question, onSelect, selected, onNext, totalQuestions }: QuestionCardProps) => {
    return (
        <div className="overflow-hidden w-full max-w-2xl">
            <QuestionCardHeader question={question} totalQuestions={totalQuestions} />
            <ul className="list-none">
                {
                    question.options.map((option) => (
                        <QuestionOption
                            key={option.value}
                            option={option}
                            onSelect={onSelect}
                            selected={selected}
                            questionId={question.id.toString()}
                        />
                    ))
                }
            </ul>
            <QuestionCardFooter
                isLastQuestion={question.id === totalQuestions}
                required={question.required}
                onNext={onNext} selected={selected}
            />
        </div>
    );
};

export default QuestionCard;