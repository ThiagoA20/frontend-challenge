import styled from 'styled-components/native'

// #F0A202 -> orange
// #E8EBF7 -> white
// #0E1428 -> dark blue
// #5A7D7C -> green gray
// #869D7A -> light green

export const MainView = styled.View`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    background-color: #0E1428;
`
export const WelcomeUserContainer = styled.View`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const WelcomeUserText = styled.Text`
    color: #E8EBF7;
    font-size: 25px;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.45);
    font-weight: bold;
`
export const DisplayContainer = styled.View`
    width: 100%;
    height: 5%;
    align-items: center;
`
export const DisplayText = styled.Text`
    color: #F0A202;
    font-weight: bold;
    font-size: 15px;
`
export const InputsContainer = styled.View`
    width: 100%;
    height: 40%;
    align-items: center
`
export const InitialCapitalContainer = styled.View`
    width: 80%;
    height: 20%;
    margin-top: 20px;
    flex-direction: column;
`
export const CapitalText = styled.Text`
    color: #E8EBF7;
    font-size: 14px;
    font-weight: bold;
`
export const CapitalInputContainer = styled.View`
    border: 2px solid white;
    margin-top: 5px;
    border-radius: 10px;
    background-color: #F0A202;
    height: 90%;
    flex-direction: row;
`
export const InputLabelContainer = styled.View`
    width: 15%;
    justify-content: center;
    align-items: center;
`
export const InputLabelText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color:  #E8EBF7;
`
export const InputCapitalContainer = styled.View`
    width: 85%
`
export const MonthCapitalContainer = styled.View`
    margin-top: 25px;
    height: 20%;
    width: 80%;
`

export const InputCapitalText = styled.TextInput`
    color: #E8EBF7;
    text-align: right; 
    height: 100%; 
    &:focus {
        outline: none;
        border-color: red;
    }
    padding-right: 10px; 
    font-size: 17px; 
    font-weight: bold;
`

export const TimeParametersContainer = styled.View`
    flex-direction: row;
    width: 85%;
    height: 20%;
    justify-content: space-between
    margin-top: 30px;
`
export const DropdownMainContainer = styled.View`
    width: 45%;
`
export const DropdownText = styled.Text`
    color: #E8EBF7;
    font-weight: bold;
`
export const DropdownContainer = styled.View`
    width: 100%;
    height: 80%;
    margin-top: 5px;
    border-radius: 10px;
    flex-direction: row;
    background-color: #F0A202;
    border: 2px #E8EBF7;
`
export const DropDownLabelContainer = styled.View`
    width: 15%;
    justify-content: center;
    align-items: center;
`
export const DropDownLabelText = styled.Text`
    color: #E8EBF7;
    font-size: 15px;
    font-weight: bold;
`

export const InputCapital = styled.TextInput`
    color: #E8EBF7;
    text-align: right;
    height: 100%;
    &:focus {
        outline: none;
        border-color: red;
    }
    padding-right: 5px;
    font-size: 17px;
    font-weight: bold;
`

export const InputTaxContainer = styled.View`
    width: 50%;
    justify-content: center;
    height: 100%;
`
export const TaxTimeSelectContainer = styled.View`
    width: 35%;
    flex-direction: row;
    border-radius: 5px;
    background-color: #E8EBF7;
    justify-content: center;
    align-items: center;
`
export const DropDownSelectText = styled.Text`
    width: 60%;
    font-size: 14px;
`
export const InputTimeContainer = styled.View`
    width: 50%;
`

export const TimeSelectContainer = styled.View`
    width: 50%;
    flex-direction: row;
    border-radius: 5px;
    background-color: #E8EBF7;
    justify-content: center;
    align-items: center;
`

export const CalculateContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 18%;
`
export const CalculateButton = styled.TouchableOpacity`
    border: 2px #F0A202;
    border-radius: 10px;
    width: 45%;
    height: 45%;
    justify-content: center;
    align-items: center;
`

export const CalculateText = styled.Text`
    color: #E8EBF7;
    font-weight: bold;
    font-size: 17px;
`

export const ExitContainer = styled.View`
    width: 100%;
    height: 17%;
    justify-content: center;
    align-items: center;
`
export const ExitText = styled.Text`
    font-weight: bold;
    font-size: 15px;
    color: #F0A202;
`