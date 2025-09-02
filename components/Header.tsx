import { View, TouchableOpacity, Image, Text, TextInput} from 'react-native';
import  styles from './ui/HeaderCSS'

export default function Header(){
    return(
        <View>
            <View style = {styles.container}>
                <TouchableOpacity>
                <Image 
                    source={require("@/assets/images/cart.png")}
                    style = {styles.cartimage}
                />
                </TouchableOpacity>
                <Text style = {styles.locationText}>Location</Text>
            </View>
            <View style = {styles.searchBar}>
                <TextInput 
                    placeholder='Search Services'
                />
            </View>
        </View>
    )
}