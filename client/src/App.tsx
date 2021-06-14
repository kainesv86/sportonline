import NavBar from "./components/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Trainer from "./pages/trainer";

import { Route, Switch } from "react-router-dom";

function App() {
        return (
                <div className="flex flex-col h-full min-h-screen">
                        <NavBar />
                        <Switch>
                                <Route path="/login">
                                        <Login />
                                </Route>
                                <Route path="/register">
                                        <Register />
                                </Route>
                                <Route path="/trainer">
                                        <Trainer />
                                </Route>
                                <Route path="/course"></Route>
                                <Route path="/community"></Route>
                                <Route path="/">
                                        <Home />
                                </Route>
                        </Switch>
                </div>
        );
}

export default App;
