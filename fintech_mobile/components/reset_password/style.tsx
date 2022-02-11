import styled from 'styled-components/native'

// #F0A202 -> orange
// #E8EBF7 -> white
// #0E1428 -> dark blue
// #5A7D7C -> green gray
// #869D7A -> light green

export const MainScreen = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    background-color: #0E1428;
`

export const MainNavContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    width: 100%;
    height: 10%;
`

export const TitleContainer = styled.View`
    width: 100%;
    height: 7%;
    padding: 30px;
    padding-top: 10px;
`

export const BackArrowButton = styled.TouchableOpacity``

export const TitleText = styled.Text`
    color: #E8EBF7;
    font-size: 30px;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.85);
`
export const InputMainContainer = styled.View`
    width: 100%;
    padding: 30px;
    flex-direction: column;
    justify-content: center;
    height: 40%;
`
export const InputText = styled.Text`
    color: #E8EBF7;
    font-size: 15px;
`
export const InputContainer = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: column;
    width: 100%
    height: 33%;
`

export const InputPasswordContainer = styled.View`
    border: 2px solid #E8EBF7;
    border-radius: 10px;
    width: 100%;
    height: 80%;
    margin-top: 5px;
    flex-direction: row;
`

export const InputPassword = styled.TextInput`
    width: 85%;
    height: 100%;
    color: #E8EBF7;
    padding-left: 10px;
    font-size: 15px;
`

export const InputDecoratorButton = styled.TouchableOpacity`
    width: 15%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

export const SignInContainer = styled.View`
    width: 100%;
    height: 15%;
    justify-content: center;
    align-items: center;
`
export const SignInButton = styled.TouchableOpacity`
    background-color: #F0A202;
    width: 85%;
    height: 50%;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`
export const SignInText = styled.Text`
    color: #E8EBF7;
    font-size: 17px;
    font-weight: bold;
`