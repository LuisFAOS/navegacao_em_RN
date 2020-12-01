import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import itemStyles from '../../globalStyle/pagesStyles'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { LivroFB } from '../../firebase/bookFB';


export default function Item({ navigation, route }){
   
    const [item, setItem] = useState({})
   
    const {operation, setOperation} = route.params;

    const bookFB = new LivroFB()

    useEffect(() =>{
        setItem(route.params.item)
    }, [route.params.item])

    const save = () => {
        operation == 'add' ? bookFB.addBook(item) : bookFB.editBook(item)
        navigation.navigate('Collection')
    }

    const remove = (itemRemove) => {
        console.log(itemRemove)
        bookFB.removeBook(item)
        navigation.navigate('Collection')
    }

    return (
        <>
            <View style={itemStyles.header}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <MaterialIcons 
                        name="arrow-back"
                        size={24}
                        color="white"/>
                </TouchableOpacity>
                <Text style={itemStyles.text}>ITEM</Text>
            </View>

            <View style={itemStyles.formContainer}>
                <View style={itemStyles.fieldContainer}>
                    <FontAwesome5 name="book" size={26} color="#192f6a" />

                    <TextInput 
                        style={itemStyles.field}
                        placeholder="Title"
                        placeholdertextcolor = "#FFFFFF"
                        onChangeText = {titulo => setItem({...item, titulo})}
                        value={item.titulo}
                    />
                    
                </View>

                <View style={itemStyles.fieldContainer}>
                    <FontAwesome5 name="book-reader" size={26} color="#192f6a" />

                    <TextInput 
                        style={itemStyles.field}
                        placeholder="Author"
                        placeholdertextcolor = "#FFFFFF"
                        onChangeText = {autor => setItem({...item, autor})}
                        value={item.autor}
                    />

                </View>

                <View style={itemStyles.fieldContainer}>
                    <FontAwesome5 name="calendar-alt" size={26} color="#192f6a" />

                    <TextInput 
                        style={itemStyles.field}
                        placeholder="Publication year"
                        keyboardType = 'numeric'
                        maxLength = {4}
                        placeholdertextcolor = "#FFFFFF"
                        onChangeText = {anoPublicacao => setItem({...item, anoPublicacao})}
                        value={item.anoPublicacao ? item.anoPublicacao.toString() : item.anoPublicacao}
                    />

                </View>

                <View style={itemStyles.fieldContainer}>
                    <MaterialIcons name="description" size={26} color="#192f6a" />
                    <ScrollView style={itemStyles.descriptionFieldScroll}>
                        <TextInput 
                            style={itemStyles.descriptionField}
                            placeholder="Description"
                            multiline={true}
                            numberOfLine={4}
                            placeholdertextcolor = "#FFFFFF"
                            onChangeText = {descricao => setItem({...item, descricao})}
                            value={item.descricao}
                        />
                    </ScrollView>
                </View>

                <View style={itemStyles.buttonsContainer}>
                    <TouchableOpacity onPress={() => save(item)} style={itemStyles.buttonContainer}>
                        <LinearGradient colors={['#4c669f','#192f6a','#081a31']} style={itemStyles.button}>
                            <MaterialIcons name="save" size={28} color="white"/>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => remove(item)} style={itemStyles.buttonContainer}>
                        <LinearGradient colors={['#4c669f','#192f6a','#081a31']} style={itemStyles.button}>
                            <MaterialIcons name="delete" size={24} color="white"/>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}