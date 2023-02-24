import { StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';
import { useNavigation } from '@react-navigation/native';

const EditScreens = ({ route }) => {
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
  const navigation = useNavigation();
  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(blogPost.id, title, content, () => {
          navigation.pop();
        });
      }}
    />
  );
};

export default EditScreens;

const styles = StyleSheet.create({});
