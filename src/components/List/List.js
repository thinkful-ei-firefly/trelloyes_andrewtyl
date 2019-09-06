import React from 'react';
import Card from '../Card/Card';
import cuid from 'cuid';
import './List.css';

class List extends React.Component {

    static defaultProps = {
        header: 'Default header',
        cards: [
            {
                id: cuid(),
                title: 'Default Card 1 Title',
                content: 'Default Card 1 content'
            },
            {
                id: cuid(),
                title: 'Default Card 2 Title',
                content: 'Default Card 2 content'
            },
            {
                id: cuid(),
                title: 'Default Card 3 Title',
                content: 'Default Card 3 content'
            },
        ]
    }

    render() {
        const arrayOfCards = this.props.cards.map((card) =>
            <Card key={card.id} className="Card" title={card.title} content={card.content}/>
        )

        return (
            <section className='List'>
                <header className="List-header">
                    <h2>
                        {this.props.header}
                    </h2>
                </header>
                <div className='List-cards'>
                    {arrayOfCards}
                </div>
            </section>
        )
    }
}

export default List