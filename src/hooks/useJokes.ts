import {useState, useEffect} from 'react';
import {getData, storeData} from 'helpers/asyncStorage';
import {JokeObject} from 'types/types';
import {fetchJoke} from 'services/fetchAPI';

const useJokes = () => {
  const [jokes, setJokes] = useState<JokeObject[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  const fetchAndStoreJoke = async () => {
    try {
      const joke = await fetchJoke();
      if (joke) {
        setJokes([joke, ...jokes]);
        await storeData('jokes', JSON.stringify([joke, ...jokes]));
        await storeData('lastFetch', new Date().toISOString());
        setLoading(false);
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(`Error: ${e.message}`);
      }
      setLoading(false);
    }
  };

  const toggleLike = async (id: number) => {
    try {
      const updatedJokes = jokes.map((joke) => {
        if (joke.id === id) {
          joke.liked = !joke.liked;
        }
        return joke;
      });
      setJokes(updatedJokes);
      await storeData('jokes', JSON.stringify(updatedJokes));
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(`Error: ${e.message}`);
      }
    }
  };

  useEffect(() => {
    const checkLastFetch = async () => {
      try {
        const lastFetch = await getData('lastFetch');
        if (lastFetch !== null) {
          const lastFetchDate = new Date(lastFetch);
          const currentDate = new Date();
          if (
            lastFetchDate.getDate() === currentDate.getDate() &&
            lastFetchDate.getMonth() === currentDate.getMonth() &&
            lastFetchDate.getFullYear() === currentDate.getFullYear()
          ) {
            const savedJokes = await getData('jokes');
            if (savedJokes !== null) {
              const parsedJokes = JSON.parse(savedJokes);
              if (
                Array.isArray(parsedJokes) &&
                parsedJokes.every(
                  (joke) => joke.id && joke.joke && joke.liked !== undefined
                )
              ) {
                setJokes(parsedJokes);
              } else {
                throw new Error('Invalid joke array.');
              }
            }
          } else {
            await fetchAndStoreJoke();
          }
        } else {
          await fetchAndStoreJoke();
        }
        setLoading(false);
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.error(`Error: ${e.message}`);
        }
      }
    };
    checkLastFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {isLoading, jokes, toggleLike};
};

export default useJokes;
