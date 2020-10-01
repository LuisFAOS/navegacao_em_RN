import React, {useState} from 'react';
import { Text, View, TextInput ,TouchableOpacity, Alert, ImageBackground} from 'react-native'
import loginStyles from './LoginStyles'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import image from '../../../assets/imgs/background.jpg'

export default function Login({ navigation }){
    
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const sing_in = () => {
        if(login == '' || password == ''){
            Alert.alert(
                'Preenchimento obrigatório',
                'Informe o login e a senha obrigatório!',
                [
                    { text: 'OK' }
                ]
            )
        }
        else{
            navigation.replace('Home', { login })
        } 
    }
    return (
        <ImageBackground source={image} style={loginStyles.container}>
            <View>
                <View style={loginStyles.logoContainer}>
                    <LinearGradient colors={["#4c669f","#192f6a","#081a31"]} style={loginStyles.logo}>
                        <AntDesign name="rest" size={50} color="white"/> 
                    </LinearGradient>
                </View>
                <View style={loginStyles.inputBox}>
                    <MaterialIcons name="person" size={24} color="white"/>
                    <TextInput
                        style={loginStyles.field}
                        placeholder="Login"
                        onChangeText={login => setLogin(login)}
                        value={login}
                    />
                </View>
                <View style={loginStyles.inputBox}>
                    <MaterialIcons name="vpn-key" size={24} color="white"/>
                    <TextInput
                        style={loginStyles.field}
                        placeholder="Senha"
                        onChangeText={password => setPassword(password)}
                        value={password}
                    />
                </View>

                <TouchableOpacity onPress={sing_in}>
                    <LinearGradient colors={["#4c669f","#192f6a","#081a31"]} style={loginStyles.ContainerButton}>
                        <MaterialIcons name="send" size={24} color="white"/>
                        <Text style={loginStyles.TextButton}>
                            Entrar
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    )
}
