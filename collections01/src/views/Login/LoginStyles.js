import { StyleSheet } from 'react-native'

const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    border: {
        backgroundColor: '#081a31',
        width: '80%',
        height: 230,
        borderRadius: 10
    },
    text: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    },
    field: {
        backgroundColor: '#dcedff',
        fontSize: 18,
        marginHorizontal: 40,
        marginTop: 5,
        borderRadius: 5,
        height: 40,
        paddingLeft: 10
    },
    ContainerButton: {
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
        fontWeight: 'bold'
    }
})

export default LoginStyles