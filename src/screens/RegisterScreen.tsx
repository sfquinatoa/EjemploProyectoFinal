import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { TitleComponent } from "../components/TitleComponent";
import { BodyComponent } from "../components/BodyComponent";
import { styleGlobal } from "../theme/appTheme";
import { InputComponent } from "../components/InputComponent";
import { ButtonComponent } from "../components/ButtonComponent";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { User } from "./StackNavigator";

interface FormRegister {
    name: string;
    email: string;
    password: string;
}

//Interface que define ñas propiedades del componente
interface Props{
    listUsers: User[]; //arreglo 
    handleAddUser: (user: User) => void; //Actualizar el arreglo
}


export const RegisterScreen = ({listUsers, handleAddUser}: Props) => {
    const [formRegister, setFormRegister] = useState<FormRegister>({
    name: "",
    email: "",
    password: "",
    });

    const navigation = useNavigation();

    //Funcion para capturar los valores de mi formulario
    const handleChangeValue = (name: string, value: string) => {
    setFormRegister({ ...formRegister, [name]: value });
    }
    
    //Funcion para verificar si existe el usuario
    const verifyUser =() =>{
        const existUser = listUsers.filter(user => user.email == formRegister.email)[0];
        return existUser;
    }
    //Funcion para generar los ids de los nuevos usuarios
    const getIdUser =(): number =>{
        const getId= listUsers.length +1;
        return getId;
    }

    //Funcion para registrarse
    const handleRegister =() =>{
        //Validar que los campos esten llenos
        if(formRegister.name == '' || formRegister.email == '' || formRegister.password == ''){
            Alert.alert("Error", "Porfavor complete todos los campos")
            return;
        }
        //Validad campos de iniciar sesion
        if(verifyUser()){
            Alert.alert("Error", "El usuario ya se encuenra registrado");
            return;
        }

        //Registrar usuarios
        //Crear objeto user
        const newUser: User ={
            id: getIdUser(),
            name: formRegister.name,
            email: formRegister.email,
            password: formRegister.password
        }
        //Agregar objeto al arreglo
        handleAddUser(newUser);
        Alert.alert("Registro", "Usuario registro con exito");
        //Redireccionar al login
        navigation.goBack();


        console.log(formRegister);
    }

    return (
    <View>
    <TitleComponent title="Registrate" />
    <BodyComponent>
        <Text style={styleGlobal.titleWelcome}>Bienvenido! </Text>
        <Text style={styleGlobal.titleWelcome}>
        Realiza tus compras de manera rapida y segura
        </Text>
        <View style={styleGlobal.containerInput}>
        <InputComponent
            placeholder="nombre"
            keyboardType="default"
            handleChangeValue={handleChangeValue}
            name="name"
        />
        <InputComponent
            placeholder="email"
            keyboardType="email-address"
            handleChangeValue={handleChangeValue}
            name="email"
        />
        <InputComponent
            placeholder="contraseña"
            keyboardType="default"
            handleChangeValue={handleChangeValue}
            name="password"/>
        </View>
        <ButtonComponent buttonText = 'Registrar' onPress={handleRegister}/>
            <TouchableOpacity
                onPress={() =>navigation.dispatch(CommonActions.navigate({name:'Register'}))}>
                <Text style ={styleGlobal.textRedirect}>
                    Ya tienes una cuenta? Iniciar sesion ahora </Text>
            </TouchableOpacity>
    </BodyComponent>
    </View>
    );
};
