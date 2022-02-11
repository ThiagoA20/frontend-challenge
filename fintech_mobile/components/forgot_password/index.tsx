import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    MainScreen,
    MainNavContainer,
    BackArrowButton,
    TitleContainer,
    TitleText,
    InputMainContainer,
    InputText,
    InputContainer,
    InstructionsContainer,
    InstructionsText,
    InputEmailContainer,
    InputEmail,
    SignInContainer,
    SignInButton,
    SignInText
} from './style'


const ForgotPassword = ({navigation}: {navigation: any}) => {
    return (
        <MainScreen>

            <MainNavContainer>
                <BackArrowButton onPress={() => {
                    navigation.navigate("Login")
                }}>
                    <Icon name="chevron-left" color="#F0A202" size={30}/>
                </BackArrowButton>
            </MainNavContainer>

            <TitleContainer>
                <TitleText>Esqueceu a senha?</TitleText>
            </TitleContainer>

            <InputMainContainer>

                <InstructionsContainer>
                    <InstructionsText>Confirme o email e nós vamos enviar as<br />instruções para a recuperação.</InstructionsText>
                </InstructionsContainer>
                
                <InputContainer>
                    <InputText>Email</InputText>
                    <InputEmailContainer>
                        <InputEmail />
                    </InputEmailContainer>
                </InputContainer>

            </InputMainContainer>

            <SignInContainer>
                <SignInButton>
                    <SignInText>CONFIRMAR EMAIL</SignInText>
                </SignInButton>
            </SignInContainer>
        </MainScreen>
    )
}

export default ForgotPassword
