import React, {createContext} from 'react';
import {AppContextType} from 'types/types';
import useJokes from 'hooks/useJokes';

const AppContext = createContext<AppContextType>({
  isLoading: true,
  jokes: [],
  toggleLike: () => [],
});

const AppContextProvider = ({
  children,
}: {
  children?: React.ReactNode,
}): React.ReactElement => {
  const {isLoading, jokes, toggleLike} = useJokes();
  return (
    <AppContext.Provider value={{isLoading, jokes, toggleLike}}>
      {children}
    </AppContext.Provider>
  );
};

export {AppContext, AppContextProvider};
