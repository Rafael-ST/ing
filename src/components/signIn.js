import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

export default function SignIn(){
    const navigation = useNavigation();
    return (
        <View>
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
                <Text style={styles.txtSign}>Não tem uma conta? <Text
                    style={styles.txtSignLink}
                    onPress={() => navigation.navigate('SignUp')}
                    >CRIAR CONTA</Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    alternativeTxt:{
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtColor: {
        color: 'green'
    },
    containerBtn: {
        alignItems: 'center',
        justifyContent: 'center'
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
    btnEntrarTxt:{
        color: '#fff',
        fontWeight: '600',
    },
    txtSign: {
        color: 'green',
        marginTop: 20
    },
    txtSignLink: {
        fontWeight: 'bold'
    }
})