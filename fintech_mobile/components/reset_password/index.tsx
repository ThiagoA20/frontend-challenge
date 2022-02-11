import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    MainScreen,
    MainNavContainer,
    TitleContainer,
    TitleText,
    BackArrowButton,
    InputMainContainer,
    InputText,
    InputContainer,
    InputPasswordContainer,
    InputPassword,
    InputDecoratorButton,
    SignInContainer,
    SignInButton,
    SignInText,
} from './style'

const ResetPassword = ({navigation}: {navigation: any}) => {
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
                <TitleText>Redefinir senha</TitleText>
            </TitleContainer>

            <InputMainContainer>
                
                <InputContainer>
                    <InputText>Nova Senha</InputText>
                    <InputPasswordContainer>
                        <InputPassword />
                        <InputDecoratorButton>
                        {/* eye */}
                            <Icon name="eye-off" color="#F0A202" size={30}/>
                        </InputDecoratorButton>
                    </InputPasswordContainer>
                </InputContainer>

                <InputContainer>
                    <InputText>Confirme a senha</InputText>
                    <InputPasswordContainer>
                        <InputPassword />
                        <InputDecoratorButton>
                        {/* eye */}
                            <Icon name="eye-off" color="#F0A202" size={30}/>
                        </InputDecoratorButton>
                    </InputPasswordContainer>
                </InputContainer>

            </InputMainContainer>

            <SignInContainer>
                <SignInButton>
                    <SignInText>REDEFINIR SENHA</SignInText>
                </SignInButton>
            </SignInContainer>

        </MainScreen>
    )
}

export default ResetPassword