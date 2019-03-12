import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'
import './index.css'
import {Api} from '../../sdkui/src/API';

/**
 * Render the app.
 */

const root = window.document.createElement('div')
root.id = 'root'

window.document.body.appendChild(root)

const config = {
  apiKey: '9e944678-074f-4469-958f-f18255442a9c',
  sessionId: 'abcd',
  domain: 'https://127.0.0.1:9000',
  name: 'david',
  apptype: 'slate',
}

console.log(Api);

const api = new Api(config);
console.log(api);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component api ={api}/>
    </AppContainer>,
    root
  )
}

render(App)

/**
 * Re-render for hot module replacement in development.
 */

if (module.hot) {
  module.hot.accept('./app', () => render(App))
}
