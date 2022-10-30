import { NextApiRequest, NextApiResponse } from 'next'
import { getQuestions } from '../../lib/db'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const questions = await getQuestions();
    const questionsWithoutScore = questions.map((question: any) => {
        return {
            ...question,
            options: question.options.map((option: any) => {
                return {
                    value: option.value,
                    label: option.label,
                }
            })
        }
    })
    res.status(200).json(questionsWithoutScore)
}