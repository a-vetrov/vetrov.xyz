import React, { Component } from 'react';
import './Portfolio.css' ;

class Card extends Component {

    render() {
        const {isOpen, onDetailsClick} = this.props ;

        let childArr = React.Children.toArray(this.props.children) ;
        let cardHeader = null, cardBody = null, cardDetails = null ;

        childArr.forEach((item) => {
            switch(item.type) {
                case 'header' : cardHeader = <h5 className="Portfolio-card-header">{item.props.children}</h5> ; break ;
                case 'body' : cardBody = <div className="Portfolio-card-body"> {item.props.children} </div> ; break ;
                case 'details' : cardDetails = isOpen && <div className="Portfolio-card-details"> {item.props.children} </div> ; break ;
                default :
            }
        }) ;

        return (
            <div className="Portfolio-card">
                {cardHeader}
                {cardBody}
                {cardDetails}
                <div className="Portfolio-card-buttons-container">
                    <button className="Portfolio-card-button" onClick={onDetailsClick}>
                        {isOpen ? 'Свернуть' : 'Подробнее'}
                    </button>
                </div>
            </div>
        ) ;
    }
}

export default Card ;