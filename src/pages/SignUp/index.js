import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert  } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Logo from '../../components/logo'


export default function ({navigation}){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [campoObrigatorio, setCampoObrigatorio] = useState(false)
    const [senhaVisivel, setSenhaVisivel] = useState(false)

    const inputHandler = () => {
        if(nome === '' || email === '' || senha === ''){
            setCampoObrigatorio(true)
        }else{
            setCampoObrigatorio(false)
            Alert.alert(
                'Conta criada!',
                'Sua conta foi criada, agora entre com seu email e senha e aproveite',
                [{text: 'Ok', onPress: () => navigation.navigate('Home')}]
            )
            console.log('Nome completo: '+nome+'\nEmail: '+email+'\nSenha: '+senha)
        }
    }

    return(
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={80}
        >
        <ScrollView  style={styles.container}>
            <Logo/>
            <Text style={styles.title}>Criação de Conta</Text>
            {campoObrigatorio && (
          <Text style={styles.txtObrigatorio}>Por favor, preencha todos os campos*</Text>
        )}

        <View style={[styles.inputView, campoObrigatorio && nome === '' ? styles.obrigatorio : null]}>
          <MaterialCommunityIcons style={styles.icon} name='account' color={'#CCC'} size={25} />
          <TextInput
            style={styles.input}
            placeholder='Nome Completo'
            value={nome}
            onChangeText={setNome}
            autoCapitalize='words'
          />
        </View>

        <View style={[styles.inputView, campoObrigatorio && email === '' ? styles.obrigatorio : null]}>
          <MaterialCommunityIcons style={styles.icon} name='email-outline' color={'#CCC'} size={25} />
          <TextInput
            style={styles.input}
            placeholder='Email'
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={[styles.inputView, campoObrigatorio && senha === '' ? styles.obrigatorio : null]}>
          <Ionicons style={styles.icon} name='lock-open-outline' color={'#CCC'} size={25} />
          <TextInput
            style={styles.input}
            placeholder='Senha'
            secureTextEntry={!senhaVisivel}
            value={senha}
            onChangeText={setSenha}
          />
          <MaterialCommunityIcons
           style={styles.icon}
           name={senhaVisivel? 'eye-outline' : 'eye-off-outline'}
           color={'#CCC'}
           size={25}
           onPress={() => setSenhaVisivel(!senhaVisivel)} />

        </View>
            <TouchableOpacity style={styles.btnEntrar} onPress={inputHandler}>
                <Text style={styles.btnEntrarTxt}>ENTRAR</Text>
            </TouchableOpacity>
        </ScrollView >
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#fff'
    },
    title: {
        color: 'green',
        fontWeight: '600',
        fontSize: 25,
    },
    inputView: {
        marginVertical: 5,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#ccc',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        // width: '70%',
        paddingVertical: 10,
        paddingLeft: 10
    },
    icon: {
        paddingVertical: 10,
        paddingLeft: 5,
        paddingRight: 5
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
    },
    obrigatorio: {
        borderColor: 'red'
    }
})