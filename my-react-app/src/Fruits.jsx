import PropTypes  from "prop-types"

function Fruits(props){
 return(
    <div className="fruits">
        <p>
            Name : {props.name}<br/>
            Color : {props.color}<br/>
            Price : Rs.{props.mrp}/Kg <br/>
            Available : {props.Available ? "Yes" : "No"}
        </p>
    </div>
 )
}
Fruits.propTypes ={
    name : PropTypes.string,
    color : PropTypes.string,
    mrp : PropTypes.number,
    Available : PropTypes.bool,
}
Fruits.defaultProps = {
    name : "fruit",
    color : "rainbow",
    mrp : 0,
    Available : false,
}
export default Fruits;