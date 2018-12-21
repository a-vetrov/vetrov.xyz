import React, { Component } from 'react';
import Card from './Card' ;
import './Portfolio.css' ;

class Portfolio extends Component {

    constructor(props) {
        super(props) ;

        this.state = {
            openCardId: null
        }
    }

    render() {

        return (
            <div>
                <Card key="Saal" onDetailsClick={this.handleDetailsClick.bind(this, "Saal")} isOpen={this.state.openCardId === "Saal"}>
                    <header>Some job Title</header>
                    <body>Some job description</body>
                    <details>Some job detailed description</details>
                </Card>
                <Card key="Saal2" onDetailsClick={this.handleDetailsClick.bind(this, "Saal2")} isOpen={this.state.openCardId === "Saal2"}>
                    <header>Saal content player</header>
                    <body><p>Разработка контент плеера для проигрыания интерактивных уроков на</p></body>
                    <details>
                        <p>Разработка контент плеера для проигрыания интерактивных уроков на </p>
                        <p>Разработка контент плеера для проигрыания интерактивных уроков на </p>
                        <p>Разработка контент плеера для проигрыания интерактивных уроков на </p>
                    </details>
                </Card>
                <p>Portfolio some text</p>
                <p>Portfolio some text</p>
                <p>Portfolio some text</p>
                <p>Portfolio some text</p>
                <p>Portfolio some text</p>
            </div>
        );
    }

    handleDetailsClick = openCardId => this.setState({
        openCardId: this.state.openCardId === openCardId ? null : openCardId
    })
}

export default Portfolio;
