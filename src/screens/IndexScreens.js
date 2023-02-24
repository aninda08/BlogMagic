import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const IndexScreens = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogpost) => blogpost.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Show', { id: item.id });
                }}
              >
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather name="trash" style={styles.icon} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

// IndexScreens.screenOptions  = ({ navigation }) => {
//   return {
//     headerRight: () => (
//       <TouchableOpacity onPress={() => navigation.navigate('Create')}>
//         <Feather name="plus" size={30} />
//       </TouchableOpacity>
//     ),
//   };
// };

export default IndexScreens;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});
