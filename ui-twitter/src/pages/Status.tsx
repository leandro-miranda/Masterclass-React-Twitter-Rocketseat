import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'

const answers = [
	'Concordo...',
	'Olha, faz sentindo!',
	'Parabéns pelo progresso.'
]
export function Status() {
	return (
		<main className='status'>
			<Header title='Tweet' />

			<Tweet content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia unde quisquam dolor, porro itaque illum expedita natus asperiores cumque ipsum modi quo quasi quod eius libero perspiciatis voluptatem. Pariatur, voluptate.' />

			<Separator />

			<form className='answer-tweet-form'>
				<label htmlFor="tweet">
					<img src="https://github.com/leandro-miranda.png" alt="Leandro Miranda" />
					<textarea id="tweet" placeholder="Tweet your answer" />
				</label>

				<button type='submit'>Answer</button>
			</form>

			{answers.map(answer => {
				return <Tweet key={answer} content={answer} />
			})}
		</main>
	)
}