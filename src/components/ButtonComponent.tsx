import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styleGlobal } from '../theme/appTheme'

interface Props{
    buttonText: string;

}
export const ButtonComponent = ({buttonText}: Props) => {
    return (
    <TouchableOpacity style= {styleGlobal.button}>
    <Text style= {styleGlobal.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
    )
}


