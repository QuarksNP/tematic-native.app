import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

import { CHARACTERS_INFO } from "@/constants/characters_info";

export default function Page() {
    const { id } = useLocalSearchParams()

    const filteredCharacters = CHARACTERS_INFO.filter((chactarer) => chactarer.id === id)

    const character = { ...filteredCharacters[0] }

    return (
        <View style={styles.container}>
            <Image source={character.image} style={styles.cover} />

            <View style={styles.container_details}>
                <Text style={styles.name}>{character.name}</Text>
                <Text style={styles.description}>{character.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container_details: {
        padding: 20,
        display: 'flex',
        gap: 10,
        backgroundColor: 'black',
        opacity: .8
    },

    cover: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },

    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#E50914'
    },

    description: {
        color: 'white',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '400',
        textAlign: 'center',
    }
})