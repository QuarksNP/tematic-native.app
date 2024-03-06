import { ITEM_WIDTH } from "@/constants/item-width"
import { Link } from "expo-router";
import { View, Image, Text, StyleSheet, type ImageSourcePropType, Pressable } from "react-native"


interface SceneProps {
    index: number,
    item: {
        id: string;
        title: string;
        imgUrl: string;
    }
}

export const Scene = ({ item, index }: SceneProps) => {
    return (
        <View style={styles.container} key={index}>
            <Image
                source={{ uri: item.imgUrl }}
                style={styles.image}
            />
            <View style={styles.container_details}>
                <Text style={styles.title}>{item.title}</Text>
                <Link asChild href={{ pathname: "/(tabs)/moments/[id]/", params: { id: item.id } }}>
                    <Pressable style={styles.button}>
                        <Text style={styles.text_details}>Details</Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#151515',
        borderRadius: 8,
        width: ITEM_WIDTH,
        paddingBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    container_details: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: '#151515',
        padding: 20
    },
    image: {
        width: ITEM_WIDTH,
        height: 300,
        objectFit: 'cover',
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: '#0071e3',
        padding: 10,
        borderRadius: 5,
    },
    body: {
        color: "#222",
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 20
    },

    text_details: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
    }
})