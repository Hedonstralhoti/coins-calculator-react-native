import { StyleSheet, TextInput } from 'react-native'

export default StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#424242'
    },
    displayBackground: {
        flex:1,
        marginTop: 5,
        flexDirection: 'row',
        backgroundColor: '#424242'
    },
    displays: {
        width: '100%', 
        padding: 4, 
        marginRight: 1, 
        backgroundColor: '#323232'
    },
    bodyBackground: {
        flex:4,
        marginBottom: 5,
        marginTop: 5,
        flexDirection: 'row',
        backgroundColor: '#2C7FA8'
    },
    inputs: {
        width: '75%', 
        padding: 4, 
        marginRight: 1, 
        backgroundColor: '#323232',
        alignItems:'center',
        justifyContent:'space-around'
    },
    buttonsBody: {
        flex:1, 
        width: '25%', 
        marginLeft: 1, 
        backgroundColor: '#2C7FA8', 
        flexDirection: 'column'
    },
    buttonsBackground: {
        flex:3,
        backgroundColor: '#323232',
        height: '100%',
        alignItems:'center',
        justifyContent:'center'
    },
    buttons: {
        height: '100%',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonsFont: {
        fontSize:32, 
        color:'#2C7FA8'
    },
    TextInput:{
        width: '100%', 
        backgroundColor: '#fff',
        fontSize:20, 
        color:'#2C7FA8'
    }
   

})
