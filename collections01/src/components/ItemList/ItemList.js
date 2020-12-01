import React, { useState } from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import ListStyle from './stylesList.js'
import { LinearGradient } from 'expo-linear-gradient'

const List = ({data, details}) => {
    const [item, setItem] = useState(data)

    return(
        <TouchableOpacity style={ListStyle.ContainerItems} onPress={details}>
            <LinearGradient colors={['#14417b', '#92afd7', '#92afd7']} style={{flex:1, paddingVertical: 5, marginVertical: 5}}>
                <Text style={{color: 'black', fontWeight: 'bold' , textAlign: 'center'}}> 
                    {item.titulo} 
                </Text>
                <Text 
                    style={{color: 'black', textAlign: 'center'}}>
                        {item.autor}({item.anoPublicacao})
                </Text>
                <LinearGradient colors={['#92afd7', '#92afd7', '#14417b']}>
                    <Text></Text>
                    {/* <Image source={item.photo} style={ListStyle.itemImg} resizeMode="contain"/> */}
                </LinearGradient>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default List;