import React from 'react';
import { View, Image, Text } from 'react-native';

import { FeedPropsTypes } from './types';
import styles from './styles';

const Feed = ({ posts }: FeedPropsTypes) => (
  <View style={styles.container}>
    {posts.map((post) => (
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <Image style={styles.userImage} source={post.user.icon} />
          <Text style={styles.userName}>{post.user.name}</Text>
        </View>
        <Image source={post.image} />
        <View style={styles.reacts}>
          <View style={styles.smallArea}>
            <Image source={require('../../assets/images/ic_heart.png')} style={styles.icon} />
            <Image source={require('../../assets/images/ic_comment.png')} style={styles.icon} />
            <Image source={require('../../assets/images/ic_send.png')} style={styles.icon} />
          </View>
          <View style={styles.bigArea}>
            <Image source={require('../../assets/images/ic_save.png')} style={styles.icon} />
          </View>
        </View>
        <Text style={styles.likes}>
          {`Curtido por ${post.likes.map((userName) => userName).join(', ')}`}
        </Text>
      </View>
    ))}
  </View>
);

export default Feed;
