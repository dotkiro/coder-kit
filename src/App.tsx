import React, { StrictMode, memo, FC } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import router from './router'
import { SnackbarProvider } from 'notistack'
import NavigationBar from './components/NavigationBar'

const App: FC = () => {
  return <StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={8}>

        <NavigationBar/>

        {router}
        
      </SnackbarProvider>
    </Provider>
  </StrictMode>
}

export default memo(App)