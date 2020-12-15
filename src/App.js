import React from "react";
import './assets/style.css';

//class based component
// class App extends React.Component{
//     render(){
//         return <div>hello react</div>;
//     }
// }


//functional component
//inline styling-> style={{ color: 'green', border: '1px solid blue', backgroundColor:'gray' }}
function App({title}){
return <div className="bg-gray-600 text-white p-5 border">
            {title}
        </div>;
}

export default App;