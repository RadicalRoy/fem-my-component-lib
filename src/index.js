import React,{useState} from 'react';
import ReactDOM from 'react-dom'
import {ThemeProvider} from 'styled-components'
import {PrimaryButton, SecondaryButton, TertiaryButton} from "./components/Button"
import {GlobalStyle, darkTheme, defaultTheme} from "./utils"
import {SignUpModal} from './components'



const App = () => {
    const [showModal, setShowModal] = useState(false);
    const [useDarkTheme, setUseDarkTheme] = useState(false);
    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme: defaultTheme}>
            <button style={{margin: "0 16px 24px", padding: "8px", background: "none"}} onClick={() =>setUseDarkTheme(true)}>Dark Theme</button>
            <button style={{margin: "0 16px 24px", padding: "8px", background: "none"}} onClick={() =>setUseDarkTheme(false)}>Default Theme</button>
            <button style={{margin: "0 16px 24px", padding: "8px", background: "none"}} onClick={() =>setShowModal(!showModal)}>Show Modal</button>
            <div style={{
                background: useDarkTheme ? darkTheme.primaryColor: defaultTheme.primaryColor,
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around"
            }}>

                {/* <PrimaryButton >Hello World</PrimaryButton>
                <SecondaryButton >GoodBye World</SecondaryButton>
                <TertiaryButton >What a world</TertiaryButton>
                
                <PrimaryButton modifiers={["small", "warning"]}>Hello World</PrimaryButton>
                <SecondaryButton modifiers={["large","success", "secondaryButtonSuccess"]}>GoodBye World</SecondaryButton>
                <TertiaryButton modifiers={["large", "error"]}>What a world</TertiaryButton>
                 */}
                 <SignUpModal showModal={showModal} setShowModal={setShowModal} />
            </div>
            <GlobalStyle/>
        </ThemeProvider>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"))