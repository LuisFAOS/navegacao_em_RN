import React, {useState} from 'react';
import { Text, View, TextInput ,TouchableOpacity, Alert} from 'react-native'
import loginStyles from './LoginStyles'

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
        <View style={loginStyles.container}>
            <View style={loginStyles.border}>

                <Text style={loginStyles.text}>
                    Login 
                </Text>

                <TextInput
                    style={loginStyles.field}
                    placeholder="Login"
                    onChangeText={login => setLogin(login)}
                    value={login}
                />

                <TextInput
                    style={loginStyles.field}
                    placeholder="Senha"
                    onChangeText={password => setPassword(password)}
                    value={password}
                />

                <TouchableOpacity style={loginStyles.ContainerButton}
                    onPress={sing_in}
                >
                    <Text style={loginStyles.textButton}>
                        Entrar
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
