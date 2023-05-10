import React, {ReactElement} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, StyleSheet, View} from 'react-native';
import colors from 'constants/colors';

const ScreenContainer = ({children}: {children: ReactElement}) => {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        {children}
      </View>
    </SafeAreaView>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({
  outerContainer: {flex: 1},
  innerContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopColor: colors.lightGray,
    borderTopWidth: 1,
  },
});
