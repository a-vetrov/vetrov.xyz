import React, { Component } from 'react';
import './About.css';

class About extends Component {

    constructor(props) {
        super(props) ;
        this.frotendNames = ['JavaScript', 'ES6', 'ES5', 'HTML5', 'CSS3', 'XML', 'JSON', 'AS3'] ;
        this.frameworksNames = ['React', 'jQuery', 'Bootstrap'] ;
        this.toolsNames = ['Webpack', 'Grunt', 'Jira', 'svn', 'git', 'Bitbucket', 'GitHub', 'npm'] ;
        this.softwareNames = ['WebStorm', 'IntelliJ IDEA', 'Adobe Flash', 'Adobe Illustrator', 'Adobe Photoshop',
            'MS Project', 'MS Word', 'MS Excel', 'MS PowerPoint', 'MS Outlook'] ;
        this.languagesNames = ['Python', 'PHP', 'C++', 'Node.js'] ;

        this.iconStyles = {
            "AS3" : "as3", "Bitbucket" : "bitbucket", "Bootstrap" : "bootstrap", "C++" : "cpp",
            "CSS3" : "css3", "ES5" : "es5", "ES6" : "es6", "MS Excel" : "excel", "Adobe Flash" : "flash",
            "git" : "git", "GitHub" : "github", "Grunt" : "grunt", "HTML5" : "html5", "IntelliJ IDEA" : "idea",
            "Adobe Illustrator" : "illustrator", "Jira" : "jira", "jQuery" : "jquery", "JavaScript" : "js",
            "JSON" : "json", "Node.js" : "nodejs", "npm" : "npm", "MS Outlook" : "outlook",
            "Adobe Photoshop" : "photoshop", "PHP" : "php", "MS PowerPoint" : "powerpoint", "MS Project" : "project",
            "Python" : "python", "React" : "react", "svn" : "svn", "Webpack" : "webpack", "WebStorm" : "webstorm",
            "MS Word" : "word", "XML" : "xml"

        } ;
    }

    generateItems(names) {
        return names.map( (s)  => {
            return (<div className="About-item" key={"About-item" + s}>
                    <span className={'About-icon About-icon-' + this.iconStyles[s]} />
                    {s}
                </div> ) ;
        } )
    }

    render() {

        return (
            <div>
                <p>Меня зовут Андрей Ветров. Я занимаюсь frontend-разработкой с 2003 года. Долгое время занимался программированием на ActionScript.
                После падения популярности Adobe Flash, перешел на JavaScript разработку.
                </p>
                <p>Имею опыт работы со следующими технологиями:</p>
                <h2 className="About-h2 ">Frontend</h2>
                <div className="About-row">{this.generateItems(this.frotendNames)}</div>
                <h2 className="About-h2 ">Frameworks</h2>
                <div className="About-row">{this.generateItems(this.frameworksNames)}</div>
                <h2 className="About-h2 ">Инструменты</h2>
                <div className="About-row">{this.generateItems(this.toolsNames)}</div>
                <h2 className="About-h2 ">ПО</h2>
                <div className="About-row">{this.generateItems(this.softwareNames)}</div>
                <p>Знаком с языками программирования:</p>
                <div className="About-row">{this.generateItems(this.languagesNames)}</div>
            </div>
        );
    }
}

export default About;
