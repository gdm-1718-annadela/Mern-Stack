/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';
import CollectionsListPaged from '../../components/collections-list-paged'

class CollectionsPage extends Component {
    state = {
        collection: null,
    }

    loadCollection = () => {
        Api.findAllCollections()
            .then((data) => {
                this.setState(prevState => ({
                    ...prevState,
                    collections: data,
                    }),
                );
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentWillMount() {
        this.loadCollection();
    }



    render() {
        const { collections } = this.state;
        return (
            <React.Fragment>
                <h1 className="hidden">Collection</h1>
                <section className="section section--overview">
                    <div className="section__content">
                        <CollectionsListPaged collections={collections}/>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default (CollectionsPage);