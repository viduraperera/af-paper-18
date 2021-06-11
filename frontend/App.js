import React from 'react';
import Navbar from "./src/component/navbar/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import CreateSubject from "./src/component/createSubject/CreateSubject";
import CreateCourses from "./src/component/createCourse/CreateCourses";
import Courses from "./src/component/courses/Courses";
import Subjects from "./src/component/subjects/Subjects";

const App = ()=>{
    return(
        <div>
            <Router>
                <Navbar/>
                <section>
                    <Switch>
                        <Route path={"/createSubject"} exact component={CreateSubject}/>
                        <Route path={"/createCourse"} exact component={CreateCourses}/>
                        <Route path={"/:id"} exact component={Subjects}/>
                        <Route path={"/"} exact component={Courses}/>
                    </Switch>
                </section>
            </Router>
        </div>
    )
}

export default App;