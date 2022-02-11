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

const Register = ({navigation}: {navigation: any}) => {
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
                <TitleText>Cadastro</TitleText>
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
                    <SignInText>CADASTRAR</SignInText>
                </SignInButton>
            </SignInContainer>

            <LineSeparator />

            <AlternativeMethodContainer>
                <AlternativeMethodText>OU CADASTRE COM</AlternativeMethodText>
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
                <SignUpText>Já possui uma conta?</SignUpText>
                <SignUpButton>
                    <SignUp onPress={() => {
                        navigation.navigate("Login")
                    }}>Login</SignUp>
                </SignUpButton>
            </SignUpContainer>

        </MainScreen>
    )
}

export default Register