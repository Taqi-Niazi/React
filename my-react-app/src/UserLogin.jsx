import PropTypes from "prop-types"


function UserLogin(props){
    const loggedin = <h2 className="in">Welcome {props.username}</h2>
    const notlogged = <h2 className="out">Please log in</h2>
    return( props.isLoggedin ? loggedin : notlogged )
}
UserLogin.propTypes ={
    isLoggedin : PropTypes.bool,
    username : PropTypes.string,
}
UserLogin.defaultProps = {
    username : "guest",
}
export default UserLogin;