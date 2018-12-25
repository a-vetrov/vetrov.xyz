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
                            Для верстки уроков мной был разработан универсальный XML-формат описания сценария,
                            позволяющий задать последовательность действий, анимаций, вопросов и реакции на различные
                            ответы ученика. Для проигрывания сценариев мной был создан плеер на JavaScript.
                        </p>
                        <p>
                            На данной платформе было создано 20 пилотных уроков, которые проигрываются в нативном Android/iOS
                            приложении с помощью WebView компоненты.
                        </p>
                        <p>
                            При разработке использованы технологии: HTML5, CSS3, jQuery, Pure JS.
                        </p>
                    </details>
                </Card>
                <Card key="Geotool" onDetailsClick={this.handleDetailsClick.bind(this, "Geotool")}
                      isOpen={this.state.openCardId === "Geotool"}  exampleHref="./rm/geotool.html">
                    <header>GeoTool</header>
                    <body><p>Разработка инструмента для геометрических построений.</p></body>
                    <details>
                        <p>
                            Мной был разработан геометрический тул, позволяющий ученику строить геометрические построения.
                            Инструмент позволяет анализировать ответ ученика и проверять его правильность, исправлять
                            неверные элементы при частично-правильном ответе, объяснять ответ в форме обучающей анимации.
                        </p>
                        <p>
                            На основе данного тула было разработано множество интерактивных задач и анимаций теории,
                            которые активно используются в продуктах
                            <a href="https://www.reasoningmind.org/programs/foundations/" target="_blank" rel="noopener noreferrer"> Foundations </a>
                            и <a href="https://www.reasoningmind.org/programs/staar-readiness/" target="_blank" rel="noopener noreferrer"> STAAR Readiness </a>
                            компании ReasoningMind.
                        </p>
                        <p>При разработке использованы технологии: AS3, Adobe Flash.</p>
                    </details>
                </Card>
                <Card key="Ufo" onDetailsClick={this.handleDetailsClick.bind(this, "Ufo")}
                      isOpen={this.state.openCardId === "Ufo"}  exampleHref="./rm/ufo.html">
                    <header>Ufo game</header>
                    <body><p>Разработка интерактивной обучающей игры Ufo.</p></body>
                    <details>
                        <p>
                            Мной была разработана игра, направленная на закрепление/повторение учеником понятия "unknown".
                        </p>
                        <p>
                            При неправильном ответе ученику дается небольшое объяснение. При хорошем проценте правильных
                            ответов в конце игры дается поздравительная анимация.
                        </p>
                        <p>
                            Данная игра с различными вопросами используется в нескольких местах курса
                            <a href="https://www.reasoningmind.org/programs/foundations/" target="_blank" rel="noopener noreferrer"> Foundations </a>
                            компании ReasoningMind.
                        </p>
                        <p>При разработке использованы технологии: AS3, Adobe Flash.</p>
                    </details>
                </Card>
            </div>
        );
    }

    handleDetailsClick = openCardId => this.setState({
        openCardId: this.state.openCardId === openCardId ? null : openCardId
    })
}

export default Portfolio;
