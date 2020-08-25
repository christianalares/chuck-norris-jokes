export const getRandomJoke = () => {
  return window
    .fetch('https://api.icndb.com/jokes/random?escape=javascript')
    .then((res) => res.json(res))
    .then((data) => data.value)
}
