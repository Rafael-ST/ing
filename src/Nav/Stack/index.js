import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../../pages/Home/'
import Reset from '../../pages/Reset/'
import SignUp from '../../pages/SignUp/'
import Principal from '../../pages/Principal/'
import Perfil from '../../pages/Perfil/'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function Tabs(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name='Principal' component={Principal}/>
            <Tab.Screen name='Perfil' component={Perfil}/>
        </Tab.Navigator>
    )
}

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
                <Stack.Screen name='Reset' component={Reset} options={{title: 'Mudar Senha', headerTintColor: 'green'}}/>
                <Stack.Screen name='SignUp' component={SignUp} options={{title: 'Criar Conta', headerTintColor: 'green'}}/>
                <Stack.Screen name='Principal' component={Tabs} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}