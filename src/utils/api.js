export const getRandomJoke = () => {
  return window
    .fetch('http://api.icndb.com/jokes/random?escape=javascript')
    .then((res) => res.json(res))
    .then((data) => data.value)
}
