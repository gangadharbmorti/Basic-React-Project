import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './components/Form/Login_page';
import Signup from './components/Form/Signup_page';
import Navbar from './components/Navbar/Navbar';
import StudentData from './components/Pages/Student_Data';
import Search from './components/Pages/search';
import Home from './components/Pages/Home';
import NotFound from './components/Pages/NotFound';
// import StudentData from './components/Student_data/Students';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
         
         
          <Route exact path='/' component={Home} />
          <Route  path='/login' component={LoginPage} />
          <Route path='/studentdata' component={StudentData} />
          <Route path='/search' component={Search} />
         
          <Route path='/signup' component={Signup} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      
    </>
  );
};

export default App;
