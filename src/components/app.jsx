import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {Header} from "./header.jsx";
import {Footer} from './footer.jsx';
import {HomePage} from "./pages/home-page.jsx";
import {TaskList} from '../containers/task-list.js';
import {Customization} from '../containers/customization.js';
import {NotFound} from '../components/pages/not-found.jsx';

export class App extends Component {
    componentDidMount() {
        const {getFakeData} = this.props;
        getFakeData();
    }

    render() {
        const {colorPage, colorFont, positionSidebar} = this.props;
        return (
            <Router>
                <div className={'wrap-app'}>
                    <div className={'wrap-container'}>
                        <Header
                            colorPage={colorPage}
                            colorFont={colorFont}
                            positionSidebar={positionSidebar}
                        />
                        <Switch>
                            <Route exact path='/'>
                                <HomePage
                                    colorPage={colorPage}
                                    colorFont={colorFont}
                                    positionSidebar={positionSidebar}
                                />
                            </Route>
                            <Route path='/task-list'>
                                <TaskList
                                    colorPage={colorPage}
                                    colorFont={colorFont}
                                    positionSidebar={positionSidebar}
                                />
                            </Route>
                            <Route path='/customization' >
                                <Customization
                                    colorPage={colorPage}
                                    colorFont={colorFont}
                                    positionSidebar={positionSidebar}
                                />
                            </Route>
                            <Route component={NotFound}/>
                        </Switch>
                        <Footer
                            colorPage={colorPage}
                            colorFont={colorFont}
                            positionSidebar={positionSidebar}
                        />
                    </div>

                </div>
            </Router>
        )
    }
}