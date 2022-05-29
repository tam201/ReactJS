import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { puclicRouter } from './routes';
import Layout from './components/layout';

function App() {
  return (
    <Router>
        <div className="App">
            <Routes>
                {puclicRouter.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    </Router>
  );
}

export default App;
