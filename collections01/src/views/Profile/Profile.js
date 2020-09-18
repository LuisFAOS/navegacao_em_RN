import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native'
import profileStyles from '../../globalStyle/pagesStyles'

export default function Collection({ navigation }){
    return (
        <View style={profileStyles.container}>
            <View style={profileStyles.border}>

                <Text style={profileStyles.text}>
                    Perfil 
                </Text>

                <TouchableOpacity style={profileStyles.containerButton}
                    onPress={()=> navigation.goBack()}
                >
                    <Text style={profileStyles.textButton}>
                        Voltar
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}