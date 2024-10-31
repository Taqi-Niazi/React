import PropTypes from "prop-types";
import { useState } from "react";

function UserLogin() {
    const [isLoggedin, setIsloggedin] = useState(false);
    const [username, setUsername] = useState("Guest");

    function login() {
        setIsloggedin(prevState => !prevState); // Toggle isLoggedin state
    }

    function handleUserInput(event) {
        setUsername(event.target.value); // Update username from input
    }

    return (
        <>

            {isLoggedin ? (
                <h2 className="in">Welcome {username}</h2>
            ) : (
                <h2 className="out">Please log in</h2>
            )}
            <input
               type="text"
               onChange={handleUserInput}
               placeholder="Enter your name"
            />
            <button onClick={login}>
                {isLoggedin ? "Log Out" : "Log In"}
            </button>
        </>
    );
}

UserLogin.propTypes = {
    isLoggedin: PropTypes.bool,
    username: PropTypes.string,
};

export default UserLogin;
