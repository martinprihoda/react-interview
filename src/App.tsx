import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AppLayout } from './AppLayout'
import { DetailPage } from './pages/DetailPage'
import { ListPage } from './pages/ListPage'
import store from './store'

export const App = () => (
  <Provider store={store}>
    <AppLayout>
      <BrowserRouter>
        <Switch>
          <Route path="/detail/:id" component={DetailPage} />
          <Route path="/" component={ListPage} />
        </Switch>
      </BrowserRouter>
    </AppLayout>
  </Provider>
)
