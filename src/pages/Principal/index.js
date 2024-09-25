import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

export default function App(){
    return(
        <View style={styles.container}>
            <Text>Tela Principal</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
        backgroundColor: '#fff'
    }
})