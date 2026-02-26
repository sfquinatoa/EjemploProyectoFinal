import React, { useState } from "react";
import {
    Image,
    Modal,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from "react-native";
import { Product } from "../HomeScreen";
import { styleGlobal } from "../../../theme/appTheme";
import Icon from "@expo/vector-icons/MaterialIcons";
import { TERTIARY_COLOR } from "../../../commons/constants";

interface Props {
  isVisible: boolean; //Mostar Modal
    item: Product;
  hiddenModal: () => void; //ocultar el modal
  changeStockProduct: (id: number, quantity: number) => void; //Funcion que actualiza el stock
}

export const ModalProductComponent = ({
    isVisible,
    item,
    hiddenModal,
    changeStockProduct,
}: Props) => {
    const { width } = useWindowDimensions();

  //Hook useState: permite controlar el estdo del controlador
    const [quantity, setQuantity] = useState<number>(1);

  //Funcion para validar el stock
    const handlechangeStock = (value: number): void => {
    setQuantity(quantity + value);
    };

  //Funcion para agregar al carrito
    const handleAddProduct = () => {
    //Llamar la funcion que actualize el stock
    changeStockProduct(item.id, quantity);
    //cerrar modal
    hiddenModal();
    //reiniciar la cantidad
    setQuantity(1);
    };

    return (
    <Modal visible={isVisible} animationType="fade" transparent={true}>
        <View style={styleGlobal.containerModal}>
        <View
        style={{
            ...styleGlobal.bodyModal,
            width: width * 0.80,
            }}>
        <View style={styleGlobal.headerModal}>
            <Text style={styleGlobal.titleModal}>
            {item.name} ${item.price.toFixed(2)}
            </Text>
            <View style={styleGlobal.iconCard}>
            <Icon
                name="cancel"
                color={TERTIARY_COLOR}
                size={23}
                onPress={hiddenModal}/>
            </View>
        </View>
        <View style={{ alignItems: "center" }}>
            <Image
            source={{
                uri: item.pathImage,
            }}
            style={styleGlobal.imageModal}/>
        </View>
        {item.stock == 0 ? (
            <Text style={styleGlobal.textStock}>Producto Agotado</Text>
        ) : (
            <>
            <View style={styleGlobal.containerQuantity}>
                <TouchableOpacity
                style={styleGlobal.buttonQuiantity}
                onPress={() => setQuantity(quantity - 1)}
                disabled={quantity == 1}>
                <Text style={styleGlobal.buttonQuantityText}>-</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 17 }}>{quantity}</Text>
                <TouchableOpacity
                style={styleGlobal.buttonQuiantity}
                onPress={() => setQuantity(quantity + 1)}
                disabled={quantity ==item.stock}
                >
                <Text style={styleGlobal.buttonQuantityText}>+</Text>
                </TouchableOpacity>
                </View>
                <View style={{ alignItems: "center" }}>
                <Text style={styleGlobal.textTotalPrice}>
                  Total: ${(item.price * quantity).toFixed(2)}
                </Text>
                </View>
                <TouchableOpacity style={styleGlobal.button} 
                onPress={handleAddProduct}>
                <Text style={styleGlobal.buttonText}>Agregar Carrito</Text>
            </TouchableOpacity>
            </>
        )}
        </View>
    </View>
    </Modal>
    );
};
