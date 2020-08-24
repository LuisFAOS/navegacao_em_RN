import { StyleSheet } from 'react-native'

const collectionStyle = StyleSheet.create({
    container: {
        width:'100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    border: {
        backgroundColor: '#081A31',
        width: '80%',
        height: 'auto',
        borderRadius: 10
    },
    text: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    }, 
    containerButton: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        padding: 2,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: '#E8F2E9',
        backgroundColor: '#14417B',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
    }
})

export default collectionStyle