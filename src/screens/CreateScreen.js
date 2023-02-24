import { StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm'
import { useNavigation } from '@react-navigation/native';

const CreateScreen = () => {
  const { addBlogPost } = useContext(Context);
  const navigation = useNavigation();

  return <BlogPostForm onSubmit={(title, content) => {
    addBlogPost(title, content, () => {
      navigation.navigate('Index');
    });
  }}/>
};

export default CreateScreen;

const styles = StyleSheet.create({});
