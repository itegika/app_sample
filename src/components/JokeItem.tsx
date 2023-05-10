import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {JokeItemProps} from 'types/types';
import colors from 'constants/colors';
import LikeButton from './LikeButton';

const JokeItem = (props: JokeItemProps) => {
  const {joke, isLiked, toggleLike, listItem = false} = props;
  const styles = listItem ? listItemStyles : defaultStyles;
  return (
    <View style={styles.container}>
      <Text style={styles.jokeText}>{joke.joke}</Text>
      <LikeButton
        isLiked={isLiked}
        toggleLike={toggleLike}
        styles={styles.likeButton}
      />
    </View>
  );
};

const listItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  jokeText: {
    maxWidth: '80%',
    width: '100%',
    fontFamily: 'Inter Regular',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
    color: colors.black,
    marginRight: 20,
  },
  likeButton: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
  },
});

const defaultStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 24,
  },
  jokeText: {
    fontFamily: 'Inter SemiBold ',
    fontSize: 24,
    lineHeight: 38,
    textAlign: 'left',
    marginBottom: 16,
    color: colors.black,
  },
  likeButton: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
  },
});

export default JokeItem;
