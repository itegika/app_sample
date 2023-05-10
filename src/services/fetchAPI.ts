const URL = 'https://sv443.net/jokeapi/v2/joke/Any';

export const fetchJoke = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    if (Object.keys(data).length !== 0 && data.constructor === Object) {
      const jokeObject = {
        id: data.id,
        joke: data.joke || `${data.setup}\n${data.delivery}`,
        liked: false,
      };
      return jokeObject;
    }
  } catch (e) {
    console.error('Error:', e);
    return null;
  }
};
