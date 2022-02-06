import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
        color: "#E8EBF7"
      }}>Fintech app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1428',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// #F0A202 -> orange
// #E8EBF7 -> white
// #0E1428 -> dark blue
// #5A7D7C -> green gray
// #869D7A -> light green