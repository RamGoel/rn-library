import { TouchableOpacity, Text, StyleSheet, Dimensions} from "react-native"
import { btnBg, bdRadius, centerElem, btnText } from "../constants/constants"
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

// props-> {
//     onPress: {'Function to Handle onPress'},
//     iconName: {'Button Icon (Icon if this is not null'},
//     iconSize: {'size of Button icon'},
//     text: {'Button Text'},
// }

const CustomButton = (props) => {
    return (
        <TouchableOpacity style={{...styles.loginBtn}} onPress={props.onPress}>
          {  (props.iconName)?<FontAwesome name={props.iconName} color={btnText} size={props.iconSize} />:null}
            <Text style={{
                color: btnText,
                marginHorizontal:5
            }}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    loginBtn: {
        backgroundColor: btnBg,
        width: '90%',
        paddingVertical: windowHeight * 0.02,
        borderRadius: bdRadius*5,
        ...centerElem,
        textAlign: 'center',
        marginVertical: windowHeight * 0.01,
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',

    }
})

export default CustomButton