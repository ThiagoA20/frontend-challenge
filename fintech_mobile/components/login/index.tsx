import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    MainScreen,
    MainNavContainer,
    ForgotPasswordButton,
    ForgotPasswordText,
    BackArrowButton,
    TitleContainer,
    TitleText,
    InputMainContainer,
    InputText,
    InputContainer,
    InputEmailContainer,
    InputEmail,
    InputPasswordContainer,
    InputPassword,
    InputDecoratorButton,
    SignInContainer,
    SignInButton,
    SignInText,
    LineSeparator,
    AlternativeMethodContainer,
    AlternativeMethodText,
    AlternativesContainer,
    AlternativeButton,
    SignUpContainer,
    SignUpText,
    SignUpButton,
    SignUp
} from './style'


const Login = ({navigation}: {navigation: any}) => {
    return (
        <MainScreen>

            <MainNavContainer>
                <BackArrowButton onPress={() => {
                    navigation.navigate("Register")
                }}>
                    <Icon name="chevron-left" color="#F0A202" size={30}/>
                </BackArrowButton>
                <ForgotPasswordButton onPress={() => {
                    navigation.navigate("ForgotPassword")
                }}>
                    <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                </ForgotPasswordButton>
            </MainNavContainer>

            <TitleContainer>
                <TitleText>Entrar</TitleText>
            </TitleContainer>

            <InputMainContainer>
                
                <InputContainer>
                    <InputText>Email</InputText>
                    <InputEmailContainer>
                        <InputEmail />
                    </InputEmailContainer>
                </InputContainer>
                
                <InputContainer>
                    <InputText>Senha</InputText>
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
                    <SignInText>ENTRAR</SignInText>
                </SignInButton>
            </SignInContainer>

            <LineSeparator />

            <AlternativeMethodContainer>
                <AlternativeMethodText>OU ENTRE COM</AlternativeMethodText>
                <AlternativesContainer>
                    <AlternativeButton>
                        <Icon name="google" size={30}/>
                    </AlternativeButton>
                    <AlternativeButton>
                        <Icon name="github" size={30}/>
                    </AlternativeButton>
                </AlternativesContainer>
            </AlternativeMethodContainer>

            <SignUpContainer>
                <SignUpText>Não tem uma conta ainda?</SignUpText>
                <SignUpButton>
                    <SignUp onPress={() => {
                        navigation.navigate("Register")
                    }}>Cadastre-se</SignUp>
                </SignUpButton>
            </SignUpContainer>

        </MainScreen>
    )
}

export default Login