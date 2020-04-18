import React from "react"
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import Dashboard from "./Dashboard"
import Faculty from "./Faculty"
import Group from "./Group"
import Students from "./Students"

function Home() {
    return (
        <div className="Home">
            <Router>
                <Switch>
                    <Route exact path='/Dashboard' component={Dashboard}/>
                    <Route exact path='/Faculty' component={Faculty}/>
                    <Route exact path='/Group' component={Group}/>
                    <Route path='/Students' component={Students}/>
                </Switch>

                <div className="header-menu">
                    <div className='headerDashboard'>
                        <Link to='Dashboard'>Dashboard</Link>
                    </div>
                    <div className='headerFaculty'>
                        <Link to='Faculty'>Faculty</Link>
                    </div>
                    <div className='headerGroup'>
                        <Link to='Group'>Group</Link>
                    </div>
                    <div className='headerStudents'>
                        <Link to='Students'>Student</Link>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default Home