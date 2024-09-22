import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Switch, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native'
import imagem from '../../img/logo.png'

export default function App(){
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../img/logo.png')}
            />
            <Text style={styles.title}>Bem Vindo</Text>
            <View style={styles.viewInput}>
            <MaterialCommunityIcons style={styles.icon} name='email-outline' color={'#CCC'} size={25}/>
            <TextInput
                style={styles.input}
                placeholder='Email'
                />
            </View>
            <View style={styles.viewInput}>
            <Ionicons  style={styles.icon} name='lock-open-outline' color={'#CCC'} size={25}/>
            <TextInput
                style={{ width: '90%', padding: 10}}
                placeholder='Senha'
                secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={styles.btnEntrar}>
                <Text style={styles.btnEntrarTxt}>ENTRAR</Text>
            </TouchableOpacity>
            <View style={styles.viewLogin}>
                <Text style={styles.txtColor}>Esqueceu a senha</Text>

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
            <View style={styles.alternativeTxt}>
                <Text style={styles.txtColor}>______________</Text>
                <Text style={styles.txtColor}>ou entre com</Text>
                <Text style={styles.txtColor}>______________</Text>
            </View>
            <View style={styles.containerBtn}>
                <TouchableOpacity style={styles.btnGoogle}>
                    <AntDesign name='google' color={'#fff'} size={30} style={{marginRight:5}}/>
                    <Text style={styles.btnEntrarTxt}>Google</Text>
                </TouchableOpacity>
                <Text style={styles.txtSign}>Não tem uma conta? <Text style={styles.txtSignLink}>CRIAR CONTA</Text></Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30
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
        width: '90%',
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
    alternativeTxt:{
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtColor: {
        color: 'green'
    },
    btnGoogle: {
        backgroundColor: 'green',
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'center',
        borderRadius: 15,
        padding: 5,
        alignItems: 'center',
        marginTop: 10
    },
    containerBtn: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtSign: {
        color: 'green',
        marginTop: 20
    },
    txtSignLink: {
        // color: 'blue',
        fontWeight: 'bold'
    }
})