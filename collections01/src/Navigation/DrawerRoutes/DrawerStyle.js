import { StyleSheet } from 'react-native'

const DrawerStyle = StyleSheet.create({
    photoContainer: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    name: {
        color: '#000000',
        fontSize: 18,
        marginTop: 5,
        marginBottom: 25
    }
})

export default DrawerStyle 