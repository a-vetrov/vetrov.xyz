import React, { Component } from 'react';
import Card from './Card' ;
import './Portfolio.css' ;
import geotoolImage from './geotool.png' ;
import saalImage from './saal.png' ;
import skeyboardImage from './skeyboard.jpg' ;
import azpuzzleImage from './azpuzzle.png' ;
import ufoImage from './ufo.png' ;
import truckImage from './truck.jpg' ;
import sseImage from './sse.jpg' ;
import currencyImage from './currency.png' ;
import sberImage from './sberbank.png' ;

class Portfolio extends Component {

    constructor(props) {
        super(props) ;

        this.state = {
            openCardId: null
        }
    }

    render() {
        document.title = "Андрей Ветров. Примеры работ" ;

        return (

            <div>
                <p>Вот несколько примеров работ, в которых я выполнял программную реализацию:</p>
                <Card key="Saal" onDetailsClick={this.handleDetailsClick.bind(this, "Saal")}
                      isOpen={this.state.openCardId === "Saal"} exampleHref="./saal/topics/topic06/learn/Word%20Problems/"
                      picture={saalImage}>
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
                            При разработке использованы технологии: ES5 JavaScript, HTML5, CSS3, jQuery.
                        </p>
                    </details>
                </Card>

                <Card key="Currency" onDetailsClick={this.handleDetailsClick.bind(this, "Currency")}
                      isOpen={this.state.openCardId === "Currency"} exampleHref="./currency-calculator/"
                      sourceCodeHref="https://github.com/a-vetrov/currency-calculator" picture={currencyImage}>
                    <header>Валютный калькулятор</header>
                    <body>
                    Онлайн калькулятор валют с загрузкой данных с официального сайта
                    <a href="http://www.cbr.ru/development/SXML/" target="_blank"  rel="noopener noreferrer"> ЦБ РФ</a>.</body>
                    <details>
                        <p>
                            Калькулятор позволяет вычислить рублевую стоимость произвольной суммы выбранной валюты по курсу Центрального Банка РФ.
                        </p>
                        <p>
                            Это небольшая тестовая работа по загрузке xml-данных со стороннего домена и использования их в React-приложении.
                        </p>
                        <p>
                            При разработке использованы технологии: React + Redux, thunks, ES6, Bootstrap.
                        </p>
                    </details>
                </Card>

                <Card key="sberbank" onDetailsClick={this.handleDetailsClick.bind(this, "sberbank")}
                      isOpen={this.state.openCardId === "sberbank"} exampleHref="./sberbank/"
                      sourceCodeHref="https://github.com/a-vetrov/sberbank" picture={sberImage}>
                    <header>Интерактивный список кредитных карт</header>
                    <body>
                         Приложение представляет собой список из сотны случайно сгенерированных на серевере кредитных карт
                         с возможностью поиска по последним 4-м цифрам карты, сортировки по дате c возможностью выбора направления сортировки.
                    </body>
                    <details>
                        <p>
                            В этой небольшой тестовой работе демонстрируется закгрузка данных в формате JSON,
                            отображение их с помощью React-компонент, сортировка и фильтрация данных на клиенте.
                            Применена резиновая верстка под различные разрешения экрана, адаптивная верстка под мобильные устройства.
                        </p>
                        <p>
                            При разработке использованы технологии: React, ES6, CSS3.
                        </p>
                    </details>
                </Card>

                <Card key="speaking-keyboard" onDetailsClick={this.handleDetailsClick.bind(this, "speaking-keyboard")}
                      isOpen={this.state.openCardId === "speaking-keyboard"} exampleHref="./speaking-keyboard/"
                      sourceCodeHref="https://github.com/a-vetrov/speaking-keyboard" picture={skeyboardImage}>
                    <header>Говорящий алфавит</header>
                    <body>
                        Разработка интерактивной игры для маленьких детей, изучающих азбуку.
                    </body>
                    <details>
                        <p>
                            Говорящий алфавит - онлайн игра для изучения букв русского алфавита. Выбирая буквы алфавита,
                            дети прослушивают их названия и смотрят картинки.
                        </p>
                        <p>
                            Игра разрабатывалась для сайта <a href="http://додоша.рф/" target="_blank"  rel="noopener noreferrer"> додоша.рф</a>.
                            Она является JavaScript версией ранее разработанной Flash-игры.
                        </p>
                        <p>
                            При разработке использованы технологии: React, ES6 JavaScript, HTML5, CSS3.
                        </p>
                    </details>
                </Card>

                <Card key="azpuzzle" onDetailsClick={this.handleDetailsClick.bind(this, "azpuzzle")}
                      isOpen={this.state.openCardId === "azpuzzle"} exampleHref="./azpuzzle/"
                      sourceCodeHref="https://github.com/a-vetrov/a-z-puzzle" picture={azpuzzleImage}>
                    <header>Собери слово</header>
                    <body>
                        Разработка интерактивной игры-пазла для маленьких детей, учащихся читать.
                    </body>
                    <details>
                        <p>
                            Собери слово - онлайн игра-пазл на составление слов из букв. Дети, перетаскивая кусочки
                            картинки с буквами, должны правильно составить слово. Буквы и слова озвучиваются.
                        </p>
                        <p>
                            Игра разрабатывалась для сайта <a href="http://додоша.рф/" target="_blank"  rel="noopener noreferrer"> додоша.рф</a>.
                            Она является JavaScript версией ранее разработанной Flash-игры.
                        </p>
                        <p>
                            При разработке использованы технологии: ES6 JavaScript, HTML5, CSS3, jQuery.
                        </p>
                    </details>
                </Card>

                <Card key="Geotool" onDetailsClick={this.handleDetailsClick.bind(this, "Geotool")}
                      isOpen={this.state.openCardId === "Geotool"}  exampleHref="./rm/geotool.html" picture={geotoolImage}>
                    <header>GeoTool</header>
                    <body><p>Разработка инструмента для геометрических построений.</p></body>
                    <details>
                        <p>
                            Мной был разработан модуль, позволяющий ученику создавать геометрические построения.
                            Помимо возможности построения он позволяет анализировать ответ ученика и проверять его правильность, исправлять
                            неверные элементы при частично-правильном ответе, объяснять ответ в форме обучающей анимации.
                        </p>
                        <p>
                            На основе данного инструмента было разработано множество интерактивных задач и анимаций теории,
                            которые активно используются в продуктах
                            <a href="https://www.reasoningmind.org/programs/foundations/" target="_blank" rel="noopener noreferrer"> Foundations </a>
                            и <a href="https://www.reasoningmind.org/programs/staar-readiness/" target="_blank" rel="noopener noreferrer"> STAAR Readiness </a>
                            компании ReasoningMind.
                        </p>
                        <p>При разработке использованы технологии: AS3, Adobe Flash.</p>
                    </details>
                </Card>

                <Card key="sse" onDetailsClick={this.handleDetailsClick.bind(this, "sse")}
                      isOpen={this.state.openCardId === "sse"}  exampleHref="https://youtu.be/cG_ma64wq8c" picture={sseImage}>
                    <header>Smarter Solving content player</header>
                    <body><p>Создание плеера контента для проигрывания интерактивных задач с пошаговым решением.</p></body>
                    <details>
                        <p>
                            Для верстки уроков мной был разработан универсальный XML-формат описания сценария задачи,
                            позволяющий задать структуру задачи, последовательность вопросов, реакцию на правильный и
                            неправильный ответы, условные переходы в зависимости от ответа ученика, анимацию объектов на экране.
                            Для проигрывания сценариев мной был создан плеер данных XML-файлов на ActionScript.
                        </p>
                        <p>
                            С использованием этой платформы было сверстано несколько сотен задач продукта
                            Smarter Solving компании ReasoningMind.
                        </p>
                        <p>При разработке использованы технологии: AS3, Adobe Flash.</p>
                    </details>
                </Card>

                <Card key="Truck" onDetailsClick={this.handleDetailsClick.bind(this, "Truck")}
                      isOpen={this.state.openCardId === "Truck"}  exampleHref="./rm/truck.html" picture={truckImage}>
                    <header>Truck time game</header>
                    <body><p>Разработка интерактивной обучающей игры Truck time.</p></body>
                    <details>
                        <p>
                            Мной была разработана игра, направленная на закрепление/повторение учеником правила проверки
                            деления умножением.
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

                <Card key="Ufo" onDetailsClick={this.handleDetailsClick.bind(this, "Ufo")}
                      isOpen={this.state.openCardId === "Ufo"}  exampleHref="./rm/ufo.html" picture={ufoImage}>
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
