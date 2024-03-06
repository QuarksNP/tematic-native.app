import { Link, LinkProps } from "expo-router";
import { View, Image, Text, type ImageSourcePropType, FlatList, SafeAreaView, StyleSheet, Pressable } from "react-native";

type Character = {
    id: string;
    name: string;
    image: ImageSourcePropType;
}

interface ListOfCharactersProps {
    characters: Character[],
    route: any;
}

export const ListOfCharacters = ({ characters, route }: ListOfCharactersProps) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Characters
            </Text>
            <FlatList
                data={characters}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.container_characters}>
                        <Image source={item.image} style={styles.image} borderTopLeftRadius={10} borderTopRightRadius={10} />
                        <View style={styles.container_details}>
                            <Text style={styles.name}>{item.name}</Text>

                            <Link asChild href={{ pathname: route, params: { id: item.id } }}>
                                <Pressable style={styles.button}>
                                    <Text style={styles.text_details}>Details</Text>
                                </Pressable>
                            </Link>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },

    container_characters: {
        width: 300,
        height: 400,
    },

    container_details: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#151515',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        padding: 15
    },


    title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'white'
    },

    name: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
    },

    button: {
        backgroundColor: '#0071e3',
        padding: 10,
        borderRadius: 5,
    },

    image: {
        width: '100%',
        height: 300,
        objectFit: 'cover',
    },

    text_details: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
    }
})