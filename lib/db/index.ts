const fs = require('fs');
const path = require('path');
export const getQuestions = async () => {
    const questions = await fs.readFileSync(path.join(process.cwd(), 'lib/db/questions.json'), 'utf-8');
    return JSON.parse(questions);
}

export const getResultDescription = async (key: string) => {
    const results = await fs.readFileSync(path.join(process.cwd(), 'lib/db/results.json'), 'utf-8');
    return JSON.parse(results)[key];
}

export const getResult = (answers: any, questions: any) => {
    const score = questions.reduce((acc: any, question: any) => {
        const answer = answers[question.id];
        const option = question.options.find((option: any) => option.value === answer);
        return acc + option.score;
    }, 0);
    if (score < 0) {
        return getResultDescription('introvert');
    }
    if (score > 0) {
        return getResultDescription('extrovert');
    }
    return getResultDescription('ambivert');
}