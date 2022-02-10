import React, {useState} from 'react'
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
    const [initialAport, setInitialAport] = useState('0')
    const [monthAport, setMonthAport] = useState('0')
    const [tax, setTax] = useState('0')
    const [time, setTime] = useState('0')

    const [taxTime, setTaxTime] = useState('0')
    const [timePassed, setTimePassed] = useState('0')

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
                            <InputCapitalText placeholder="0,00" placeholderTextColor="#E8EBF7"/>
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
                            <InputCapitalText placeholder="0,00" placeholderTextColor="#E8EBF7"/>
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
                                <InputCapital placeholder="0,00" placeholderTextColor="#E8EBF7"/>
                            </InputTaxContainer>
                            <TaxTimeSelectContainer>
                                <DropDownSelectText>Mês</DropDownSelectText>
                                <Icon name="down"/>
                            </TaxTimeSelectContainer>
                        </DropdownContainer>
                    </DropdownMainContainer>

                    <DropdownMainContainer>
                        <DropdownText>Tempo em:</DropdownText>
                        <DropdownContainer>
                            <InputTimeContainer>
                                <InputCapital placeholder="0" placeholderTextColor="#E8EBF7"/>
                            </InputTimeContainer>
                            <TimeSelectContainer>
                                <DropDownSelectText>Meses</DropDownSelectText>
                                <Icon name="down"/>
                            </TimeSelectContainer>
                        </DropdownContainer>
                    </DropdownMainContainer>

                </TimeParametersContainer>

            </InputsContainer>

            <CalculateContainer>
                <CalculateButton>
                    <CalculateText>CALCULAR</CalculateText>
                </CalculateButton>
            </CalculateContainer>

            <ExitContainer>
                <ExitText>Sair</ExitText>
            </ExitContainer>

        </MainView>
    )
}

export default Home