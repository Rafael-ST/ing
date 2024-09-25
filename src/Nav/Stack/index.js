import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../../pages/Home/'
import Reset from '../../pages/Reset/'
import SignUp from '../../pages/SignUp/'

const Stack = createNativeStackNavigator()

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
                <Stack.Screen name='Reset' component={Reset} options={{title: 'Mudar Senha', headerTintColor: 'green'}}/>
                <Stack.Screen name='SignUp' component={SignUp} options={{title: 'Criar Conta', headerTintColor: 'green'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}