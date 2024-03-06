import { type ImageSourcePropType, Animated, type ImageProps } from "react-native"

import { useAutoSlide } from "@/hooks/useAutoSlide";

interface AutoSliderProps extends ImageProps {
    images: ImageSourcePropType[];
    timer: number;
}

export default function AutoSlider({ images, timer, ...props }: AutoSliderProps){

   const { current, fadeAnim } = useAutoSlide(timer)

   
    return (
        <Animated.Image {...props} source={images[current]} style={{...props.style, opacity: fadeAnim }}/>
    )
}