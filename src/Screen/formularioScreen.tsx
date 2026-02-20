import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { stylesGlobal } from '../themes/appThemes';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { InputComponent } from '../components/ImputComplement';

//interface defina laestructura de lobjeto indicado
interface Formlario {
    num1: string;
    num2: string;
}

export const FormularioScreen = () => {
    const [valores, setValores] = React.useState({
        num1: '',
        num2: '',
    });


    //funcion para capturar los valores de mi formulario 
    const handleChangeValue = (name: string, value: string): void => {
        console.log(name, " ", value, "  ");
        setValores({
            ...valores,    // Mantiene el valor del campo que no se está tocando
            [name]: value  // Actualiza el campo actual (num1 o num2)
        });

    }
    // 4. Esta función calcula y envía la respuesta final a la CONSOLA
    const handleCalcularConsola = () => {
        const n1 = parseFloat(valores.num1);
        const n2 = parseFloat(valores.num2);

        // Validaciones según tu actividad autónoma
        if (n1 === 0 && n2 === 0) {
            console.log("RESULTADO: INDETERMINACIÓN");
        } else if (n2 === 0) {
            console.log("RESULTADO: NO EXISTE DIVISIÓN PARA CERO");
        } else {
            const res = n1 / n2;
            console.log(`RESULTADO DE LA DIVISIÓN: ${res}`);
        }
    }
    return (
        <View >
            <TitleComponent title='Formulario' />
            <BodyComponent>
                <Text style={stylesGlobal.titleWelcome} >Realiza tu calculo </Text>
                <Text>Realiza tu diviciones en esta tu App</Text>
                <View>
                    <InputComponent placeholder='numero 1' keyboardType='numeric' name="num1"
                        handleChangeValue={handleChangeValue} />
                    <InputComponent placeholder='numero 2' keyboardType='numeric' name="num2"
                        handleChangeValue={handleChangeValue} />
                </View>
                <ButtonComponent buttonText='Calcular' onPress={handleCalcularConsola}
                />
            </BodyComponent>
        </View>
    )
}
