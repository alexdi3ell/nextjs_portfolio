import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout.js';
import BasePage from '../components/shared/BasePage';

class Blogs extends React.Component{

    render() {
        return(
            <BaseLayout> 
                <BasePage>
                    <h1> I'm a Blogs page</h1>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Blogs;