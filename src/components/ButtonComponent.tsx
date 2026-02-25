import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styleGlobal } from '../theme/appTheme'

interface Props{
    buttonText: string;
    onPress:()=> void; //Funcion como propiedad
}
export const ButtonComponent = ({buttonText, onPress}: Props) => {
    return (
    <TouchableOpacity style= {styleGlobal.button}
    onPress={onPress}>
    <Text style= {styleGlobal.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
    )
}


