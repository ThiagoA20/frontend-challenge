import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Home = ({navigation}: {navigation: any}) => {
    return (
        <View style={Styles.mainView}>
            <Text>Home</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Login")
            }}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Register")
            }}>
                <Text>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate("ForgotPassword")
            }}>
                <Text>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate("ResetPassword")
            }}>
                <Text>Reset Password</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const Styles = StyleSheet.create({
    mainView: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})