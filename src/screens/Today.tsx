import React, {useContext} from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import {AppContext} from 'context/appContext';
import JokeItem from 'components/JokeItem';
import ScreenContainer from 'components/ScreenContainer';
import colors from 'constants/colors';

const TodayScreen = () => {
  const {isLoading, jokes, toggleLike} = useContext(AppContext);

  return (
    <ScreenContainer>
      <View style={styles.content}>
        {isLoading ? (
          <ActivityIndicator size="large" color={colors.activeViolet} />
        ) : jokes.length > 0 ? (
          <JokeItem
            joke={jokes[0]}
            isLiked={jokes?.[0].liked}
            toggleLike={() => toggleLike(jokes?.[0].id)}
          />
        ) : (
          <Text style={styles.noDataText}>Nothing found</Text>
        )}
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataText: {
    fontFamily: 'Inter SemiBold',
    fontSize: 20,
    color: colors.black,
    textAlign: 'center',
  },
});

export default TodayScreen;
