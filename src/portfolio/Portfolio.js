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
                <Card key="Saal" onDetailsClick={this.handleDetailsClick.bind(this, "Saal")}
                      isOpen={this.state.openCardId === "Saal"} exampleHref="./saal/topics/topic06/learn/Word%20Problems/">
                    <header>Saal content player</header>
                    <body>
                    Задачей проекта было создание уроков по математике для детей 7 класса в ОАЭ для компании
                    <a href="http://saal.ai/" target="_blank"  rel="noopener noreferrer"> Saal</a>.</body>
                    <details>
                        <p>
                            Для верстки уроков мной был разработан универсальный XML-формат описания сценария, позволяющий задать последовательность действий, анимаций, вопросов и реакции на различные ответы ученика. Для проигрывания сценариев мной был создан плеер на JavaScript.
                        </p>
                        <p>
                            На данной платформе было создано 20 пилотных уроков, которые проигрываются в нативном приложении с помощью WebView компоненты.
                        </p>
                    </details>
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
