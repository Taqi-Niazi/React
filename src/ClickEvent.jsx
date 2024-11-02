function ClickEvent(){
    const clickme = (e)=> e.target.style.display ='none';
    return(
        <>
        <img className="clickImage" onClick={(e)=>clickme(e)} src="https://th.bing.com/th/id/R.3ab623665ab412f386c162bd29f0683a?rik=0IAYiIWHGkVngw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f9%2f97%2fThe_Earth_seen_from_Apollo_17.jpg&ehk=mFWL3V8BFmfgJIyZy1Mkckh5%2f2VhIXWwGNTSvYDeRtQ%3d&risl=1&pid=ImgRaw&r=0"></img>
        </>
    )
}
export default ClickEvent;