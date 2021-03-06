import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>This is from my dashboard component</div>
);
const AddExpensePage = () => (
    <div>expense component</div>
);
const EditExpensePage = () => (
    <div>Edit component</div>
);
const HelpPage = () => (
    <div>Help component</div>
);
const NotFoundPage = () => (
    <div>404 - <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <div>
        <header>
            <h1>Expensify </h1>
        </header>

        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">edit</NavLink>
        <NavLink to="/help" activeClassName="is-active">help</NavLink>
    </div>

);

const routes = (
    <BrowserRouter>
        <div>
            <Header />

            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(
    routes,
    document.getElementById("app")
);
