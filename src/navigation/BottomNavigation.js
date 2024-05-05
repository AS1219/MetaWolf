import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated, Easing } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import Energy from '../screens/EnergyScreen';
import Analysis from '../screens/AnalysisScreen';
import MenuScreen from '../screens/MenuScreen';
import ProductionScreen from '../screens/ProductionScreen';

const Tab = createBottomTabNavigator();

const MyTabBar = ({ state, descriptors, navigation }) => {
    const [animation] = useState(new Animated.Value(0));

    useEffect(() => {
        animateIcon(state.index);
    }, [state.index]);

    const animateIcon = (index) => {
        Animated.timing(animation, {
            toValue: index,
            duration: 200,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.tabBar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel ?? options.title ?? route.name;
                const isFocused = state.index === index;
                const icon = isFocused ? options.activeIcon : options.inactiveIcon;
                const color = isFocused ? '#002d4d' : '#8E8E93';
                const scale = animation.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [1, 1.8, 1],
                    extrapolate: 'clamp',
                });

                const translateY = animation.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0, -10, 0],
                    extrapolate: 'clamp',
                });

                return (
                    <TouchableOpacity
                        key={index}
                        style={[styles.tab, { opacity: isFocused ? 1 : 0.5 }]}
                        onPress={() => navigation.navigate(route.name)}
                    >
                        <Animated.Image source={icon} style={[styles.icon, { transform: [{ scale }, { translateY }] }]} />
                        <Text style={{ color, fontSize: 12 }}>{label}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const BottomNavigation = () => {
    return (
        <Tab.Navigator initialRouteName="Home" tabBar={(props) => <MyTabBar {...props} />} tabBarOptions={{ showLabel: true, }}>
            <Tab.Screen
                name="Production"
                component={ProductionScreen}
                options={{
                    activeIcon: require('../../assets/HomePageScreen/ios3x/BottomNavigationBar/ios3x/ProductionActive.png'),
                    inactiveIcon: require('../../assets/HomePageScreen/ios3x/BottomNavigationBar/ios3x/ProductionInactive.png'),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Energy"
                component={Energy}
                options={{
                    activeIcon: require('../../assets/HomePageScreen/ios3x/BottomNavigationBar/ios3x/EnergyActive.png'),
                    inactiveIcon: require('../../assets/HomePageScreen/ios3x/BottomNavigationBar/ios3x/EnergyInactive.png'),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    activeIcon: require('../../assets/HomePageScreen/ios3x/BottomNavigationBar/ios3x/HomeActive.png'),
                    inactiveIcon: require('../../assets/HomePageScreen/ios3x/BottomNavigationBar/ios3x/HomeInactive.png'),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Analysis"
                component={Analysis}
                options={{
                    activeIcon: require('../../assets/HomePageScreen/ios3x/BottomNavigationBar/ios3x/analysisActive.png'),
                    inactiveIcon: require('../../assets/HomePageScreen/ios3x/BottomNavigationBar/ios3x/analysisInactive.png'),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Menu"
                component={MenuScreen}
                options={{
                    activeIcon: require('../../assets/HomePageScreen/ios3x/BottomNavigationBar/ios3x/MenuActive.png'),
                    inactiveIcon: require('../../assets/HomePageScreen/ios3x/BottomNavigationBar/ios3x/MenuInactive.png'),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        borderTopWidth: 0,
        borderTopColor: 'transparent',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 25,
        height: 25,
        marginBottom: 5,
        objectFit: 'contain'
    },
    label: {
        fontSize: 12,
    },
});

export default BottomNavigation;
