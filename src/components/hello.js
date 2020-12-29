import React, { Component } from "react";
import ReactDOM from "react-dom";
import './style/Demo.css'

// funtion based component
const Demo=({parac,color})=>
{
    return(

            <div className="pad">
                <h1>This is a heading and the color is {color}</h1>
                <p>this is a paragraph and the color is {parac}</p>
            </div>

    );
}

// class based Component

// class Demo extends Component {
//   render() {
//     return (
//       <div className="pad">
//         <h1>This is heading and color is {this.props.color}</h1>
//         <p>Hello world</p>
//       </div>
//     );
//   }
// }
export default Demo;
