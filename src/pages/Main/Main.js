import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'
import ChatBot from '../Chat/ChatBot';
import WhatsApp from "../WhatsApp/WhatsApp.js";

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.header} - Porfolio</title>
            </Helmet>
            <WhatsApp />
            <ChatBot />
            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Achievement />
            <Services />
            {/* <Testimonials /> */}
            {/* <Blog /> */}
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
