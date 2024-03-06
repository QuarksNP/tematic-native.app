import { ListOfCharacters } from "@/components";
import { StyleSheet, Text, View } from "react-native";

import { CHARACTERS_INFO } from "@/constants/characters_info";

export default function IndexPage() {
    return (
        <View style={styles.container}>
            <ListOfCharacters characters={CHARACTERS_INFO} route="../characters/[id]"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'black'
    }
})