import React from 'react'
import { Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { Cart } from '../HomeScreen';
import { FlatList } from 'react-native-gesture-handler';
import { styleGlobal } from '../../../theme/appTheme';
import { TERTIARY_COLOR } from '../../../commons/constants';
import Icon from '@expo/vector-icons/MaterialIcons';

interface Props{
    isVisible:boolean;
    cart: Cart[]; //arreglo con los productos del carrito
    hiddenModal:() =>void; //Cerrar el modal
}

export const ModalCartComponent = ({isVisible, cart, hiddenModal}: Props) => {
    const {width} = useWindowDimensions();

    //Funcion para calcular el total a pagar
    const totalPay=(): number=>{
        let total: number = 0;
        cart.forEach(product =>{
            total += product.total;
        })
        return total;
    }

    //Funcion para comprar productos
    const handleBuy=(): void=>{
        hiddenModal();

    }
    return (
    <Modal visible={isVisible} animationType='fade' transparent={true}>
        <View style={styleGlobal.containerModal}>
            <View  style ={{
                ...styleGlobal.bodyModal,
                width: width* 0.80
            }}>
                <View style={styleGlobal.headerModal}>
            <Text style={styleGlobal.titleModal}>Mis productos</Text>
            <View style={styleGlobal.iconCard}>
            <Icon name="cancel"
                color={TERTIARY_COLOR}
                size={23}
                onPress={hiddenModal}/>
            </View>
            </View>
            <View style={styleGlobal.headerTable}>
                <Text style={styleGlobal.headerTextTable}>Productos</Text>
                <View style ={styleGlobal.headerDescription}>
                <Text style={{...styleGlobal.headerTextTable,
                    marginHorizontal:10
                }}>Pre.</Text>
                <Text style={{...styleGlobal.headerTextTable,
                    marginHorizontal:10
                }}>Cant.</Text>
                <Text style={{...styleGlobal.headerTextTable,
                    marginHorizontal:10
                }}>Total</Text>
                </View>
            </View>
            <FlatList
            data={cart}
            renderItem={({item}) =>
                <View style={styleGlobal.headerTable}>
            <Text>{item.name}</Text>
            <View style={styleGlobal.headerDescription}>
            <Text style={{marginLeft:10}}>${item.price.toFixed(2)}</Text>
            <Text style={{marginHorizontal:25}}>${item.quantity}</Text>
            <Text style={{marginHorizontal:10}}>${item.total.toFixed(2)}</Text>
            </View>
            </View>
            }
            keyExtractor={item => item.id.toString()}/>
            <View style={styleGlobal.containerTotalPay}>
                <Text style ={styleGlobal.textTotalPay}>
                    Total pagar: ${totalPay().toFixed(2)}</Text>
            </View>
            <TouchableOpacity style= {styleGlobal.button}
            onPress={handleBuy}>
            <Text style = {styleGlobal.buttonText}>Comprar</Text>
                </TouchableOpacity>
            </View>
        </View>

    </Modal>
    )
}


