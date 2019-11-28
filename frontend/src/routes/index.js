import React from 'react';
import { Switch} from 'react-router-dom';
import Route from './Route';
import Principal from '../pages/Principal';
import Dashboard from '../pages/Dashboard';
import Cadastro from '../pages/Cadastro';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Principal} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/cadastro"  component={Cadastro} />

            {/* rota de erro para caminho inexistente */}
            <Route path="/" component={()=> <h1>404</h1>} />
        </Switch>
    );
}