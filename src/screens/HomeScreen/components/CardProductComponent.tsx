import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Product } from '../HomeScreen'
import { styleGlobal } from '../../../theme/appTheme';
import Icon from '@expo/vector-icons/MaterialIcons';
import { TERTIARY_COLOR } from '../../../commons/constants';
import { ModalProductComponent } from './ModalProductComponent';

interface Props{
    item: Product;
    changeStockProduct:(id:number, quantity: number) =>void;

}
export const CardProductComponent = ({item, changeStockProduct }: Props) => {
    //Hook useState: permite gestionar el estado del modla
    const [showModal, setShowModal] =useState<boolean>(false);
    //Funcion para mostar u ocultar el modal
    const hiddenModal =():void =>{
        setShowModal(!showModal)
    }
    return (
        <>
    <View style ={styleGlobal.containerCard}>
        <Image source ={{
            uri: item.pathImage
        }}
        style={styleGlobal.imageCard}/>
        <View style={{alignItems:'center', justifyContent: 'center'}}>
    <Text style= {styleGlobal.titleCard}>{item.name}</Text>
    <Text>Precio: ${item.price.toFixed(2)}</Text>
    </View>
    <View style = {styleGlobal.iconCard}>
    <Icon name= 'shopping-cart'
    size={33} 
    color ={TERTIARY_COLOR}
    onPress={hiddenModal}/>
    </View>
    </View>
    <ModalProductComponent isVisible={showModal} 
    item={item} 
    hiddenModal={hiddenModal}
    changeStockProduct = {changeStockProduct}/>
    </>
    )
}

