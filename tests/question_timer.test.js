import test from 'node:test'
import assert from 'node:assert/strict'

import { handleExpiredQuestion } from '../src/question_timer.js'

test('handleExpiredQuestion increments the incorrect counter and advances the question index', () => {
  const gameState = {
    stats: {
      correctAnswers: 0,
      incorrectAnswers: 2,
    },
    currentQuestionIndex: 3,
  }

  const currentQuestion = {
    correctAnswer: 'Paris',
  }

  const previousLogs = []
  const originalLog = console.log
  console.log = (...args) => previousLogs.push(args.join(' '))

  try {
    handleExpiredQuestion(gameState, currentQuestion)
  } finally {
    console.log = originalLog
  }

  assert.equal(gameState.stats.incorrectAnswers, 3)
  assert.equal(gameState.currentQuestionIndex, 4)
  assert.match(previousLogs.join('\n'), /Timer expired!/)
  assert.match(previousLogs.join('\n'), /Paris/)
})
