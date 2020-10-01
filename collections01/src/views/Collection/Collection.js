import React, { useState } from 'react';
import { Text, FlatList, View, TouchableOpacity} from 'react-native'
import collectionStyles from '../../globalStyle/pagesStyles'
import List from '../../components/List/List.js'
import { MaterialIcons } from '@expo/vector-icons'

export default function Collection({ navigation }){

    const [collection, setCollection] = useState([
        {
            id: '1',
            title: 'Admirável Mundo Novo',
            description: "Um clássico moderno, o romance distópico de Aldous Huxley é indispensável...",
            author: 'Aldous Huxley',
            publishedYear: '1932',
            photo: require('../../../assets/itemsImgs/1.jpg')
        },
        {
            id: '2',
            title: '1984',
            description: "Uma das obras mais contundentes e influentes do século XX ganha nova...",
            author: 'George Orwell',
            publishedYear: '1949',
            photo: require('../../../assets/itemsImgs/2.jpg')
        },
        {
            id: '3',
            title: 'Laranja Mecânica',
            description: "Piblicado pela primeira vez em 1962, e imortalizado 9 anos depois pelo filme de Stanley Kubrick,...",
            author: 'Anthony Burgess',
            publishedYear: '1962',
            photo: require('../../../assets/itemsImgs/3.jpg')
        },
        {
            id: '4',
            title: 'Neuromancer',
            description: "O Céu sobre o porto tinha cor de televisão num canal fora do ar. Considerada a obra precursora...",
            author: 'William Gibson',
            publishedYear: '1981',
            photo: require('../../../assets/itemsImgs/4.jpg')
        }
    ])


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
                    showHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    data={collection}
                    renderItem={({ item }) => <List data={item}/>}
                />
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