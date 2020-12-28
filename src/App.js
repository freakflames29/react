import logo from './logo.svg';
import './App.css';
// import Header from "./components/header";
import  {Button} from "reactstrap";
import {ToastContainer,toast} from "react-toastify";

function App() {
    // function notify()
    // {
    //       toast("Wow easy!");
    // }
    const notify=()=>{toast.dark("This  is my message")}
  return (
    <div>
        {/*<Header name="sourav Das" ti={"Header"} para={"React is awesome"}/>*/}
        {/*<hr/>*/}
        {/*<h1>This is heading</h1>*/}
        {/*<p>this is paragraph</p>*/}
        {/*<hr/>*/}
        {/*<Header name="Toton" ti={"Footer"} para={"I am learning react"}/>*/}
             <ToastContainer

            position={"bottom-center"}
            type={"dark"}

             />
            <h1>this is a simple heading</h1>
            <Button color="success" outline  size={"lg"} onClick={notify}>button</Button>


    </div>
  );
}

export default App;
