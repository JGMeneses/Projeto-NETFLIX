import React from "react";
import './Header.css';

export default () => {
    return(
        <header className="black">
            <div className="header--logo">
                <a href="/">
                    <img src="https://fontmeme.com/temporary/40c857401397aff6f1b487b67a9bac57.png" alt="logo jottinha"/>

                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="usuario"/>

                </a>
            </div> 
        </header>

    )
}