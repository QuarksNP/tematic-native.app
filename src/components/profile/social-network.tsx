import { Feather } from '@expo/vector-icons'
import * as Linking from 'expo-linking';
import { View, Text, Pressable } from "react-native"

interface SocialNetworProps {
    title: string,
    href?: string,
    icon: any
}

export const SocialNetwork = ({ title, icon, href }: SocialNetworProps) => {
    return (
        <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
            {icon}

            <Pressable onPress={() => Linking.openURL(href ?? "https://www.google.com/")}>
                <Text style={{ color: "white", alignSelf: "center" }}>{title}</Text>
            </Pressable>

            <Feather size={10} name='external-link' color="#FFF" />
        </View>
    )
}