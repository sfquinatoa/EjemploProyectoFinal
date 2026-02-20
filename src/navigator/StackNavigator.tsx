import { createStackNavigator } from '@react-navigation/stack';
import { BienvenidoScreen } from '../Screen/BienvenidoScreen';
import { FormularioScreen } from '../Screen/formularioScreen';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      cardStyle: {
        backgroundColor: "orange"
      }
    }}>
      <Stack.Screen name="Bienvenido"
        options={{ headerShown: false }}
        component={BienvenidoScreen} />

        <Stack.Screen name="Formulario"
        options={{ headerShown: false }}
        component={FormularioScreen} />


    </Stack.Navigator>
  );
}