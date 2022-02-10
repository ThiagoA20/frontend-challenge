import React, {useEffect, useState} from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { 
    MainView,
    WelcomeUserContainer,
    WelcomeUserText,
    DisplayContainer,
    DisplayText,
    InputsContainer,
    InitialCapitalContainer,
    CapitalText,
    CapitalInputContainer,
    InputLabelContainer,
    InputLabelText,
    InputCapitalContainer,
    InputCapitalText,
    MonthCapitalContainer,
    TimeParametersContainer,
    DropdownMainContainer,
    DropdownText,
    DropdownContainer,
    DropDownLabelContainer,
    DropDownLabelText,
    InputTaxContainer,
    InputCapital,
    TaxTimeSelectContainer,
    TimeSelectContainer,
    DropDownSelectText,
    InputTimeContainer,
    CalculateContainer,
    CalculateButton,
    CalculateText,
    ExitContainer,
    ExitText
} from './style'

const Home = ({navigation}: {navigation: any}) => {
    const [initialAport, setInitialAport] = useState("0.00")
    const [monthAport, setMonthAport] = useState("0.00")
    const [tax, setTax] = useState("0.00")
    const [time, setTime] = useState(0)

    const [taxTime, setTaxTime] = useState("month")
    const [timePassed, setTimePassed] = useState("month")

    const [taxTimeDropdown, setTaxTimeDropdown] = useState(false)
    const [taxTimePassedDropdown, setTimePassedDropdown] = useState(false)

    function formatNumbers(number: string) {
        return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <MainView>

            <WelcomeUserContainer>
                <WelcomeUserText>Bem Vindo, [Username]!</WelcomeUserText>
            </WelcomeUserContainer>

            <DisplayContainer>
                <DisplayText>MONTANTE FINAL</DisplayText>
            </DisplayContainer>

            <InputsContainer>

                <InitialCapitalContainer>
                    <CapitalText>Aporte inicial</CapitalText>
                    <CapitalInputContainer>
                        <InputLabelContainer>
                            <InputLabelText>R$</InputLabelText>
                        </InputLabelContainer>
                        <InputCapitalContainer>
                            <InputCapitalText placeholder="0,00" placeholderTextColor="#E8EBF7" keyboardType={"numeric"} onChangeText={(text) => {
                                // console.log(text)
                                // let difference = parseFloat(parseFloat(text).toFixed(2)) - parseFloat(parseFloat(initialAport).toFixed(2))
                                // setInitialAport(difference.toString())
                            }} value={initialAport}/>
                        </InputCapitalContainer>
                    </CapitalInputContainer>
                </InitialCapitalContainer>

                <MonthCapitalContainer>
                    <CapitalText>Aporte mensal</CapitalText>
                    <CapitalInputContainer>
                        <InputLabelContainer>
                            <InputLabelText>R$</InputLabelText>
                        </InputLabelContainer>
                        <InputCapitalContainer>
                            <InputCapitalText placeholder="0,00" placeholderTextColor="#E8EBF7" keyboardType={"numeric"} onChangeText={(text) => {
                                setMonthAport(parseFloat(text).toFixed(2))
                            }} value={monthAport}/>
                        </InputCapitalContainer>
                    </CapitalInputContainer>
                </MonthCapitalContainer>

                <TimeParametersContainer>

                    <DropdownMainContainer>
                        <DropdownText>Taxa de juros</DropdownText>
                        <DropdownContainer>
                            <DropDownLabelContainer>
                                <DropDownLabelText>%</DropDownLabelText>
                            </DropDownLabelContainer>
                            <InputTaxContainer>
                                <InputCapital placeholder="0,00" placeholderTextColor="#E8EBF7" keyboardType={"numeric"}/>
                            </InputTaxContainer>
                            <TaxTimeSelectContainer>
                                <DropDownSelectText onPress={() => {
                                    console.log("Mês")
                                }}>Mês</DropDownSelectText>
                                <Icon name="down"/>
                            </TaxTimeSelectContainer>
                        </DropdownContainer>
                    </DropdownMainContainer>

                    <DropdownMainContainer>
                        <DropdownText>Tempo em:</DropdownText>
                        <DropdownContainer>
                            <InputTimeContainer>
                                <InputCapital placeholder="0" placeholderTextColor="#E8EBF7" keyboardType={"numeric"}/>
                            </InputTimeContainer>
                            <TimeSelectContainer>
                                <DropDownSelectText onPress={() => {
                                    console.log("Meses")
                                }}>Meses</DropDownSelectText>
                                <Icon name="down"/>
                            </TimeSelectContainer>
                        </DropdownContainer>
                    </DropdownMainContainer>

                </TimeParametersContainer>

            </InputsContainer>

            <CalculateContainer>
                <CalculateButton>
                    <CalculateText onPress={() => {
                        console.log("Calculate")
                    }}>CALCULAR</CalculateText>
                </CalculateButton>
            </CalculateContainer>

            <ExitContainer>
                <TouchableOpacity onPress={() => {
                    console.log("Exit")
                }}>
                    <ExitText>Sair</ExitText>
                </TouchableOpacity>
            </ExitContainer>

        </MainView>
    )
}

export default Home