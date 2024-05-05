import { View, Dimensions, Image, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window');

const HeaderComponent = () => {
    return (
        <>
            <StatusBar backgroundColor="#002d4d" />
            <View style={styles.parentContainer} >
                <View style={styles.childContainer} >
                </View>
                <View style={styles.headerContainer}>
                    <Image source={require("../../assets/HomePageScreen/ios3x/menu.png")} style={styles.menuIcon} />
                    <Image source={require("../../assets/HomePageScreen/ios3x/logo.png")} style={styles.logo} />
                    <Image source={require("../../assets/HomePageScreen/ios3x/share.png")} style={styles.menuIcon} />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    parentContainer: {
        alignSelf: 'center',
        width: width,
        overflow: 'hidden',
        height: width / 2.5
    },
    childContainer: {
        borderRadius: width,
        width: width * 2,
        height: width * 2,
        marginLeft: -(width / 2),
        position: 'absolute',
        bottom: 0,
        overflow: 'hidden',
        backgroundColor: '#002d4d'
    },
    headerContainer: {
        padding: 20,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    menuIcon: {
        height: 20,
        width: 30,
        objectFit: 'contain'
    },
    logo: {
        height: 50,
        width: 160,
        objectFit: 'contain'
    }

})

export default HeaderComponent