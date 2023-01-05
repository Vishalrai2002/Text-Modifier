import React, {useState} from 'react'


export default function TextForm(props) {

  const  handleUpClick=()=>{
        console.log("Upper Case Clicked" +text);
        let newText=text.toUpperCase();
        settext(newText);
        props.showAlert("successfully converted to UpperCase!","success");
    }

    const handleLoClick=()=>{
        console.log("Lower Case Clicked"+text);
        let newText=text.toLowerCase();
        settext(newText);
        props.showAlert("successfully converted to LowerCase!","success");

    }

    const handleOnClear=()=>{
        let newText='';
        settext(newText);
        props.showAlert("Cleared successfully!","success")
    }
    
    const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    }

    const handleOnChange=(event)=>{
        console.log("on changed");
        settext(event.target.value);
    }

    const handleCopy=()=>{
        var text=document.getElementById("my-Box");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success")
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        settext(newText.join(" "));
    }


    const[text,settext]=useState("");

    return (
        <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}}  id="my-Box" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Covert To Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Covert To Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={speak}>Listen Your Text</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-danger mx-1" onClick={handleOnClear}>CLear Text</button>


    </div>
    <div className="conatiner" my-3 style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split("").length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the Text-Box to Preview it here!"}</p>
    </div>
    </>
  )
}
