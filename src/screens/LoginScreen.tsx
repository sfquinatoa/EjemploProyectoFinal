import React, { useState } from 'react'
import {StatusBar, Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { styleGlobal } from '../theme/appTheme';
import { PRIMARY_COLOR } from '../commons/constants';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';

//Interface que define la estructura del objeto del formulario
interface FormLogin{
    email: string;
    password: string;
}

export const LoginScreen = () => {
    const [fromLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });
    //Funcion para capturar los valores de mi formulario
    const handleChangeValue= (name: string, value: string) =>{
        console.log(name, "", value);
        
    }
    return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <TitleComponent title="Iniciar Sesion"/>
        <BodyComponent>
            <Text style = {styleGlobal.titleWelcome}>Bienvenido </Text>
        
            <Text style = {styleGlobal.titleWelcome}>Realiza tus compras de manera rapida y segura</Text>
            <View style ={styleGlobal.containerInput}>
            <InputComponent placeholder='Email' keyboardType='email-address' 
            handleChangeValue={handleChangeValue}
            name= 'Email'/>
            <InputComponent placeholder='Contraseña'keyboardType='default'
            handleChangeValue={handleChangeValue}
            name= 'Email'/>
            </View>
        
        </BodyComponent>
    </View>
    )
}


