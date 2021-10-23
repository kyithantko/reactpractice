import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.less';

const MyLayout = lazy(() => import('comppnents/CountryListHook'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={<div style={{ textAlign: 'center' }}>loading...</div>}
        >
          <Switch>
            <Route path="/" name="CountryListHook" render={() => <CountryListHook />} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
