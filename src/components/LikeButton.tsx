import React from 'react';
import {TouchableOpacity} from 'react-native';
import Fav from 'assets/icons/Fav.svg';
import FavFilled from 'assets/icons/Fav-Filled.svg';
import colors from 'constants/colors';
import {LikeButtonProps} from 'types/types';

const LikeButton = ({isLiked = false, toggleLike, styles}: LikeButtonProps) => (
  <TouchableOpacity
    onPress={toggleLike}
    style={{
      backgroundColor: isLiked ? colors.activeViolet : colors.palViolet,
      ...styles,
    }}
  >
    {isLiked ? <FavFilled /> : <Fav />}
  </TouchableOpacity>
);

export default LikeButton;
