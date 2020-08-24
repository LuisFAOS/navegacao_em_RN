import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { AppLoading } from 'expo';

import MealsNavigator from './navigation/MealsNavigator';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  return (
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
    />
  );

  return <MealsNavigator />;
}
