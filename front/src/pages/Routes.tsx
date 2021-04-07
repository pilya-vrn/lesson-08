import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import { Page } from '../components/Page/Page'
import { AuthLayout } from '../layouts/AuthLayout/AuthLayout'
import { AboutPage } from './AboutPage/AboutPage'
import { AuthPage } from './AuthPage/AuthPage'
import { CatalogPage } from './CatalogPage/CatalogPage'
import { Error404 } from './Error404/Error404'
import { References } from './References/References/References'
import { Authors } from './References/Authors/Authors'
import { Genres } from './References/Genres/Genres'
import { Publishers } from './References/Publishers/Publishers'
import { Languages } from './References/Languages/Languages'
import { RegistrationPage } from './RegistrationPage/RegistrationPage'
import { RegistrationLayout } from '../layouts/RegistrationLayout/RegistrationLayout'


interface Props {
}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Redirect exact from={'/'} to={'/catalog'} />
      <Page path={'/auth'} layout={AuthLayout} component={AuthPage} />
      <Page path={'/registration'} layout={RegistrationLayout} component={RegistrationPage} />
      <Page secured path={'/catalog'} component={CatalogPage} />
      <Page exact secured path={'/ref'} component={References} />
      <Page secured path={'/ref/authors'} component={Authors} />
      <Page secured path={'/ref/genres'} component={Genres} />
      <Page secured path={'/ref/languages'} component={Languages} />
      <Page secured path={'/ref/publishers'} component={Publishers} />
      <Page secured path={'/about'} component={AboutPage} />
      <Page path={'*'} layout={AuthLayout} component={Error404} />
    </Switch>
  )
}
