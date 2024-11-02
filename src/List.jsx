
function List(){
    const fruits = [
         {id :1 ,name :"apple" , calories : 100} , 
         {id :2 ,name :"orange" , calories :99} ,
         {id :3 ,name :"pinapple", calories :101 } ,
         {id :4 ,name :"guava", calories :98 } ,
         {id :5 ,name :"berry" , calories :102} ];

         //fruits.sort((a,b)=>a.name.localeCompare(b.name));
         //fruits.sort((a,b)=>b.name.localeCompare(a.name));
         //fruits.sort((a,b)=> a.calories -  b.calories);
         const lowCalc = fruits.filter(low => low.calories <100);

    const listItems = lowCalc.map(lowCalc => 
    <li key={lowCalc.id}>{lowCalc.name} : &nbsp; <b>{lowCalc.calories}</b></li>)
    return(<ul>{listItems}</ul>);
}
export default List