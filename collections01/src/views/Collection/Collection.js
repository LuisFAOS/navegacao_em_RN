import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, TouchableOpacity} from 'react-native'
import collectionStyles from '../../globalStyle/pagesStyles'
import ItemList from '../../components/ItemList/ItemList.js'
import { MaterialIcons } from '@expo/vector-icons'
import {LivroFB} from '../../firebase/bookFB'

export default function Collection({ navigation }){

    const add = () => {
        navigation.navigate('Item', {item: {}, operation: 'add'})
    }

    const edit = () => {
        navigation.navigate('Item', {item, operation: 'edit'})
    }

    const [collection, setCollection] = useState([])

    const bookFB = new LivroFB()

    useEffect(() => {
        bookFB.getCollection()
                .orderBy('titulo')
                .onSnapshot(query => {
                    const items = []
                    query.forEach(doc => {
                        items.push({...doc.data(), id: doc.id})
                    })
                    setCollection(items)
                })
    },[])

    return (
        <View style={collectionStyles.container}>
            <View style={collectionStyles.border}>
                <View style={collectionStyles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={collectionStyles.text}>
                        Coleção
                    </Text>
                    <MaterialIcons name="add" size={24} color="white" />
                </View>

                <FlatList
                    showsHorizontalScrollIndicator={false} 
                    keyExtractor={item => item.id}
                    data={collection}
                    renderItem={({item}) =>(
                        <ItemList data={item} datails={() => edit(item)}/>
                    )
                }/>
                <TouchableOpacity style={collectionStyles.containerButton}
                    onPress={()=> navigation.goBack()}
                >
                    <Text style={collectionStyles.textButton}>
                        Voltar
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}