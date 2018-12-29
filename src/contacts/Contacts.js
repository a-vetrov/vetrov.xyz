import React, { Component } from 'react';
import facebook from './icons/facebook.png' ;
import linkedin from './icons/linkedin.png' ;
import mail from './icons/mail.png' ;
import skype from './icons/skype.png' ;
import telegram from './icons/telegram.png' ;
import github from './icons/github.png' ;
import './Contacts.css' ;

class Contacts extends Component {

    constructor(props) {
        super(props);
        this.urls = {
            facebook : 'https://www.facebook.com/andrey.vetrov.393',
            github : 'https://github.com/a-vetrov',
            telegram : 'https://t.me/a_vetrov',
            linkedin : 'https://www.linkedin.com/in/andrey-vetrov',
            mail : 'mailto:job@vetrov.xyz'
        }
    }
    render() {
        document.title = "Ветров Андрей. Контактная информация" ;

        return (
            <div>
                <p>Для связи со мной вы можете использовать любой удобный вам способ.</p>
                <p className="Contacts-address-list">
                    <a href={this.urls.mail}>
                        <img src={mail} alt="E-mail"/>
                    </a>
                    <span>
                        E-mail: <a href={this.urls.mail}>job@vetrov.xyz</a>
                    </span>
                </p>
                <p className="Contacts-address-list">
                    <a href={this.urls.telegram} target="_blank" rel="noopener noreferrer">
                        <img src={telegram} alt="Telegram"/>
                    </a>
                    <span>
                        Telegram: @a_vetrov
                    </span>
                </p>
                <p className="Contacts-address-list">
                    <img src={skype} alt="Skype"/>
                    <span>
                        Skype: andrey.vetrov
                    </span>
                </p>
                <p className="Contacts-address-list">
                    <a href={this.urls.facebook} target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook"/>
                    </a>
                    <span>
                         <a href={this.urls.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                    </span>
                </p>
                <p className="Contacts-address-list">
                    <a href={this.urls.linkedin} target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn"/>
                    </a>
                    <span>
                        <a href={this.urls.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </span>
                </p>
                <p className="Contacts-address-list">
                    <a href={this.urls.github} target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="Github"/>
                    </a>
                    <span>
                        <a href={this.urls.github} target="_blank" rel="noopener noreferrer">Github</a>
                    </span>
                </p>
            </div>
        );
    }
}

export default Contacts;
