import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameOver from './screens/GameOver';
import GameScreen from './screens/GameScreen';
import StartScreen from './screens/StartScreen';

export default function App() {

  const [number, setnumber] = useState(0);
  const [screen, setscreen] = useState(1)

  let content
  switch (screen) {
    case 1:
      content = <StartScreen beallit={setnumber} kepernyo={setscreen} />
      break;
    case 2:
      content = <GameScreen szam={number} kepernyo={setscreen} />
      break;
    case 3:
      content = <GameOver szam={number} kepernyo={setscreen} />
      break;

    default:
      break;
  }

  return (
    <View>
      <Header title="Szamkitalalo" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({

});
