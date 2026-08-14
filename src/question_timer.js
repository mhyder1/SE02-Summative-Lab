import chalk from "chalk"

export function handleExpiredQuestion(gameState, currentQuestion) {
    console.log(chalk.red.bold("\nTimer expired!"))
    console.log(chalk.yellow(`The correct answer was: ${currentQuestion.correctAnswer}`))
    gameState.stats.incorrectAnswers++
    gameState.currentQuestionIndex++
}
