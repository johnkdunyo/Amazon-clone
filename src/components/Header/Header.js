import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import './header.css'

import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';


function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    //console.log(user.email)
    return (
        <div className="header">
            <Link to="/" >
                <img className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="logo"
                />
            </Link>
            <div className="header_search">
                <input
                    className="header_searchInput"
                    type="text"
                />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div
                className="header_nav">
                <Link to={!user && "/login"} >
                <div className="header_option" onClick={handleAuthentication}>
                    <span className="header_optionLine1">Hello {user ?  user.email : 'Guest'}</span>

                    <span className="header_optionLine2" >{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>

                <div className="header_option">
                    <span className="header_optionLine1">
                        Returns and
                    </span>
                    <span className="header_optionLine2">
                        Orders
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_optionLine1">
                        Your
                    </span>
                    <span className="header_optionLine2">
                        Prime
                    </span>
                </div>

                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLine2 header_basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>

            </div>

        </div >
    )
}

export default Header
