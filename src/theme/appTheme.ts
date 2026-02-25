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
        paddingVertical:40
    },
    titleWelcome:{
        fontSize:17,
        textAlign: 'center',
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
    },
    iconPassword:{
        position: 'absolute',
        bottom: 15,
        right:10
    },
    textRedirect:{
        marginTop: 20,
        fontSize:16,
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    containerCard:{
        //flexDirection: 'row',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:10,
        borderWidth:1,
        borderColor: "black",
        borderRadius:10,
        borderStyle: 'solid',
        margin: 7,
        marginBottom:15,
        shadowColor:"black",
        shadowOpacity: 0.25,
        shadowRadius: 2.65,


    },
    titleCard:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize: 16
    },
    containerText:{
        textAlign:'center',
    },
    imageCard:{
        width: 80,
        height:80
    },
    iconCard:{
        flex:1,
        alignItems: 'flex-end',
        marginTop:2
    },
    containerModal:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(0,0,0,0.5)'

    },
    bodyModal:{
        padding:20,
        backgroundColor: SECUNDARY_COLOR,
        borderRadius:10
        
    },
    headerModal:{
        flexDirection:'row',
        borderBlockColor:'white',
        borderBottomWidth:1,
        padding:10,
    },
    titleModal:{
        fontWeight:'bold',
        fontSize:18
    }, 
    imageModal:{
        height:200,
        width:200
    },
    containerQuantity:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonQuiantity:{
        backgroundColor:TERTIARY_COLOR,
        height: 50,
        width: 50,
        borderRadius:50,
        justifyContent: 'center',
        alignItems: 'center',
        margin:15
    },
    buttonQuantityText:{
        color: SECUNDARY_COLOR,
        fontSize:20,
        fontWeight:'bold'
    },
    textTotalPrice:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:10
    },
    textStock:{
        fontSize:18,
        color: 'red',
        textAlign: 'center'
    }

})