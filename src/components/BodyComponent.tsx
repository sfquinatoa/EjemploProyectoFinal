import React, { ReactNode } from 'react'
import { useWindowDimensions, View } from 'react-native'
import { styleGlobal } from '../theme/appTheme'

interface Props{
    chiñdren: ReactNode;
}
export const BodyComponent = (props: any) => {
    const {height} = useWindowDimensions();
    return (
        <View style ={{
            ...styleGlobal.containerBody,
            height: height* 0.88 
            }}>
            {props.children}
        </View>
    )
}

