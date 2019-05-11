import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/shared/BasePage';

class CV extends React.Component{

    render() {
        return(
            <BaseLayout> 
                <BasePage>
                    <h1> I'm a CV page</h1>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default CV;