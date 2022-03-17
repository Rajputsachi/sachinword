import React,{useState} from 'react'

export default function TextForm(props) {
    const handleupclick=()=>{
        let newtext=text.toUpperCase();
        Settext(newtext);
        
    }
    const handlelowclick=()=>{
      let newtext=text.toLowerCase();
      Settext(newtext);
    }
    const handleClearclick=()=>{
      let newtext="";
      Settext(newtext);
    }
    const RemoveExtraSpace=()=>{
      let newtext=text.split(' ');
      let ans="";
      for(var i=0;i<newtext.length;i++)
      {
        if(newtext[i]==='')
        {
          continue;
        }
        else
        {
          ans+=newtext[i]+" ";
        }
      }
      console.log(ans);
      Settext(ans);
    }

    const handleemailclick=()=>{

      var separateEmailsBy = ", ";
      var email = "<none>"; // if no match, use this
      var emailsArray = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9._-]+)/gi);
      if (emailsArray) {
        email = "";
        for (var i = 0; i < emailsArray.length; i++) {
          if (i!= 0) email += separateEmailsBy;
          email += emailsArray[i];
        }
      }
      Settext(email);
      console.log(email);
  }
  const handleonchange=(e)=>{
        console.log(e);
        Settext(e.target.value);
    }
  const [text,Settext]=useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1 >{props.heading}</h1>
      <div className="form-group ">
          <div className="form-group">
            <textarea className="form-control" id="mytext" rows="8" value={text} onChange={handleonchange}  style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
           </div>
        </div>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleupclick}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={handlelowclick}>Convert to Lowercase</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleemailclick}>Exact Email</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={RemoveExtraSpace}>Remove Space</button>

        <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleClearclick}>Clear Text</button>


    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}  Words and {text.length} Character</p>
      <p>{.08*(text.split(" ").filter((element)=>{return element.length!==0}).length)} Mintute Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Some Texe for Preview"}</p>
    </div>
    </>
  )
}
