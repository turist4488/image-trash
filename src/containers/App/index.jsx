import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { load, save } from 'redux-localstorage-simple';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from 'context/rootReducer';

import "styles/reset";
import "styles/main";

import FilesView from 'views/Files';
import EventsView from 'views/Events';
import PhotosView from 'views/Photos'
import LinksView from 'views/Links'
import SharingView from 'views/Sharing'
import MainLayout from 'components/Layout';

const middleware = [reduxLogger, thunk];

const store = createStore(
    rootReducer,
    load(),
    composeWithDevTools(applyMiddleware(...middleware, save()))
);

const App = () => (
    <Provider store={store}>
        <Router>
            <MainLayout>
                <Switch>
                    {/* one of ways to redirect a user from root route*/}
                    <Route
                        exact
                        path="/"
                        render={() => <Redirect to="/photos" />}
                    />

                    <Route path="/files" component={FilesView} />
                    <Route path="/photos" component={PhotosView} />
                    <Route path="/sharing" component={SharingView} />
                    <Route path="/links" component={LinksView} />
                    <Route path="/events" component={EventsView} />
                </Switch>
            </MainLayout>
        </Router>
    </Provider>
)

export default App;