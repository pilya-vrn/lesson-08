import React from 'react'
import { connect, MapStateToProps } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { MainLayout } from '../../layouts/MainLayout/MainLayout'
import { RootState } from '../../store/types'
import { BasePageProps } from '../../types/base'
import { checkAccessToken } from '../../utils'

interface StateProps {
  isAuth: boolean;
}

interface OwnProps {
  exact?: boolean;
  secured?: boolean;
  onlyPublic?: boolean;
  path: string;
  layout?: any;
  component: React.FC<BasePageProps<any>>;
}

type Props = OwnProps & StateProps

const PagePresenter: React.FC<Props> = ({
  secured = false,
  onlyPublic = false,
  exact = false,
  path,
  layout: Layout = MainLayout,
  component: Component,
  isAuth
}) => {
  if (onlyPublic && isAuth) {
    return <Redirect to={'/'} />

  }

  if (secured && !isAuth) {
    return <Redirect to={'/auth'} />
  }

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({ app }) => ({
  isAuth: checkAccessToken(app.accessToken)
})

export const Page = connect(mapStateToProps)(PagePresenter)
