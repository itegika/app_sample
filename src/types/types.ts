import {ParamListBase, RouteProp} from '@react-navigation/native';

export interface JokeObject {
  id: number;
  joke: string;
  liked: boolean;
}

export type JokeItemProps = {
  joke: JokeObject,
  isLiked: boolean,
  toggleLike: () => void,
  listItem?: boolean,
};

export type LikeButtonProps = {
  isLiked?: boolean,
  toggleLike: () => void,
  styles: object,
};

export type AppContextType = {
  isLoading: boolean,
  jokes: JokeObject[],
  toggleLike: (id: number) => void,
};

export type NavigationOptionsProps = {
  route: RouteProp<ParamListBase>,
  focused: boolean,
};
