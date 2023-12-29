import React, {useState} from 'react'
function TextForm(props) {

const handleOnChange=(event)=>{
  setText(event.target.value); 
  }
const handleOnUpperClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleOnLowerClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleOnClearClick=()=>{
    let newText='';
    setText(newText);
  }
  const handleOnCopyClick=()=>{
    let text=document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleOnRemoveSpaceClick=()=>{
    let txt=text.split(/[ ]+/);
    setText(txt.join(" "));
  }
const [text,setText]= useState('');

  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} id="exampleFormControlTextarea1" style={{backgroundColor: props.mode==='light'?'white':'#6B728E', color: props.mode==='light'?'black':'white'}} rows="8" onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleOnUpperClick}>Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleOnLowerClick}>Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleOnClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleOnCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleOnRemoveSpaceClick}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h2>Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes are required to read this</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter text in textbox to get preview here'}</p>
    </div>
    </>
  )
}

export default TextForm