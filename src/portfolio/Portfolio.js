import React, { Component } from 'react';
import './Portfolio.css' ;

class Portfolio extends Component {
    render() {

        return (
            <div>
                <div className="Portfolio-card">
                    <h5 className="Portfolio-card-header">Saal content player</h5>
                    <div className="Portfolio-card-body">
                        <p>Разработка контент плеера</p>
                    </div>
                </div>
                <p>Portfolio some text</p>
                <p>Portfolio some text</p>
                <p>Portfolio some text</p>
                <p>Portfolio some text</p>
                <p>Portfolio some text</p>
            </div>
        );
    }
}

export default Portfolio;
