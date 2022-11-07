import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MoviesList from './components/CompanyList';


let items = [
  {
    name: 'Sony',
    contry: 'Japana'
  },
  {
    name: 'Samsung',
    contry: 'South Korea'
  }
]




export default function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [isListVisible, setisListVisible] = useState(false)

  const getMovies = async () => {
    try {
     const response = await fetch('https://reactnative.dev/movies.json');
     const json = await response.json();
     setData(json.movies);
     setisListVisible( isListVisible  == true ? false : true)
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
  }

  return (
    <View style={styles.container}>
      {isListVisible && <MoviesList items={data} />}
      <Button 
      title="Load images" 
      onPress={getMovies}>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
