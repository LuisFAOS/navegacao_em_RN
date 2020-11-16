import React, { useState } from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import ListStyle from './stylesList.js'
import { LinearGradient } from 'expo-linear-gradient'

const List = ({data, details}) => {
    const [item, setItem] = useState(data)

    return(
        <TouchableOpacity style={ListStyle.ContainerItems} onPress={details}>
            <LinearGradient colors={['#14417b', '#92afd7', '#92afd7']}>
                <Text style={{color: 'white', fontWeight: 'bold' , textAlign: 'center'}}> 
                    {item.title} 
                </Text>
            </LinearGradient>
            <Text 
                style={{color: 'white', textAlign: 'center'}}>
                    {item.author}({item.publicationyear})
            </Text>
            <LinearGradient colors={['#92afd7', '#92afd7', '#14417b']}>
                <Image source={item.photo} style={ListStyle.itemImg} resizeMode="contain"/>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default List;