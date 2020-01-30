import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import App from './App';
import registerServiceWorker from './sw';


connect.send('VKWebAppInit');



registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));