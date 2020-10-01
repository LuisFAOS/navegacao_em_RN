import React, { useState } from 'react'
import { Text, View, Image } from 'react-native'
import ListStyle from './stylesList.js'

const List = ({data}) => {
    const [item, setItem] = useState(data)

    return(
        <View style={ListStyle.ContainerItems}>
            <Text style={{color: 'white', fontWeight: 'bold' , textAlign: 'center'}}> 
                {item.title} 
            </Text>
            <Text 
                style={{color: 'white', textAlign: 'center'}}>
                    {item.author}({item.publishedYear})
            </Text>
            <Image source={item.photo} style={ListStyle.itemImg} resizeMode="contain"/>
        </View>
    )
}

export default List;