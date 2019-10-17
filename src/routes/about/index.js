import React, {Component, Suspense} from 'react';

class AboutPage extends Component {
    render() {
        return (
            <div className='about-page'>
                <Suspense fallback='loading'>
                    <div>About this project</div>
                </Suspense>
            </div>
        );
    };
}

export default AboutPage;
