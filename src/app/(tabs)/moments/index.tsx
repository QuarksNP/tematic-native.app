import { useRef } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel"

import { Scene } from "@/components";
import { ITEM_WIDTH } from "@/constants/item-width";
import { DATA } from "@/constants/scenes_info";
import { SLIDER_WIDTH } from "@/constants/slider_width";

export default function MomentsPage() {
    const isCarousel = useRef(null)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favoites Scene</Text>

            <Carousel
                slideStyle={styles.slide}
                ref={isCarousel}
                layout="default"
                data={DATA}
                renderItem={Scene}  
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={0}
                useScrollView
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 20,
    },

    title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'white',
    },

    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})