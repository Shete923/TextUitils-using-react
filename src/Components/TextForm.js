import React,{useState} from 'react'

export default function TextForm(props) {

    const handleupclick=()=>{
        console.log("Uppercase was clicked")
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase.","success");
    }
    const handlelowclick=()=>{
        console.log("Lowercase was clicked")
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase.","success");
    }

    const handleCharacterCount=()=>{
        console.log("Counting Characters");
        let count=text.length;
        alert("Chracter length is " + count);
        props.showAlert("Character length is found.","success");
    }

    const handlertoCamelCase = () => {
        console.log("Converting to camelCase");
        let newText = text
          .toLowerCase()
          .replace(/[^a-zA-Z0-9 ]/g, "") // Remove special characters
          .split(/\s+/) // Split by spaces
          .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join(""); // Join words together
        setText(newText);
        props.showAlert("Converted to Camelcase.","success");
      };

      const handlertoSentenceCase = () => {
        console.log("Converting to Sentence Case");
        if (!text || text.trim().length === 0) {
          return "";
        }
    
        
        const sentences = text.match(/[^.!?]+[.!?]*/g);
    
        
        const formattedSentences = sentences.map((sentence) => {
          const trimmedSentence = sentence.trim();
          return (
            trimmedSentence.charAt(0).toUpperCase() +
            trimmedSentence.slice(1).toLowerCase()
          );
        });
    
       
        setText(formattedSentences.join(" "));
        props.showAlert("Converted to Sentensecase.","success");
      };

    const handleonchange=(event)=>{
        console.log("On change")
        setText(event.target.value)
    }

    const handleClear=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text is Cleared","success");
    }

    const handleExtraSpaces=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed","success");
    }


    const[text,setText]=useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={handleonchange} style={{backgroundColor:props.mode==='light'?'white':'#f0f3f4',border:props.mode==='light'?'2px solid grey':'2px solid yellow',color:props.mode==='light'?'black':'white'}} value={text} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-light" onClick={handleupclick} >Convert to UpperCase</button>
        <button className="btn btn-info mx-4" onClick={handlelowclick} >Convert to LowerCase</button>
        <button className="btn btn-primary mx-1.5" onClick={handleCharacterCount} >Count characters</button>
        <button className="btn btn-danger mx-4" onClick={handleClear}>Clear</button>
        <button className="btn btn-success mx-2" onClick={handlertoCamelCase}>CamelCase</button>
        <button className="btn btn-light mx-2" onClick={handlertoSentenceCase}>SentenseCase</button>
        <button className="btn btn-warning mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        
    </div>
    <div className="container my-4" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>Your Text Summary</h1>
        <p>{(text.split(" ").length)-1} words and {text.length} characters .</p>
        <p>Counting done in {text.length>0?0.008 * (text.split(" ").length):'0'} minutes</p>
        <h2> Preview</h2>
        <p>{text.length>0?text:'Enter text in above textarea to display preview'}</p>
    </div>
    </>
  )
}
