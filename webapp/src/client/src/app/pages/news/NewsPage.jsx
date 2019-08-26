/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';
import MuseaListPaged from '../../components/musea-list-paged';

class NewsPage extends Component {
    state = {
        musea: [],
    };

    loadMusea = () => {
        Api.findAllMusea()
            .then((data) => {
                this.setState(prevState => ({
                    ...prevState,
                    musea: data,
                    }),
                );
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentWillMount() {
        this.loadMusea();
    }


    goToMuseumDetailPage = (id) => {
        this.props.history.push(`/musea/${id}`);
    }

    goToTicketsPage = (id) => {
        this.props.history.push(`/order-ticket/${id}`)
    }



    render() {
        const { pagination, musea } = this.state;
        return (
            <React.Fragment>
                <section className="section section--overview">
                    <div className="section__content">    
                        <MuseaListPaged musea={musea} onReadMore={this.goToMuseumDetailPage} onLoadMore={this.loadMusea} onReadTickets={this.goToTicketsPage}/>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default (NewsPage);