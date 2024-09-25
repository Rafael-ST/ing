import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SignIn from '../../components/signIn'
import Logo from '../../components/logo'

export default function ({navigation}){
    const [email, setEmail] = useState('')
    const [campoObrigatorio, setCampoObrigatorio] = useState(false)

    const inputHandler = () => {
        if(email === ''){
            setCampoObrigatorio(true)
            return
        }
        Alert.alert('Sucesso',"Um email com instruções para mudar sua senha foi enviado para:\n" + email + '\ncaso você possua uma conta nesse email.',
            [{text:'OK', onPress: () => navigation.navigate('Home')}])
        console.log(`Email enviado ${email}`)
    }
    return(
        <View style={styles.container}>
            <Logo/>
            {/* <Image
                style={styles.logo}
                source={require('../../img/logo.png')}
            /> */}
            <Text style={styles.title}>Mudar Senha</Text>
            {campoObrigatorio
            ?
            (<Text style={styles.txtObrigatorio}>Campo obrigatório*</Text>)
            :
            <Text style={styles.txtObrigatorio}></Text>
            }
            
            <View style={styles.inputView}>
                <MaterialCommunityIcons style={styles.icon} name='email-outline' color={'#CCC'} size={25}/>
                <TextInput
                    onChangeText={setEmail}
                    value={email}
                    style={styles.input}
                    placeholder='Email'
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <TouchableOpacity style={styles.btnEntrar} onPress={inputHandler}>
                <Text style={styles.btnEntrarTxt}>ENTRAR</Text>
            </TouchableOpacity>
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
    title: {
        color: 'green',
        fontSize: 25,
        fontWeight: '600'
    },
    inputView: {
        marginVertical: 5,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#ccc',
    },
    input: {
        width: '90%',
        paddingVertical: 10,
        paddingLeft: 10
    },
    icon: {
        paddingVertical: 10,
        paddingLeft: 5
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
    txtObrigatorio:{
        color: 'red',
        fontSize: 10
    }
})