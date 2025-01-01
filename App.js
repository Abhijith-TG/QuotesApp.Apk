import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {


  const colors = [
    'red',
    'blue',
    'green',
    'cyan',
    'orange',
    'pink',
    'purple',
    'brown',
    'gray',
    'black'
  ]

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const [quotes, setQuotes] = useState([]);
  const [color, setColor] = useState(getRandomColor());


  

  return (
    <View style={styles.container}>

      <Text style={styles.head} >Motivational App</Text>
      <View style={styles.main}>
        <View style={styles.body}>
          <Text style={[styles.text,{color:color}]}>
            "Believe in yourself, for you are stronger than you believe in yourself."
          </Text>
          <Text style={styles.author}>- J.K. Rowling</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'start',
    justifyContent: 'start',

  },
  head: {
    fontSize: 25,
    marginLeft: 10,
    marginTop: 20,
    fontWeight: 'bold'
  },
  main: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 20,
    lineHeight: 25,
  },
  body: {
    backgroundColor: '#f2f2f2',
    padding: 40,
    borderRadius: 10,
    marginBottom: 20,
    marginTop:100
  }
});
