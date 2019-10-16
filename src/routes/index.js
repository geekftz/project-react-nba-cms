import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import Team from '@/views/team'
import Player from '@/views/player'
import AllStar from '@/views/allstar'
import HallOfFame from '@/views/halloffame'
import Shoes from '@/views/shoes'
import Uniforms from '@/views/uniforms'


class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/app/nba/team" component={Team} />
        <Route exact path="/app/nba/player" component={Player} />
        <Route exact path="/app/history/allstar" component={AllStar} />
        <Route exact path="/app/history/halloffame" component={HallOfFame} />
        <Route exact path="/app/equipment/shoes" component={Shoes} />
        <Route exact path="/app/equipment/uniforms" component={Uniforms} />
      </Switch>
    )
  }
}

export default Routes

