import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { privateRoutes } from '../../utils/routes'

const PrivateRouter = () => {
  return (
    <Switch>
      {privateRoutes.map((item) => (
        <Route
          key={item.path}
          path={item.path}
          component={item.Component}
          exact={true}
        />
      ))}
      <Redirect to={'/main'} />
    </Switch>
  )
}

export default PrivateRouter