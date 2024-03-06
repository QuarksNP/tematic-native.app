import { View, Text, Image, StyleSheet } from "react-native";

import cover from '@/assets/images/The_Queens_Gambit_(miniseries).png'

export default function Info() {
    return (
        <View style={styles.container}>
            <Image source={cover} style={styles.image} />
            <Text style={styles.title}>1 season</Text>
            <Text style={styles.description}>The Queen's Gambit is a 2020 American coming-of-age period drama streaming
                  television miniseries based on the 1983 novel of the same name by Walter Tevis.
                  The title refers to the "Queen's Gambit", a chess opening. The series was written
                  and directed by Scott Frank, who created it with Allan Scott, who owns the rights
                  to the book. Beginning in the mid-1950s and proceeding into the 1960s, the story
                  follows the life of Beth Harmon (Anya Taylor-Joy), a fictional American chess prodigy
                  on her rise to the top of the chess world while struggling with drug and alcohol dependency.
            </Text>
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
        gap: 20,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 20,
        
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    description: {
        fontSize: 14,
        color: 'white',
        lineHeight: 20
    },
})