import React, {useContext} from 'react';
import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import JokeItem from 'components/JokeItem';
import {JokeObject} from 'types/types';
import {AppContext} from 'context/appContext';
import ScreenContainer from 'components/ScreenContainer';
import colors from 'constants/colors';

const HistoryScreen = () => {
  const {isLoading, jokes, toggleLike} = useContext(AppContext);

  const renderJoke = ({item}: {item: JokeObject}) => (
    <JokeItem
      joke={item}
      isLiked={item.liked}
      toggleLike={() => toggleLike(item.id)}
      listItem
    />
  );

  return (
    <ScreenContainer>
      {jokes.length > 0 && !isLoading ? (
        <FlatList
          data={jokes}
          renderItem={renderJoke}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <View style={styles.wrapper}>
          {isLoading ? (
            <ActivityIndicator size="large" color={colors.activeViolet} />
          ) : (
            <Text style={styles.noDataText}>Nothing found</Text>
          )}
        </View>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  noDataText: {
    fontFamily: 'Inter SemiBold',
    fontSize: 20,
    color: colors.black,
    textAlign: 'center',
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HistoryScreen;
