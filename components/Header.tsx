import { View, TouchableOpacity, Image, Text, TextInput} from 'react-native';
import  styles from './ui/HeaderCSS'
import { Link } from 'expo-router';

export default function Header(){
    return(
        <View>
            <View style = {styles.container}>
                <Link href={{
                pathname: "/cart"
                }}
                push asChild>
                    <TouchableOpacity>
                    <Image 
                        source={require("@/assets/images/cart.png")}
                        style = {styles.cartimage}
                    />
                    </TouchableOpacity>
                </Link>
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