import React from 'react';
import ReactDOM from 'react-dom'
import {PrimaryButton, SecondaryButton, TertiaryButton} from "./components/Button"
import {GlobalStyle} from "./utils"


const App = () => (
<div>
    <PrimaryButton>Hello World</PrimaryButton>
    <SecondaryButton>GoodBye World</SecondaryButton>
    <TertiaryButton>What a world</TertiaryButton>
    <GlobalStyle/>
</div>
)

ReactDOM.render(<App />, document.querySelector("#root"))