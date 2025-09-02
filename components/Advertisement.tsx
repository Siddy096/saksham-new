import Carousel from 'react-native-reanimated-carousel';
import { Dimensions, View, Image, StyleSheet } from 'react-native';
export default function Advertisement(){
    const width = Dimensions.get('window').width;
    const list = [
        {
            id: 1,
            title: 'First Ad',
            image: require('@/assets/images/skyblue.png'),
        },
        {
            id: 2,
            title: 'Second Ad',
            image: require('@/assets/images/yellow.png'),
        },
        {
            id: 3,
            title: 'Third Ad',
            image: require('@/assets/images/purple.png'),
        },
    ];
    return(
        <View style = {{height: width / 2}}>
            <Carousel
                width={width}
                height={width / 2}
                data = { list }
                autoPlay = {true}
                renderItem={({ item }) => (
                    <View style = {styles.CarouselItem}>
                        <Image style = {styles.img} source={item.image}/>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    CarouselItem: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center', 
        overflow: 'hidden',
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: "cover"
    }
})