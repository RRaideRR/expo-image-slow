import { Button, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {navigation.navigate('LotsOfImagesExpo')}}>
        <Text style={{backgroundColor: 'yellow', margin: 20}}>expo-image</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'green', margin: 20}}onPress={() => {navigation.navigate('LotsOfImagesRN')}}>
        <Text>Image from react-native</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
