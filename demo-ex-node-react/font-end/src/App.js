import React from "react";

import './App.css';
import CharacterInfoPage   from './CharacterInfoPage'
// function App() {
//   
//     return (
//         <div className="App">
//             <h2>Hello</h2>
//         </div>
//     );
// }

class App extends React.Component{
    state = {
        characterChoiceNumber: [1,2,3,4,5] ,
        choiceStartNumber: 1,
    }
    handleChoiceChange = (newNumber) => {
        this.setState({
            choiceNumber: newNumber
        })
    }
render() {
    return (
        <div>
            <select onChange={(e) => this.handleChoiceChange(e.target.value)}>
                {
                 this.state.characterChoiceNumber.map(choice => <option key={choice}>{choice}</option>)
                }

            </select>
            <CharacterInfoPage choiceStartNumber={this.state.choiceStartNumber}></CharacterInfoPage>
        </div>
    );
}

}

export default App;
