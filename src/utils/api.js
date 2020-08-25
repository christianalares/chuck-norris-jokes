export const getRandomJoke = () => {
  return window
    .fetch('http://api.icndb.com/jokes/random')
    .then((res) => res.json(res))
    .then((data) => data.value)
}
