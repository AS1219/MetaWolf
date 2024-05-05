import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validateEmail = () => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin = () => {
        if (!email || !password) {
            setError('Please enter email and password');
        } else if (!validateEmail()) {
            setError('Invalid email format');
        } else if (email !== 'user@metawolf.com' || password !== 'Metawolf@123') {
            setError('Invalid email or password');
        } else {
            // Reset error message
            setError('');
            // Navigate to HomeScreen
            navigation.navigate("BottomNavigation");
        }
    };

    return (
        <>
            <StatusBar backgroundColor="#002d4d" />
            <View style={styles.container}>
                <Image source={require('../../assets/LoginScreen/ios3x/Germany.png')} style={styles.germanyImg} />
                <View style={styles.headerTextContainer}>
                    <Text style={styles.txt}>Welcome to <Text style={styles.headerTxt}>Metawolf Solar</Text></Text>
                    <Text style={styles.txt}>let's get started</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <Image source={require('../../assets/LoginScreen/ios3x/logo.png')} style={styles.logo} />
                    <View style={styles.loginContainer}>
                        <TextInput
                            style={styles.txtInput}
                            placeholder="Email"
                            placeholderTextColor="#d2d2d2"
                            keyboardType='email-address'
                            value={email}
                            onChangeText={setEmail}
                        />
                        <TextInput
                            style={[styles.txtInput, { marginTop: 20 }]}
                            placeholder="Password"
                            placeholderTextColor="#d2d2d2"
                            keyboardType='visible-password'
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity>
                            <Text style={styles.text}>Forgot Password ?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleLogin} style={styles.btnContainer}>
                            <Text style={styles.btnText}>Login</Text>
                        </TouchableOpacity>
                        {error ? <Text style={styles.error}>{error}</Text> : null}
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.text}>Don't have access,</Text>
                            <TouchableOpacity><Text style={styles.regText}>register a new account</Text></TouchableOpacity>
                        </View>
                        <Image source={require('../../assets/LoginScreen/ios3x/applelogo.png')} style={styles.appleLogo} />
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#002d4d',
    },
    germanyImg: {
        width: 150,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    headerTextContainer: {
        padding: 20
    },
    txt: {
        fontSize: 18,
        color: '#fff',
    },
    headerTxt: {
        fontSize: 30,
        color: '#f3b217',
        fontWeight: 'bold'
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        // paddingTop: 30,
        paddingHorizontal: 20,
    },
    logo: {
        width: 200,
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    loginContainer: {
        flex: 1,
        alignItems: 'center',
    },
    txtInput: {
        borderBottomWidth: 1,
        borderColor: 'black',
        width: '90%',
        marginBottom: 10,
        fontSize: 16,
        color: '#000',
    },
    btnContainer: {
        backgroundColor: '#002d4d',
        width: 180,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: 30
    },
    btnText: {
        color: '#f3b217',
        fontSize: 18
    },
    regText: {
        color: '#002d4d',
        fontWeight: 'bold'
    },
    text: {
        color: '#d2d2d2'
    },
    appleLogo: {
        width: 40,
        height: 40,
        marginTop: width / 4
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 10,
    },
});

export default LoginScreen;