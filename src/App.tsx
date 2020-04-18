import React, { StrictMode, memo, FC } from 'react'
import { HashRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import Desktop from './containers/Desktop'
import { SnackbarProvider } from 'notistack'
import NavigationBar from './components/NavigationBar'

const App: FC = () => {
  return <StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={8}>

        <NavigationBar/>

        <Router>
          <Route path="/desktop" component={Desktop} />
        </Router>
        
      </SnackbarProvider>
    </Provider>
  </StrictMode>
}

export default memo(App)