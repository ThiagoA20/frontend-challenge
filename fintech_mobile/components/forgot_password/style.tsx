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

export const InstructionsContainer = styled.View`
    width: 80%;
    margin-bottom: 20px;
`

export const InstructionsText = styled.Text`
    color: #E8EBF7;
`

export const InputEmailContainer = styled.View`
    border: 2px solid #E8EBF7;
    border-radius: 10px;
    width: 100%;
    height: 80%;
    margin-top: 5px;
`

export const InputEmail = styled.TextInput`
    width: 100%;
    height: 100%;
    padding: 10px;
    color: #E8EBF7;
    font-size: 15px;
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