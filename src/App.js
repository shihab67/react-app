import React from "react";
import "./assets/style.css";
import Nav from "./components/Nav";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./utils/routes";

//class based component
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     //State is immutable, means it cannot be changed directly
//     this.state = {
//       title: "hello from class based component",
//       isShowing: false,
//     };
//   }

//   //functions
//   handleClick = () => {
//     this.setState({ isShowing: !this.state.isShowing });
//   };

//   render() {
//     return (
//       <section className="flex justify-center text-center">
//         <div className="w-1/2">
//           <div className="my-4 w3-purple text-lg">
//             <h3>{this.state.title}</h3>
//           </div>
//           <div>
//             <button
//               className="btn btn-outline-primary my-4"
//               onClick={this.handleClick}
//             >
//               Toggle Image
//             </button>
//           </div>
//           {this.state.isShowing ? (
//             <img
//               src="https://images.unsplash.com/photo-1610282356727-c3a6442630de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
//               alt=""
//             />
//           ) : null}
//         </div>
//       </section>
//     );
//   }
// }

//functional component
//inline styling-> style={{ color: 'green', border: '1px solid blue', backgroundColor:'gray' }}
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {routes.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
