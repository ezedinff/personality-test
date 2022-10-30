// result /api/result api to calculate the result of the personality test and return the result

import { NextApiRequest, NextApiResponse } from 'next'
import { getQuestions } from '../../lib/db'
import { getResult } from '../../lib/db'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const questions = await getQuestions()
        const answers = req.body
        const result = await getResult(answers, questions)
        res.status(200).json(result)
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}