import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default class PaintContainer extends React.Component {
  render() {
    return (
      <div>
       <Switch> 
         <Route exact path="/color">
           Test
        </Route>
        <Route path="/color/:id" component={(routeInfo) => <div>Test again</div>} />
      </Switch> 
    </div>
    )
  }
}