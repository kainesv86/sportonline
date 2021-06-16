import NavBar from "./components/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Trainer from "./pages/trainer";
import Course from "./pages/course";
import BuyCourse from "./pages/buyCourse";
import Watch from "./pages/watch";

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
                                <Route path="/course/*">
                                        <BuyCourse />
                                </Route>
                                <Route path="/course">
                                        <Course />
                                </Route>
                                <Route path="/community">
                                        <h1>Coming Soon</h1>
                                </Route>
                                <Route path="/watch">
                                        <Watch />
                                </Route>
                                <Route path="/">
                                        <Home />
                                </Route>
                        </Switch>
                </div>
        );
}

export default App;
