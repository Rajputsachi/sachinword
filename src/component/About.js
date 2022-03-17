import React,{useState} from 'react'

export default function About() {
    const [mystyle,setstyle]=useState({
        color:'white',
        backgroundColor:'black',
    });
    const [btntext,setbtntext]=useState("Enable dark Mode");
    const toggle=()=>{
        if(mystyle.color=='white')
        {
            setstyle({
                color:"black",
               backgroundColor:'white',

            });
            setbtntext("Enable light Mode ");
        }
        else
        {
            setstyle({
                color:'white',
                backgroundColor:'black',
        
            });
            setbtntext("Enable Dark Mode")
        }
    }
  return (
   <>

<div className="container"  style={mystyle}>
<h1>About us</h1>

    <div className="accordion" id="accordionExample" style={mystyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button  style={mystyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       SACHIN TENDULKAR
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div style={mystyle} className="accordion-body">
        <strong>This is the first item's accordion body.</strong> 
        Sachin Tendulkar is one of the most popular cricketers not just in India but across the globe. Nicknamed 'The Little Master' or 'Master Blaster', Tendulkar made his India at a young age of 16 and is credited for many records across all formats of the game. He is the only player to have scored one hundred international tons, first batsman to score a double century in an ODI, the holder of the record for the number of runs in both ODI and Test cricket, and the only player to complete more than 30,000 runs in international cricket. Sachin has been lauded with Arjuna Award in 1994, Khel Ratna in 1997, Padma Shri in 1998 and Padma Vibhushan (2008) honours. He is the only sportsperson to be conferred the Bharat Ratna in 2013. Sachin Tendulkar retired in 2012 at his home ground of Wankhede Stadium in Mumbai. Since retirement, he's had his autobiography published called 'Playing it My Way' and been part of numerous philanthropic efforts.
        </div>
    </div>
  </div>
  <div style={mystyle} className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       ROHIT SHARMA
      </button>
    </h2>
    <div style={mystyle} id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> 
        Rohit Sharma is a right handed batsman who plays for the Indian cricket team and represents Mumbai in the domestic cricket. He has also held leadership role in being the skipper of the Mumbai Indians in the Indian Premier League (IPL). Rohit made his ODI debut at the age of 20 years in 2007 and later in the year he played his first T20I. Rohit had a slow rise to become a permanent fixture in the Indian setup but since 2013, he's maintained his foothold as the opening batsman in limited over contests. Rohit Sharma is most popular for his big scoring at the Eden Gardens in Kolkata where he scored 177 in a Test on debut. The love affair with the Eden Gardens grew when Rohit scored 264 against Sri Lanka which is the highest individual ODI score and in the process he became the first batsman to hit two double tons in ODIs.

      </div>
    </div>
  </div>
  <div style={mystyle} className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      YURAJ SINGH
      </button>
    </h2>
    <div style={mystyle} id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> 
        There are very few better sights in world cricket than witnessing a free-flowing Yuvraj Singh at his best. Undoubtedly, he is right up there among the greatest match-winners in white-ball cricket. Those glorious cover drives, slap cuts through backward point and an effortless wristy drop kick over mid-wicket, all oozed class. His full repertoire was on display during his international debut that came in the 50-overs format against Australia in the 2000 Champions Trophy. It wasn't everyday that a batsman put the formidable Aussie attack to sword during that time and certainly not a rookie. Yuvraj had arrived with a bang and what instantly stood out apart from his batting, was the electric fielding skills. India's fielding was on an average level in that era and hence someone like Yuvraj came as a whiff of fresh air.

      </div>
    </div>
  </div>
</div>
    </div>
    <div className="container">
        <button onClick={toggle} type="button" className="btn btn-primary my-3">{btntext}</button>
    </div>
    </>
  );
}
