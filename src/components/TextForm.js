// importing useState hooks  from react 
import React, { useState } from 'react'

export default function TextForm(props) {
    // it means put default value of text as "..." and if we update it this should also get updated
    const [text, setText] = useState("Enter text here");
    // to update value of text use --- > setText("...");
    // text = "New Text";         // wrong way to change the text
    // setText("New Text");         // correct way to change the text

    // function for onclick on button
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }

    const handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared successfully", "success");
    }

    const handleOnChange = (event) => {            // to update the text as user type as we have set value = text
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success");
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
    }

    return (
        <>
            <div className='container my-5'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper-Case</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower-Case</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
                <button className="btn btn-danger mx-2" onClick={handleClear}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                {/* counting no of words and charachters  */}
                <p>{text.split(" ").length} words and {text.length} charachters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
