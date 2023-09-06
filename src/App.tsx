import { Layout } from "./components/layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UsersTable } from "./components/users-table";
import { UserForm } from "./components/user-form";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/">
            <UsersTable />
          </Route>
          <Route path="/add">
            <UserForm />
          </Route>
          <Route path="/edit/:id">
            <UserForm edit={true} />
          </Route>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
