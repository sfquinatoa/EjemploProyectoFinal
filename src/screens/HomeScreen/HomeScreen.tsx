import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TitleComponent } from '../../components/TitleComponent'
import { BodyComponent } from '../../components/BodyComponent';
import { FlatList } from 'react-native-gesture-handler';
import { CardProductComponent } from './components/CardProductComponent';


export interface Product{
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;

}
export const HomeScreen = () => {
    //Datos de prueba
    const products: Product[]=[
        {id:1, name: 'Playera FC Barcelona', price: 100, stock: 5, pathImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16TesoIeN0UGfBtALW2O-dcYGaENz4tH2Bg&s'},
        {id:2, name: 'Playera Real Madrid', price: 100, stock: 5, pathImage:'https://assets.adidas.com/images/w_1880,f_auto,q_auto/bb3e148743aa4423bc25ceb575e14bce_9366/JJ1931_01_laydown.jpg'},
        {id:3, name: 'Playera Liverpool', price: 100, stock: 0, pathImage:'https://assets.adidas.com/images/w_1880,f_auto,q_auto/f54aaf314c3045d29ab6ad15ff1f4e20_9366/JV6423_01_laydown.jpg'},
        {id:4, name: 'Playera Man. City', price: 100, stock: 5, pathImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkpOueMICMNTAFh4ui55q2cuTkHC-PMFI3Q&s'},
        {id:5, name: 'Playera Man. United', price: 100, stock: 5, pathImage:'https://assets.adidas.com/images/w_1880,f_auto,q_auto/fe0ce38456ab4ad2871bafc400cca89d_9366/IP1736_01_laydown.jpg'},
        {id:6, name: 'Playera FC Barcelona', price: 100, stock: 5, pathImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16TesoIeN0UGfBtALW2O-dcYGaENz4tH2Bg&s'},
        {id:7, name: 'Playera Real Madrid', price: 100, stock: 5, pathImage:'https://assets.adidas.com/images/w_1880,f_auto,q_auto/bb3e148743aa4423bc25ceb575e14bce_9366/JJ1931_01_laydown.jpg'},
        {id:8, name: 'Playera Liverpool', price: 100, stock: 5, pathImage:'https://assets.adidas.com/images/w_1880,f_auto,q_auto/f54aaf314c3045d29ab6ad15ff1f4e20_9366/JV6423_01_laydown.jpg'},
    ];

    //Hook UseState: permite gestionar la informacion de los productos
    const[productsState, setProductsState]= useState<Product[]>(products);
    //Funcion para controlar el stock de los productos
    const changeStockProduct =(id: number, quantity: number): void =>{
        const updateProduct = productsState.map(item => item.id == id
        ?{...item, stock: item.stock -quantity}
        : item);
        //Modificar el arreglo de productos
        setProductsState (updateProduct);
        }
    return (
    <View>
        <TitleComponent title = ' Bienvenido a Productos'/>
        <BodyComponent>
            <FlatList
            data={products}
            renderItem={({item}) =><CardProductComponent item={item} />}
            keyExtractor={item => item.id.toString()}
            numColumns ={2}
            columnWrapperStyle={{justifyContent:'space-between'}}/>
        </BodyComponent>
    </View>
    )
}
