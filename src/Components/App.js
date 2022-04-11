import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Quiz from './Pages/Quiz';
import Result from "./Pages/Result";
import Signup from './Pages/Signup';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={ Home} />
          <Route exact path="/signup" component={ Signup} />
          <Route exact path="/login" component={ Login} />
          <Route exact path="/result" component={ Result} />
          <Route exact path="/quiz" component={ Quiz} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
