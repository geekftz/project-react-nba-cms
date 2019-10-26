import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

<<<<<<< HEAD
=======
import Team from '@/views/team'
import Player from '@/views/player'
import AllStar from '@/views/allstar'
import HallOfFame from '@/views/halloffame'
import Shoes from '@/views/shoes'
import Uniforms from '@/views/uniforms'


>>>>>>> ce57361f05f7d566cad686248a8fe8de5d9b2364
class Routes extends Component {

  render() {
    return (
<<<<<<< HEAD
      <div>
        <h1>
          Routes
        </h1>
        test master
      </div>
=======
      <Switch>
        <Route exact path="/app/nba/team" component={Team} />
        <Route exact path="/app/nba/player" component={Player} />
        <Route exact path="/app/history/allstar" component={AllStar} />
        <Route exact path="/app/history/halloffame" component={HallOfFame} />
        <Route exact path="/app/equipment/shoes" component={Shoes} />
        <Route exact path="/app/equipment/uniforms" component={Uniforms} />
      </Switch>
>>>>>>> ce57361f05f7d566cad686248a8fe8de5d9b2364
    )
  }
}

export default Routes

