import { Dimensions, StyleSheet } from "react-native";
const sc = Dimensions.get('window')
const wi = sc.width / 3
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    button: {
        backgroundColor: '#34ebab',
        width: sc.width / 1.3,
        borderRadius: wi * 2,
        padding: 5,
        margin: 6,
        height: sc.height / 15,
        justifyContent: 'center'
    },
    buttontxt: {
        alignSelf: "center",
        fontSize: 18,
    },
    textinput: {
        borderRadius: 10,
        width: sc.width / 1.1,
        height: sc.height / 12,
        padding: 5,
        marginVertical: 6,
        backgroundColor: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    },
    circle: {
        borderRadius: wi,
        height: sc.height / 8,
        borderColor: 'black',
        borderWidth: 2,
        padding: 5,
        marginVertical: 6,
        fontSize: 22,
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    simpletext: {
        width: sc.width,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:"center"
    },
    back: {
        height: sc.height,
        width: sc.width
    },
    card: {
        backgroundColor: 'white', opacity: 0.7, width: sc.width/1.1 ,
        height: sc.height / 12,justifyContent:'center',borderRadius:20,
        alignItems:'center',margin:2
    }
})
export default styles;