import { StyleSheet, View } from 'react-native';
import { useCallback } from 'react';
import { Image } from 'expo-image';


export default function LotsOfImagesExpoScreen() {
  const renderGif = useCallback((gif) => {
    return (
      <Image
        source={
          gif
        }
        style={[
          {
            height: 138,
            width: 103,
            margin: 10
          },
        ]}
        contentFit="cover"
        placeholder="yoE3-jRkoyfkbHj[ofb~WCj[a#a}aza}tTj]ayf7j@fPWCoHj]f6axjsayafR5fPj?ayayj@oJacWBf7j[azfQazoeayj[bHj[aza#"
      />
    )
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {renderGif(require('../assets/gif1.gif'))}
        {renderGif(require('../assets/gif2.gif'))}
        {renderGif(require('../assets/gif3.gif'))}
      </View>
      <View style={styles.row}>
        {renderGif(require('../assets/gif4.gif'))}
        {renderGif(require('../assets/gif5.gif'))}
        {renderGif(require('../assets/gif6.gif'))}
      </View>
      <View style={styles.row}>
        {renderGif(require('../assets/gif7.gif'))}
        {renderGif(require('../assets/gif8.gif'))}
        {renderGif(require('../assets/gif9.gif'))}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  }
});
