import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TitleComponent } from '../../components/TitleComponent'
import { BodyComponent } from '../../components/BodyComponent';
import { FlatList } from 'react-native-gesture-handler';
import { CardProductComponent } from './components/CardProductComponent';
import Icon from '@expo/vector-icons/MaterialIcons'
import { SECUNDARY_COLOR } from '../../commons/constants';
import { styleGlobal } from '../../theme/appTheme';
import { ModalCartComponent } from './components/ModalCartComponent';

export interface Product{
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}
export const HomeScreen = () => {
    //Datos de prueba
    const products: Product[]=[
        {id:1, name: 'Fc Barcelona', price: 120, stock: 5, pathImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16TesoIeN0UGfBtALW2O-dcYGaENz4tH2Bg&s'},
        {id:2, name: 'Real Madrid', price: 110, stock: 5, pathImage:'https://assets.adidas.com/images/w_1880,f_auto,q_auto/bb3e148743aa4423bc25ceb575e14bce_9366/JJ1931_01_laydown.jpg'},
        {id:3, name: 'Liverpool', price: 100, stock: 0, pathImage:'https://assets.adidas.com/images/w_1880,f_auto,q_auto/f54aaf314c3045d29ab6ad15ff1f4e20_9366/JV6423_01_laydown.jpg'},
        {id:4, name: 'Man. City', price: 90, stock: 5, pathImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkpOueMICMNTAFh4ui55q2cuTkHC-PMFI3Q&s'},
        {id:5, name: 'Man. United', price: 100, stock: 5, pathImage:'https://assets.adidas.com/images/w_1880,f_auto,q_auto/fe0ce38456ab4ad2871bafc400cca89d_9366/IP1736_01_laydown.jpg'},
        {id:6, name: 'Barcelona', price: 120, stock: 5, pathImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16TesoIeN0UGfBtALW2O-dcYGaENz4tH2Bg&s'},
        {id:7, name: 'Madrid', price: 110, stock: 5, pathImage:'https://assets.adidas.com/images/w_1880,f_auto,q_auto/bb3e148743aa4423bc25ceb575e14bce_9366/JJ1931_01_laydown.jpg'},
        {id:8, name: 'reds', price: 100, stock: 5, pathImage:'https://assets.adidas.com/images/w_1880,f_auto,q_auto/f54aaf314c3045d29ab6ad15ff1f4e20_9366/JV6423_01_laydown.jpg'},
    ];

    //Hook UseState: permite gestionar la informacion de los productos
    const[productsState, setProductsState]= useState<Product[]>(products);

    //Hook useState: permite gestionar el estado de los productos del carrito
    const [cart, setCart]= useState<Cart[]>([]);//arreglo del carrito

    //Hook useState: permitir gestionar el estado del modal
    const[showModal, setShowModal] = useState<boolean>(false);

    //Funcion para actualizar el estado del modal
    const hiddenModal =(): void =>{
        setShowModal(!showModal);
    }
    // Función para limpiar el carrito
    const handleClearCart = (): void => {
    setCart([]); //
    }
    

    //Funcion para controlar el stock de los productos
    const changeStockProduct =(id: number, quantity: number): void =>{
        const updateProduct = productsState.map(item => item.id == id
        ?{...item, stock: item.stock -quantity}
        : item);

        //Modificar el arreglo de productos
        setProductsState (updateProduct);

        //Llamar a la funcion para añadir productos al carrito
        addProduct(id, quantity);
        }

        //Funcion para añadir productos al carrito
        const addProduct = (id:number, quantity:number): void =>{
            const product = productsState.find(product =>product.id == id);

            //Si no existe el producto
            if(!product){
                return;
            }
            //Crear el objeto del producto
            const newCart: Cart ={
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity,
                total: product.price* quantity
            }
            //Añadir al arreglo del carrito
            setCart([...cart, newCart]);
            console.log(cart);
        }

    return (
    <View>
        <View style ={styleGlobal.headerHome}>
        <TitleComponent title = 'Productos'/>
        <View style ={styleGlobal.iconHome}>
            <Text style={styleGlobal.textIconCart}>{cart.length}</Text>
        <Icon name ='shopping-cart' color= {SECUNDARY_COLOR} Size={30} onPress={hiddenModal}/>
        </View>
        </View>
        <BodyComponent>
            <FlatList
            data={products}
            renderItem={({item}) =><CardProductComponent item={item} changeStockProduct = {changeStockProduct }/>}
            keyExtractor={item => item.id.toString()}
            numColumns ={2}
            columnWrapperStyle={{justifyContent:'space-between'}}/>
        </BodyComponent>
        <ModalCartComponent isVisible={showModal} cart={cart} hiddenModal={hiddenModal} clearCart={handleClearCart}/>
    </View>
    )
}
