import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';
import BasePage from '../components/shared/BasePage';

class Portfolio extends React.Component{
    
    static async getInitialProps({ query }) {
        const portfolioId = query.id;
        let portfolio = {};

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${portfolioId}`);
            portfolio = response.data;
        } catch (err) {
            console.error(err);
        }
      return  {portfolio}
    }

    render() {
            const { portfolio } = this.props;
        return(
            <BaseLayout> 
                <BasePage className="about-page">
                    <h1> {portfolio.title}</h1>
                    <p>BODY: {portfolio.body}</p>
                    <p>ID: {portfolio.id}</p>
                </BasePage>
                
            </BaseLayout>
        )
    }
}

export default withRouter(Portfolio);