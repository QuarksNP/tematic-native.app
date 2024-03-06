import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, Text } from "react-native"

interface GradientContainerProps {
    title: string,
    subTitle?: string,
    colors: string[],
    locations?: number[]
    containerStyle?: any
}

export const GradientContainer = ({ title, subTitle, colors, locations, containerStyle }: GradientContainerProps) => {
    return (
        <LinearGradient {...{ colors, locations }} style={[styles.gradient, containerStyle]}
        >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradient: {
        width: '100%',
        height: 500,
        gap: 10,
        display: 'flex',
        justifyContent: 'flex-end',
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },

    subTitle: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 50,
        color: '#E50914'
    }
})