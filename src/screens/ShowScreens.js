import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreens = ({ navigation, route }) => {
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Edit', { id: route.params.id })}
        >
          <EvilIcons name="pencil" size={35} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, state]);
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

export default ShowScreens;

const styles = StyleSheet.create({});
