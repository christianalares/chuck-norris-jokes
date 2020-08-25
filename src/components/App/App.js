import React from 'react'
import { useQuery } from 'react-query'
import { getRandomJoke } from '../../utils/api'
import Button from '../Button/Button'

import styles from './App.module.scss'

const App = () => {
  const { status, error, data, refetch } = useQuery('randomJoke', getRandomJoke, {
    refetchOnWindowFocus: false,
    retryDelay: 1000,
  })

  console.log(status)

  return (
    <main className={styles.main}>
      <h1>Random Chuck Norris Joke Generator</h1>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : status === 'error' ? (
        <p className={styles.error}>Error: {error.message}</p>
      ) : (
        <p className={styles.joke}>{status === 'loading' ? 'Loading...' : data.joke}</p>
      )}

      <Button disabled={status === 'loading'} onClick={refetch}>
        Another one!
      </Button>
    </main>
  )
}

export default App
