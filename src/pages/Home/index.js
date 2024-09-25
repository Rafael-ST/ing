import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Switch, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native'
import imagem from '../../img/logo.png'
import SignIn from '../../components/signIn'
import Logo from '../../components/logo'

export default function App({navigation}){
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [senhaVisivel, setSenhaVisivel] = useState(false)

    return(
        <View style={styles.container}>
            <Logo/>
            <Text style={styles.title}>Bem-Vindo</Text>
            <View style={styles.viewInput}>
            <MaterialCommunityIcons style={styles.icon} name='email-outline' color={'#CCC'} size={25}/>
            <TextInput
                style={styles.input}
                placeholder='Email'
                keyboardType="email-address"
                autoCapitalize="none"
                />
            </View>
            <View style={styles.viewInput}>
                <Ionicons  style={styles.icon} name='lock-open-outline' color={'#CCC'} size={25}/>
                <TextInput
                    style={{ width: '80%', padding: 10}}
                    placeholder='Senha'
                    secureTextEntry={!senhaVisivel}
                    />
                <MaterialCommunityIcons
                style={styles.icon}
                name={senhaVisivel? 'eye-outline' : 'eye-off-outline'}
                color={'#CCC'}
                size={25}
                onPress={() => setSenhaVisivel(!senhaVisivel)} />
            </View>
            <TouchableOpacity style={styles.btnEntrar} onPress={() => navigation.navigate('Principal')}>
                <Text style={styles.btnEntrarTxt}>ENTRAR</Text>
            </TouchableOpacity>
            <View style={styles.viewLogin}>
                <Text style={styles.txtColor} onPress={() => navigation.navigate('Reset')}>Esqueceu a senha</Text>

                <View style={styles.switchView}>
                    <Switch
                        trackColor={{false: '#767577', true: '#767577'}}
                        thumbColor={isEnabled ? 'green' : '#f4f3f4'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        />
                        <Text style={styles.txtColor}>Lembrar-me</Text>
                </View>
            </View>
            <SignIn/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#fff'
    },
    logo: {
        width: 200, // Ajuste o tamanho de acordo com o que achar melhor
        height: 200,
        alignSelf: 'center', // Centraliza horizontalmente
        marginBottom: 20, // Adiciona espaço abaixo do logo
        resizeMode: 'contain', // Garante que o logo não seja esticado
    },
    viewInput: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#CCC',
        marginVertical: 5,
    },
    icon: {
        paddingVertical: 10,
        paddingLeft: 5
    },
    input: {
        // width: '90%',
        flex: 1,
        paddingVertical: 10,
        paddingLeft: 10
    },
    title: {
        color: 'green',
        fontSize: 25,
        fontWeight: '600'
    },
    btnEntrar: {
        marginTop: 10,
        backgroundColor: 'green',
        borderRadius: 15,
        paddingVertical: 15,
        alignItems: 'center',
    },
    btnEntrarTxt:{
        color: '#fff',
        fontWeight: '600',
    },
    viewLogin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    switchView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtColor: {
        color: 'green'
    },
})