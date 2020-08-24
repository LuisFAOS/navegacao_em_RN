import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native'
import itemStyle from './itemStyle'


export default function Item({ navigation }){
    return (
        <View style={itemStyle.container}>
            <View style={itemStyle.border}>

                <Text style={itemStyle.text}>
                    Coleção
                </Text>

                <TouchableOpacity style={itemStyle.containerButton}
                    onPress={()=> navigation.goBack()}
                >
                    <Text style={itemStyle.textButton}>
                        Voltar
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}