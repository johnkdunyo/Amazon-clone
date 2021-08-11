import React from 'react'
import './home.css'

import Product from "../Product/Product"



function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="homeimage"
                />

                <div className="home_row">
                    {/** product */}
                    <Product
                        id="1000001"
                        title="The lean start up"
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                        price={29.99}
                        rating={5}
                    />
                    <Product
                        id="1000002"
                        title="Book 2"
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                        price={99.99}
                        rating={3}
                    />
                    <Product
                        id="1000003"
                        title="Book 3"
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        price={49.79}
                        rating={4}
                    />

                </div>

                <div className="home_row">
                    {/** product */}
                    <Product
                        id="1000004"
                        title="Book 2"
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                        price={99.99}
                        rating={3}
                    />
                    <Product
                        id="1000005"
                        title="Book 3"
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        price={49.79}
                        rating={0}
                    />
                    <Product
                        id="1000006"
                        title="Book 3"
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                        price={49.79}
                        rating={4}
                    />
                </div>

                <div className="home_row">
                    {/** product */}
                    <Product
                        id="1000007"
                        title="Book 2"
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                        price={99.99}
                        rating={3}
                    />
                    <Product
                        id="1000008"
                        title="Book 3"
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                        price={49.79}
                        rating={1}
                    />
                </div>

            </div>

        </div>
    )
}

export default Home
