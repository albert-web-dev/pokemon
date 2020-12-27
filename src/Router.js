import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

//componentes
import Nav from './componentes/menu/Nav'
import Inicio from './componentes/inicio/Inicio'
import Pokemon from './componentes/pokemon/Pokemon'

function Router(){
    return(
        <BrowserRouter>
            <Nav/>
                <Switch>
                    <Route exact path="/" component={Inicio} />
                    <Route path="/inicio" component={Inicio} />
                    <Route path="/pokemon/:nombre" component={Pokemon} />
                    <Route path='/redirect/:nombre' render={
                            (props)=>{
                                let nombre = props.match.params.nombre;
                                return(
                                    <Redirect to={'/pokemon/'+nombre} />
                                )
                            }
                        } />
                    <Route component={()=>(
                            <div>
                                <h1>Error 404</h1>
                                <span>La página que buscas no existe en esta APP</span>
                            </div>
                        )} />
                </Switch>
        </BrowserRouter>
    )
}

export default Router