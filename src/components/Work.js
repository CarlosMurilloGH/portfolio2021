import React from 'react';
import "./Work.css";
import form from "../assets/form.png";
import quotable from "../assets/cotizador.png";
import mortgage from "../assets/mortgagecalculator.png"
import framework from "../assets/frameworkblog.jpg";
import attorney from "../assets/attorneymarketing.jpg";
import coffee from "../assets/coffeeshop.jpg";
import cripto from "../assets/criptotracker.jpg";
import todolist from "../assets/todolist.png";

function Work() {
    return (
        <div className="containerWork">

            <div className="frame">
                <div className="frameText">
                    <h1>Todo list + firebase</h1>
                    <p>
                        I made a mobile application where I can save my todo list on firebase and I deployed it 
                        on expo.
                    </p>

                    <div className="tech">
                        <ul>
                            <li>React-Native</li>
                            <li>Firebase</li>
                            <li>React navigation</li>
                            <li>React gesture handler</li>
                        </ul>
                    </div>

                    <div className="containerlinks">
                        <div className="framelinks">
                        <a href="https://github.com/CarlosMurilloGH/todolistfirebaseexpo" 
                        target="_blank" 
                        rel="noreferrer">
                        Github
                    </a>
                        </div>
                        <div className="framelinks">
                        <a href="https://expo.dev/@carlosmurillo/todolistcm" 
                        target="_blank" 
                        rel="noreferrer">
                        Web
                    </a>
                        </div>
                    </div>
                </div>

                <div className="frameImgNative">
                    <img src={todolist} alt="todolist"/>
                </div>
            </div>

            <div className="frame">
                <div className="frameText">
                    <h1>Form to Google Sheet</h1>
                    <p>
                        I made a website where there is info cards about professional and
                        form where if you submit it, it will render and save a card with
                        your info in it.
                    </p>

                    <div className="tech">
                        <ul>
                            <li>React</li>
                            <li>Semantic UI</li>
                            <li>TableTop</li>
                            <li>Sheet.best</li>
                            <li>Google Sheets</li>
                        </ul>
                    </div>

                    <div className="containerlinks">
                        <div className="framelinks">
                        <a href="https://github.com/CarlosMurilloGH/FormToGoogleSheet" 
                        target="_blank" 
                        rel="noreferrer">
                        Github
                    </a>
                        </div>
                        <div className="framelinks">
                        <a href="https://form-to-excel.netlify.app" 
                        target="_blank" 
                        rel="noreferrer">
                        Web
                    </a>
                        </div>
                    </div>
                </div>

                <div className="frameImg">
                    <img src={form} alt="form"/>
                </div>
            </div>


            
            <div className="frame">
                <div className="frameText">
                    <h1>Criptocurrency Tracker</h1>
                    <p>
                        I made a website where we can track the price of criptocurrency, 
                        it's volume, porcentual variation and market cap
                    </p>

                    <div className="tech">
                        <ul>
                            <li>React</li>
                            <li>CSS3</li>
                            <li>Coingecko Api</li>
                        </ul>
                    </div>

                    <div className="containerlinks">
                        <div className="framelinks">
                        <a href="https://github.com/CarlosMurilloGH/cryptocurrencytracker" 
                        target="_blank" 
                        rel="noreferrer">
                        Github
                    </a>
                        </div>
                        <div className="framelinks">
                        <a href="https://crypto-currency-cm.netlify.app" 
                        target="_blank" 
                        rel="noreferrer">
                        Web
                    </a>
                        </div>
                    </div>
                </div>

                <div className="frameImg">
                    <img src={cripto} alt="cripto"/>
                </div>
            </div>

            
            <div className="frame">
                <div className="frameText">
                    <h1>Mortgage Calculator</h1>
                    <p>
                        I made a website where we can calculate our estimate monthly mortage payment.
                    </p>

                    <div className="tech">
                        <ul>
                            <li>React</li>
                            <li>CSS3</li>
                        </ul>
                    </div>

                    <div className="containerlinks">
                        <div className="framelinks">
                        <a href="https://github.com/CarlosMurilloGH/mortgage-calculator" 
                        target="_blank" 
                        rel="noreferrer">
                        Github
                    </a>
                        </div>
                        <div className="framelinks">
                        <a href="https://mortgage-calculator-cm.netlify.app" 
                        target="_blank" 
                        rel="noreferrer">
                        Web
                    </a>
                        </div>
                    </div>
                </div>

                <div className="frameImg">
                    <img src={mortgage} alt="mortgage"/>
                </div>
            </div>

           

            <div className="frame">
                <div className="frameText">
                    <h1>Delivery pricing calculator</h1>
                    <p>
                    I made a delivery pricing calculator where the cost range vary 
                    by the selected weight,type of package and destiny.
                    </p>

                    <div className="tech">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>

                    <div className="containerlinks">
                        <div className="framelinks">
                        <a href="https://github.com/CarlosMurilloGH/deliverypricingcalculator" 
                        target="_blank" 
                        rel="noreferrer">
                        Github
                    </a>
                        </div>
                        <div className="framelinks">
                        <a href="https://transquilla.com/cotizar/" 
                        target="_blank" 
                        rel="noreferrer">
                        Web
                    </a>
                        </div>
                    </div>
                </div>

                <div className="frameImg">
                    <img src={quotable} alt="quotable"/>
                </div>
            </div> 

      
            <div className="figmaTitle">
                <p>Web Designs</p>
            </div>

            <div className="figmaDesigns">
                
                    
                    <div className="desing">
                        <img src={framework} alt="framework"/>
                    </div>

                    <div className="desing">
                        <img src={attorney} alt="attorney"/>
                    </div>

                    <div className="desing">
                        <img src={coffee} alt="coffee"/>
                    </div>
                    
                </div>
        </div>
    )
}

export default Work;
