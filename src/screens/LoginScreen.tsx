import React, { useState } from 'react'
import {Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { styleGlobal } from '../theme/appTheme';
import { PRIMARY_COLOR } from '../commons/constants';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import Icon from '@expo/vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from './StackNavigator';

//Interface que define la estructura del objeto del formulario
interface FormLogin{
    email: string;
    password: string;
}

//Interface define las propiedades del componente
interface Props{
    users: User[]; //Arreglo de usuario desde StackNavigator
}

export const LoginScreen = ({users}: Props) => {
    
    //Hook useState: permite gestionar el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });

    //Hook useState: permite gestionar el estado de la contraseña
    const [HiddenPassword, setHiddenPassword] = useState<boolean>(true);

    //Hook useNavigation: permite navegar de una pantalla a otra
    const navigation = useNavigation();

    //Funcion para capturar los valores de mi formulario
    const handleChangeValue= (name: string, value: string) =>{
        //console.log(name, "", value);
        //Funcion para cambiar el estado del formulario
        setFormLogin({...formLogin, [name]:value});
    }
        //Funcion para verificar que existe el usuario
        const verifyUser =()=>{
            const existUser = users.filter(user=>user.email ==formLogin.email && user.password == formLogin.password)[0];
            return existUser;
        }
    
    //Funcion para iniciar sesion
    const handleSingIn=():void =>{
        
        //Verificar que todos los campos esten llenos
        if(formLogin.email == '' || formLogin.password == ''){
            console.log(formLogin);

            //Mensaje de alerta
            Alert.alert('Error', 'Porfavor, complete todos los campos');
            return;
        }
        //Verficiar si existe el usuario
        if(!verifyUser()){
            Alert.alert('Error', 'usuario y/o contraseña incorrectos');
            return;
        }
        //console.log(formLogin);
        //Si todo sale bien, se carga los productos
        navigation.dispatch(CommonActions.navigate({name:'Home' }));

    }
    return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <TitleComponent title="Iniciar Sesion"/>
        <BodyComponent>
            <Text style = {styleGlobal.titleWelcome}>Bienvenido! </Text>
            <Text style = {styleGlobal.titleWelcome}>Realiza tus compras de manera rapida y segura</Text>
            <View style ={styleGlobal.containerInput}>
            <InputComponent placeholder='Email'
            keyboardType='email-address' 
            handleChangeValue={handleChangeValue}
            name= 'email'/>
            <InputComponent placeholder='Contraseña'
            keyboardType='default'
            handleChangeValue={handleChangeValue}
            name= 'password'
            isPassword={HiddenPassword}/>
            <Icon name ={HiddenPassword ?'visibility' : 'visibility-off'}
            color={PRIMARY_COLOR}
            size={20}
            style ={styleGlobal.iconPassword}
            onePress={() => setHiddenPassword(!HiddenPassword)}/>
            </View>
            <ButtonComponent buttonText = 'Iniciar' onPress={handleSingIn}/>
            <TouchableOpacity
                onPress={() =>navigation.dispatch(CommonActions.navigate({name:'Register'}))}>
                <Text style ={styleGlobal.textRedirect}>
                    No tienes una cuenta? Registrate ahora</Text>
            </TouchableOpacity>
        </BodyComponent>
    </View>
    )
}


