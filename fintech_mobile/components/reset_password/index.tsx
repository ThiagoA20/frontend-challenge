import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const ResetPassword = ({navigation}: {navigation: any}) => {
    return (
        <View style={Styles.MainSection}>
            <Text>Reset Password</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Home")
            }}>
                <Text>Back to Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ResetPassword

const Styles = StyleSheet.create({
    MainSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})