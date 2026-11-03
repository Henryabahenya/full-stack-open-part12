import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import Todo from './Todo'

test('renders todo content correctly when not done', () => {
  const todo = {
    text: 'Learn containerization and testing',
    done: false
  }

  render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={() => {}} />)

  const element = screen.getByText('Learn containerization and testing')
  expect(element).toBeDefined()

  const notDoneInfo = screen.getByText('This todo is not done')
  expect(notDoneInfo).toBeDefined()
})
