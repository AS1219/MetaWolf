import { View, Text, Dimensions, Image, StyleSheet } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
    return (
        <>
            <HeaderComponent />
            <View style={{ padding: 40 }}>
                <View style={styles.imgContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require("../../assets/HomePageScreen/ios3x/notify.png")} style={styles.alertImg} />
                        <View style={styles.alertContainer}>
                            <Text style={styles.alertText}>3</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require("../../assets/HomePageScreen/ios3x/weather.png")} style={styles.weatherImg} />
                        <View style={styles.weatherContainer}>
                            <Text style={styles.weatherText}>14°</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 50 }}>
                    <View style={styles.imgContainer}>
                        <View style={styles.container}>
                            <Image
                                source={require("../../assets/HomePageScreen/ios3x/sunEnergy1.png")}
                                style={styles.image}
                            />
                            <View style={styles.overlay}>
                                <Text style={styles.text}>5.90kw</Text>
                                <Text style={styles.subText}>Solar power new</Text>
                            </View>
                        </View>
                        <View style={[styles.container, { width: 105, height: 105 }]}>
                            <Image
                                source={require("../../assets/HomePageScreen/ios3x/chargeEnergy2.png")}
                                style={styles.image}
                            />
                            <View style={[styles.overlay, { marginBottom: 12 }]}>
                                <Text style={styles.text}>85%</Text>
                                <Text style={styles.subText}>Discharging</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.homeImgContainer}>
                        <Image source={require('../../assets/HomePageScreen/ios3x/mainHome.png')} style={styles.homeImg} />
                    </View>
                    <View style={styles.grid}>
                        <View style={[styles.container, { width: 105, height: 105 }]}>
                            <Image
                                source={require("../../assets/HomePageScreen/ios3x/fuelEnergy2.png")}
                                style={styles.image}
                            />
                            <View style={[styles.overlay, { marginBottom: 12 }]}>
                                <Text style={styles.text}>2.90kw</Text>
                                <Text style={styles.subText}>Charging</Text>
                            </View>
                        </View>
                        <View style={[styles.container, { width: 105, height: 105 }]}>
                            <Image
                                source={require("../../assets/HomePageScreen/ios3x/elecEnergy2.png")}
                                style={styles.image}
                            />
                            <View style={[styles.overlay, { marginBottom: 12 }]}>
                                <Text style={styles.text}>1.90kw</Text>
                                <Text style={styles.subText}>Grid</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.statusTxt}>System Status</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 120,
        height: 120,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 25
    },
    text: {
        color: '#f3b217',
        fontSize: 15,
        fontWeight: 'bold'
    },
    subText: {
        color: '#002d4d',
        fontSize: 7,
        fontWeight: 'bold'
    },
    statusTxt: {
        color: '#b6b6b6',
        alignSelf: 'center',
        marginVertical: 40,
        fontSize: 20
    },
    imgContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    alertImg: {
        width: 40,
        height: 60,
        objectFit: 'contain'
    },
    alertContainer: {
        backgroundColor: '#ea4335',
        height: 20,
        width: 20,
        borderRadius: 50,
        alignItems: 'center',
        marginLeft: 5,
        marginTop: -5
    },
    alertText: {
        color: '#fff'
    },
    weatherImg: {
        width: 70,
        height: 60,
        objectFit: 'contain'
    },
    weatherContainer: {
        marginLeft: -15
    },
    weatherText: {
        color: '#002d4d',
        fontSize: 16
    },
    homeImgContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: -60,
        marginBottom: 80
    },
    homeImg: {
        width: 180,
        height: 163,
        objectFit: 'contain'
    },
    grid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
    }
});

export default HomeScreen