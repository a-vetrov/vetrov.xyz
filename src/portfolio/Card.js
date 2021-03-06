import React, { Component } from 'react';
import './Portfolio.css' ;

class Card extends Component {

    render() {
        const {isOpen, onDetailsClick, exampleHref, sourceCodeHref, picture} = this.props ;

        let childArr = React.Children.toArray(this.props.children) ;
        let cardHeader = null, cardBody = null, cardDetails = null, altText = "" ;

        childArr.forEach((item) => {
            switch(item.type) {
                case 'header' : cardHeader = <h5 className="Portfolio-card-header">{item.props.children}</h5> ;
                                altText = item.props.children ; break ;
                case 'body' : cardBody = <div className="Portfolio-card-body"> {item.props.children} </div> ; break ;
                case 'details' : cardDetails = isOpen && <div className="Portfolio-card-details"> {item.props.children} </div> ; break ;
                default :
            }
        }) ;

        const exampleButton = exampleHref ? <a className="Portfolio-card-button" href={exampleHref} target="_blank"  rel="noopener noreferrer">Пример</a> : null ;
        const sourceCodeeButton = sourceCodeHref ? <a className="Portfolio-card-button" href={sourceCodeHref} target="_blank"  rel="noopener noreferrer">Source code</a> : null ;

        const cardIconClassName = isOpen ? "Portfolio-card-picture" : "Portfolio-card-picture Portfolio-card-picture_closed" ;
        const cardIcon = picture && <img src={picture} alt={altText} className={cardIconClassName}/> ;

        return (
            <div className="Portfolio-card">
                {cardHeader}
                {cardIcon}
                {cardBody}
                {cardDetails}
                <div className="Portfolio-card-buttons-container">
                    {exampleButton}
                    {sourceCodeeButton}
                    <button className="Portfolio-card-button" onClick={onDetailsClick}>
                        {isOpen ? 'Свернуть' : 'Подробнее'}
                    </button>
                </div>
            </div>
        ) ;
    }
}

export default Card ;