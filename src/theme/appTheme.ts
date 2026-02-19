import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, QUATERNATY_COLOR, SECUNDARY_COLOR, TERTIARY_COLOR } from "../commons/constants";

export const styleGlobal = StyleSheet.create({
    title:{
        color: SECUNDARY_COLOR,
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingTop:60
    },
    containerBody:{
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius:25,
        borderTopRightRadius: 25,
        paddingHorizontal: 30,
        paddingTop:40
    },
    titleWelcome:{
        fontSize:20,
        fontWeight: 'bold'
    },
    imput:{
        backgroundColor: QUATERNATY_COLOR,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical:7
    },
    containerInput:{
        marginVertical:15
    },
    button:{
        backgroundColor: TERTIARY_COLOR,
        paddingVertical:15,
        borderRadius:10
    },
    buttonText:{
        textAlign: 'center',
        color: SECUNDARY_COLOR,
        fontWeight: 'bold'
    }
})