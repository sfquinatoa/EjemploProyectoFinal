import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { stylesGlobal } from '../themes/appThemes';
import { ButtonComponent } from '../components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';



export const BienvenidoScreen = () => {
    const navigation = useNavigation<any>();
    return (
        <View >
            <View>
                <Image source={require('../image/4341087.png')}
                    style={stylesGlobal.logo}
                    resizeMode="contain" />
            </View>

            <StatusBar />
            <TitleComponent title='Bienvenidos' />
            <BodyComponent>
                <Text style={stylesGlobal.titleWelcome} >Bienvenido a la App de Jose Luis!</Text>
                <Text>Realiza tu diviciones en esta tu App</Text>
                <ButtonComponent buttonText='Acceder'
                    onPress={() => navigation.navigate('Formulario')}
                />
            </BodyComponent>
        </View>
    )
}
