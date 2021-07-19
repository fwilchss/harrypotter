import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import Card from './Card';

const App = ()=>(
    <Provider store={store}>
        <main>
            <Card />
        </main>
    </Provider>
)

export default App;