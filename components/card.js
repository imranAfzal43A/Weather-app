import styles from "./style";
import Icon from "./icons";
import { View,Text } from "react-native";
const Card = (props) => {
    return (
        <View style={styles.card}>
            <Text style={styles.simpletext} >{props.title}{props.value}<Icon name={props.icon} /></Text>
        </View>
    )
}
export default Card;