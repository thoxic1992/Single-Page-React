import React from 'react'
import { Navigation, LandingPage, AboutUs, Offer, Footer, LifeCycle } from '../components'

class HomePage extends React.Component {
    state = { imOnView : true }

    componentDidMount(){

    }

    render(){
        return (
            <div className='page home-page'>
                <Navigation/>
                <LandingPage/>
                <AboutUs/>
                <Offer/>
                <Footer/>
            </div>
        )
    }
}

export default HomePage