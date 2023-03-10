import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'

export function Status() {
	const [newAnswer, setNewAnswer] = useState('');
	const [answers, setAnswers] = useState([
		'Concordo...',
		'Olha, faz sentindo!',
		'Parabéns pelo progresso.'
	])

	function createNewAnswer(event: FormEvent) {
		event.preventDefault();

		setAnswers([newAnswer, ...answers])
		setNewAnswer('')
	}
	return (
		<main className='status'>
			<Header title='Tweet' />

			<Tweet content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia unde quisquam dolor, porro itaque illum expedita natus asperiores cumque ipsum modi quo quasi quod eius libero perspiciatis voluptatem. Pariatur, voluptate.' />

			<Separator />

			<form onSubmit={createNewAnswer} className='answer-tweet-form'>
				<label htmlFor="tweet">
					<img src="https://github.com/leandro-miranda.png" alt="Leandro Miranda" />
					<textarea
						id="tweet"
						placeholder="Tweet your answer"
						value={newAnswer}
						onChange={(event) => {
							setNewAnswer(event.target.value)
						}}
					/>
				</label>

				<button type='submit'>Answer</button>
			</form>

			{answers.map(answer => {
				return <Tweet key={answer} content={answer} />
			})}
		</main>
	)
}