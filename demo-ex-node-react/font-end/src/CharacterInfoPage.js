import React from "react";

class CharacterInfoPage extends React.Component {
    state = {
        characterObject: {}
    }

    componentDidMount() {
        fetch(`https://swapi.co/api/people/${this.props.choiceStartNumber}`)
            .then(resp => resp.json()).then(data => {
            this.setState({
                characterObject: data
            })
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.choiceStartNumber != this.props.choiceStartNumber) {
            fetch(`https://swapi.co/api/people/${this.props.choiceStartNumber}`)
                .then(resp => resp.json())
                .then(data => {
                    this.setState({
                        characterObject: data
                    })
            })
        }
    }
    render() {
        return (
            <div>
                {
                    Object.keys(this.state.characterObject).length != 0 ?
                        <div>
                            <h1>{this.state.characterObject.name}</h1>
                        </div>
                        : <h1>Loading</h1>
                }
            </div>
        );
    }
}

export default CharacterInfoPage;
