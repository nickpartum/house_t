import React from 'react'
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import EmailForm from "./components/EmailForm/EmailForm";
import EmailFormIcon from './assets/img/email-form-icon.png'
import Feature from "./components/Feature/Feature";

import icon1 from './assets/img/icon1.png';
import icon2 from './assets/img/icon2.png';
import icon3 from './assets/img/icon3.png';
import Step from './components/Step/Step';
import ListOrang from "./components/ListOrang/ListOrang";
import TitleWithDecor from './components/TitleWithDecor/TitleWithDecor';


const listArray = [
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',

]

function App() {
    return (
        <div>
            <Header/>
            {/*Section 1*/}
                <div className="section-1 bg-orange with-bg-image-1">
                    <div className="section-1-1 layout">
                        <h1>Sell Your House Instantly</h1>
                        <p>
                            Simply tell us about your house and get a guaranteed <br/>
                            cash offer within 24 hours
                        </p>
                        <EmailForm buttonName={'Get your offer'} placeHolder={'Submit your house details'}/>
                    </div>
                </div>
            {/*Section 2*/}
            <div className='section-2 layout'>
                <TitleWithDecor title={'Key Features'}/>
                <div className='pure-g'>
                    <div className="pure-u-1 pure-u-md-1-3">
                        <Feature icon={icon1} title={'No Viewing or Showing \n to Stragers'}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, laudantium. Adipisci, delectus, dolore error explicabo ipsa itaque iusto modi nihil nobis nostrum odit perferendis porro, soluta ut veritatis voluptas.'}
                        />
                    </div>
                    <div className="pure-u-1 pure-u-md-1-3">
                        <Feature icon={icon2} title={'Save Thousands of Dollars\n in Agent fees'}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, laudantium. Adipisci, delectus, dolore error explicabo ipsa itaque iusto modi nihil nobis nostrum odit perferendis porro, soluta ut veritatis voluptas.'}
                        />
                    </div>
                    <div className="pure-u-1 pure-u-md-1-3">
                        <Feature icon={icon3} title={'No Viewing or Showing \n to Stragers'}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, laudantium. Adipisci, delectus, dolore error explicabo ipsa itaque iusto modi nihil nobis nostrum odit perferendis porro, soluta ut veritatis voluptas.'}
                        />
                    </div>
                </div>
            </div>
            {/*Section 3*/}
            <div className="section-3 with-bg-image-3">
                <div className='section-3-1 layout'>
                    <TitleWithDecor title={'Sell in 3 Easy Steps'}/>
                    <div className='pure-g'>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <Step number={'01'} title={'No Viewing or Showing \n to Stragers'}
                                  description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, laudantium. Adipisci, delectus, dolore error explicabo ipsa itaque iusto modi nihil nobis nostrum odit perferendis porro, soluta ut veritatis voluptas.'}
                            />
                        </div>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <Step number={'02'} title={'Save Thousands of Dollars\n in Agent fees'}
                                  description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, laudantium. Adipisci, delectus, dolore error explicabo ipsa itaque iusto modi nihil nobis nostrum odit perferendis porro, soluta ut veritatis voluptas.'}
                            />
                        </div>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <Step number={'03'} title={'No Viewing or Showing \n to Stragers'}
                                  description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, laudantium. Adipisci, delectus, dolore error explicabo ipsa itaque iusto modi nihil nobis nostrum odit perferendis porro, soluta ut veritatis voluptas.'}
                            />
                        </div>
                    </div>
                </div>
                <div className='section-3-2 layout'>
                    <video controls>
                        <source src="movie.mp4" type="video/mp4"/>
                        <source src="movie.ogg" type="video/ogg"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='section-3-3 layout'>
                    <div className='pure-g'>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <ListOrang list={listArray}/>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <ListOrang title={'Housecart'} list={listArray} withIcon={true}/>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <ListOrang title={'Traditional Home Sales'} list={listArray} withIcon={true}/>
                        </div>
                    </div>
                </div>
            </div>
            {/*Section 4*/}
            <div className="section-4 bg-orange with-bg-image-4">
                <div className="section-4-1 layout">
                    <h1>Subscribe</h1>
                    <p>Sing up for real estate news.</p>
                    <EmailForm placeHolder={'Enter your email address'} buttonName={'Submit'} icon={EmailFormIcon}/>
                </div>
            </div>
            {/*Section 5*/}
            <div className='section-5 with-bg-image-5'>
                <div className='layout pure-g'>
                    <div className="pure-u-1 pure-u-md-5-12">
                        <div className='section-5-1 with-neon'>
                            <h3>Sell Your House Instantly</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Assumenda aut deserunt dolor illum iste officia officiis optio.
                            </p>
                            <form className="pure-form">

                                <input type="text" placeholder="Submit your house details"/>
                                <fieldset className="pure-group">
                                    <button type="submit" className="pure-button">Get your offer</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-7-12">
                        <div className='section-5-2 with-neon'>
                            <h4>Get in Touch</h4>
                            <form className="pure-form">
                                {/*<fieldset className="pure-group">*/}
                                    <input type="text" className="pure-input-1-2" placeholder="Your name"/>
                                    <input type="text" className="pure-input-1-2" placeholder="Your email address"/>
                                    <input type="text" className="pure-input-1-2" placeholder="Your phone number"/>
                                    <input type="text" className="pure-input-1-2" placeholder="Subject"/>
                                    <textarea className="pure-input-1-2"
                                              placeholder="Leave a message"
                                              rows={10}
                                    ></textarea>
                                {/*</fieldset>*/}
                                <fieldset className="pure-group">
                                    <button type="submit" className="pure-button">Submit Now</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;

