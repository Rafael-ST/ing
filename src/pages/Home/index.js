import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Switch } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native'

export default function App(){
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <View style={styles.container}>
            <Text style={styles.logo}>
                Logo
            </Text>
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
            <View style={styles.viewLogin}>
                <Text>Esqueceu a senha</Text>

                <View style={styles.switchView}>
                    <Switch
                    style={{paddingBottom: -15, backgroundColor: 'blue'}}
                        trackColor={{false: '#767577', true: '#767577'}}
                        thumbColor={isEnabled ? 'green' : '#f4f3f4'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        />
                        <Text style={{ paddingTop: 0}}>Lembrar</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.btnEntrar}>
                <Text>Entrar</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'blue',
        padding: 30
    },
    logo: {
        backgroundColor: 'red',
        width: '100%',
        height: '30%'
    },
    viewInput: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#CCC',
        marginVertical: 5,
        backgroundColor: 'yellow'
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
        backgroundColor: 'green',
        borderRadius: 15,
        paddingVertical: 15,
        alignItems: 'center'
    },
    viewLogin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    switchView: {
        flexDirection: 'row',
        alignItems: 'center'
        // justifyContent: 'center'
    }
})