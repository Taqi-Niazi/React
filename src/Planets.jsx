
function Planets({showList}){
    const planets = [
        {id: 1, name: "Mercury", size : 4879, Distance :57900000},
        {id: 2, name: "Venus", size : 12104, Distance :108200000},
        {id: 3, name: "Earth", size : 12756, Distance :149600000},
        {id: 4, name: "Mars", size : 6792, Distance :227900000},
        {id: 5, name: "Jupiter", size : 142984, Distance :778300000},
        {id: 6, name: "Saturn", size : 120536, Distance :1427000000},
        {id: 7, name: "Uranus", size : 51118, Distance :2870000000},
        {id: 8, name: "Neptune", size : 49528, Distance :4497000000}
    ]
    planets.sort((a,b)=>a.size - b.size);
    const result = planets.map(planet => <li key={planet.id}>{planet.name} : {planet.size}km</li>)

    planets.sort((a,b)=>a.Distance - b.Distance);
    const result2 = planets.map(planet => <li key={planet.id}>{planet.name} : {planet.Distance}km</li>)

    const Largest = planets.filter(planet => planet.size > 50000);
    const result3 = Largest.map(planet => <li key={planet.id}>{planet.name} : {planet.size }km</li>)
    
    

    return(
    <div>
        <button className="bttn"  onClick={showList} >Show List</button>
        <div className="list1">
        
            <h2>Planet Size</h2> 
            <ol>{result}</ol>
            
        </div>
        <div>
            <h2>Distance from Sun</h2>
            <ol>{result2}</ol>
        </div>
        <div>
            <h2>Largest Planets</h2>
            <ol>{result3}</ol>
        </div>
    </div>);
    }

export default Planets;
//this code is to be pasted below the function app in app.jsx
/*const show =()=>{
    const list1show = document.querySelector(".list1")
    if(list1show.style.display === "none"){
    list1show.style.display = "block";}
    else{
      list1show.style.display = "none";
    }
}*/