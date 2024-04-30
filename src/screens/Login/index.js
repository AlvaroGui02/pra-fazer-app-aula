import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'

export default function Login({ navigation }) {
    let errorLogin = null

    return (
        <View style={styles.container}>
            <Image style={styles.logo} 
            source={require('../../../assets/logo_pra_fazer.png')} />

            { errorLogin != null && (
                <Text style={styles.alert}>{ errorLogin }</Text>
            )}

            <TextInput
                style={styles.input}
                placeholder='E-mail'
            />

            <TextInput
                style={styles.input}
                placeholder='Senha'
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonCreate}
                onPress={() => navigation.navigate('CreateUser')}
            >
                <Text style={styles.buttonCreateText}>Criar Usuário</Text>
            </TouchableOpacity>
        </View>
    )
}