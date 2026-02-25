import React from 'react';
import { Text, useWindowDimensions } from 'react-native';
import { styleGlobal } from '../theme/appTheme';

//Interface definir los props de los componentes
interface Props{
    title: string;

}
    export const TitleComponent = ({title}:Props) => {
        const {height}= useWindowDimensions();
    return (

    <Text style ={{
                ...styleGlobal.title,
                height: height* 0.15}}>{title}
                </Text>
    )
}


