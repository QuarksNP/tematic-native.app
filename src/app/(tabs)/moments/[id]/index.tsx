import { useLocalSearchParams } from "expo-router"
import { StyleSheet, Text, View } from "react-native"
import YoutubeIframe from "react-native-youtube-iframe";

import { DATA } from "@/constants/scenes_info"


export default function Page() {
    const { id } = useLocalSearchParams()

    const filteredScenes = DATA.filter(scene => scene.id === id)

    const scene = {...filteredScenes[0] }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{scene.title}</Text>
           <YoutubeIframe 
            videoId={scene.videoId}
            height={200}
            width="100%"
           />

            <Text style={styles.description}>{scene.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        gap: 20
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white'
    },

    description: {
        fontSize: 20,
        color: 'white',
    }
})