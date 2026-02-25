import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './LoginScreen';
import { PRIMARY_COLOR,} from '../commons/constants';
import { RegisterScreen } from './RegisterScreen';
import { HomeScreen } from './HomeScreen/HomeScreen';

export interface User{
    id:number;
    name: string;
    email: string;
    password: string;
}

const Stack = createStackNavigator ();
export const StackNavigator =() =>{
  //datos de prueba
      const user: User[]=[
      {id:1, name: 'Fernando Quinatoa', email: 'fernandoquinatoa@999', password: '12345'},
      {id:2, name: 'Juan Perez', email: 'juanperez@777', password: '12345'}]

      //Hook useState: permite gestionar la lista de usuarios
      const[listUsers, setListUsers]= useState<User[]>(user);

      //Funcion para agregar el usuario al arreglo listUsers
      const handleAddUser =(user: User): void =>{
        setListUsers([...listUsers, user]);
      }

  return (
    <Stack.Navigator screenOptions={{
      cardStyle:{
        backgroundColor: PRIMARY_COLOR
      }
    }}>
        <Stack.Screen name= "Login" 
        options={{headerShown: false}} 
        children= {()=> <LoginScreen users ={listUsers}/>}/>
        <Stack.Screen name= "Register"
        options={{headerShown: false}}
        children={() => <RegisterScreen listUsers = {listUsers} handleAddUser ={handleAddUser}/>}/>
        <Stack.Screen name= "Home" 
        options={{headerShown: false}} 
        component={HomeScreen}/>
        </Stack.Navigator>
  )
}

