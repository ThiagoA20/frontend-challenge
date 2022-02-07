import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const Register = ({navigation}: {navigation: any}) => {
    return (
        <View style={Styles.MainSection}>
            <Text>Register</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Home")
            }}>
                <Text>Back to Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register

const Styles = StyleSheet.create({
    MainSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})