import { StyleSheet, View } from 'react-native';

import slide_1 from "@/assets/images/slide_1.webp";
import slide_2 from "@/assets/images/slide_2.jpg";
import slide_3 from "@/assets/images/slide_3.jpg";
import slide_4 from "@/assets/images/slide_4.jpg";

import { GradientContainer, AutoSlider } from '@/components';

export const IMAGES = [slide_1, slide_2, slide_3, slide_4]

export default function TabOneScreen() {

  return (
    <View style={styles.container}>
      <AutoSlider images={IMAGES} timer={3000} style={styles.cover} />
      <GradientContainer title="THE QUEEN'S GAMBIT" subTitle='A NETFLIX LIMITED SERIE' colors={['transparent', '#000']} containerStyle={styles.gradientStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
    backgroundColor: 'black'
  },

  cover: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
  },

  gradientStyle: {
    marginTop: 'auto'
  }
  
});
