import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native'
import collectionStyle from './collectionStyle'

export default function Collection({ navigation }){
    return (
        <View style={collectionStyle.container}>
            <View style={collectionStyle.border}>

                <Text style={collectionStyle.text}>
                    Coleção
                </Text>

                <TouchableOpacity style={collectionStyle.containerButton}
                    onPress={()=> navigation.goBack()}
                >
                    <Text style={collectionStyle.textButton}>
                        Voltar
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}