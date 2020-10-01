import { StyleSheet } from 'react-native'

const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    border: {
        backgroundColor: '#081a31',
        width: '80%',
        height: 'auto',
        borderRadius: 10
    },
    logo: { 
        width: 90,
        height: 90,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logoContainer:{
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
    },  
    text: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    },
    field: {
        fontSize: 18,
        color: '#FFFFFF',
        marginLeft: 15, 
        paddingBottom: 10,
        height: 24,
        borderBottomWidth: 1,
        borderColor: 'white'
    },
    ContainerButton: {
        flexDirection: 'row',
        marginVertical: 20,
        marginHorizontal: 40,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: '#e8f2e9',
        backgroundColor: '#14417b',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextButton: {
        fontSize: 18,
        color: '#FFFFFF',
        marginLeft: 10,
        fontWeight: 'bold'
    },
    inputBox: {
        flexDirection: 'row',
        paddingHorizontal: 50,
        margin: 10,
        alignItems: 'center'
    }
})

export default LoginStyles