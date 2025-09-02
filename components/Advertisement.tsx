import Carousel from 'react-native-reanimated-carousel';
import { Dimensions, View, Image } from 'react-native';
export default function Advertisement(){
    const width = Dimensions.get('window').width;
    const list = [
        {
            id: 1,
            title: 'First Ad',
            image: '@/assets/images/skyblue.png'
        },
        {
            id: 2,
            title: 'Second Ad',
            image: '@/assets/images/yellow.png'
        },
        {
            id: 3,
            title: 'Third Ad',
            image: '@/assets/images/purple.png'
        }
    ]
    return(
        <View style = {{flex: 1}}>
            <Carousel
                width={width}
                height={width / 2}
                data = { list }
                renderItem={({ item }) => (
                    <View>
                        <Image style = />
                    </View>
                )}
            />
        </View>
    )
}