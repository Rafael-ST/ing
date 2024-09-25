import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default function Logo(){
    return(
        <View>
            <Image
                style={styles.logo}
                source={require('../img/Huawei_logo.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 200, // Ajuste o tamanho de acordo com o que achar melhor
        height: 200,
        alignSelf: 'center', // Centraliza horizontalmente
        marginBottom: 20, // Adiciona espaço abaixo do logo
        resizeMode: 'contain', // Garante que o logo não seja esticado
    },
})