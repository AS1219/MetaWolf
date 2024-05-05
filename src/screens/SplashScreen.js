import { View, Image, StatusBar, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('window');

const SplashScreen = () => {
    const navigation = useNavigation();

    setTimeout(() => {
        navigation.navigate("LoginScreen")
    }, 2000);
    return (
        <>
            <StatusBar backgroundColor="#002d4d" />
            <View style={styles.container}>
                <Image source={require('../../assets/SplashScreen/ios3x/logo.png')} style={styles.logo} />
                <Image source={require('../../assets/SplashScreen/ios3x/Frame.png')} style={styles.img} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#002d4d'
    },
    logo: {
        width: width / 1.5,
        height: 100,
        objectFit: 'contain'
    },
    img: {
        width: width / 1.7,
        height: height / 2,
        objectFit: 'contain'
    }
})

export default SplashScreen