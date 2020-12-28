import React from "react"

function Header({name,ti,para})
{
    return(
        <div style={{background:"yellow",padding:20,width:500}}>
            <h1>This is a {ti}</h1>
            <h1>My name  is {name}</h1>
            <p>{para}</p>
        </div>
    );

}
export default Header;