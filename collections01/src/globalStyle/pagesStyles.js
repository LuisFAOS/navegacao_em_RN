import { StyleSheet } from 'react-native'

const pagesStyle = StyleSheet.create({
    container: {
        width:'100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        height: 40,
        backgroundColor: '#14417b',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: 28,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    fieldContainer: {
        flexDirection: 'row',
        padding: 5,
        paddingLeft: 58,
        paddingRight: 58,
        margin: 5,
    },
    fieldContainerDescription: {
        flexDirection: 'row',
        padding: 5,
        paddingLeft: 45,
        paddingRight: 46,
        margin: 5,
    },
    field: {
        width: '100%',
        fontSize: 18,
        color: 'black',
        backgroundColor: '#4c6690r',
        marginLeft: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: '#192f6a',
        borderRadius: 5,
    },
    descriptionField: {
        width: '100%',
        height: 100,
        fontSize: 18,
        color: 'black',
        backgroundColor: '#4c669f',
        marginLeft: 15,
        padding: 18,
        borderWidth: 1,
        borderColor: '#192f6a',
        borderRadius: 5,
        textAlignVertical: 'top',
    },
    descriptionFieldScroll: {
        width: '100%',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 50,
    },
    buttonContainer: {
        alignItems: 'center',
        padding: 5,
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
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

export default pagesStyle