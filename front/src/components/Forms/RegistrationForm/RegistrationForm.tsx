import block from 'bem-cn'
import { useFormik } from 'formik'
import React, { MouseEventHandler } from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import * as Yup from 'yup'
// import { apiAuthLogin } from '../../../api/auth'
import { appActions } from '../../../store/app/actions'
import { AppState } from '../../../store/app/types'
import { RootState } from '../../../store/types'
import { Auth } from '../../../types/auth'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import { InputType } from '../../Input/InputType'
import './RegistrationForm.css'

interface StateProps {
  loading: boolean;
  errorText: string;
  successRegText: string;
}

interface DispatchProps extends AppState.ActionThunk {}

interface OwnProps {}

type Props = OwnProps & StateProps & DispatchProps

const b = block('reg-form')

const schema: Yup.SchemaOf<Auth.Registration.Params> = Yup.object().shape(({
  login: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required(),
}))

const RegistrationPresenter: React.FC<Props> = ({ loading, errorText, appCreate, successRegText }) => {
  const { errors, values, submitForm, handleChange } = useFormik<Auth.Registration.Params>({
    initialValues: {
      login: '',
      email: '',
      password: '',
      passwordConfirm: ''

    },
    validationSchema: schema,
    onSubmit: async (fields) => {
      await appCreate(fields)
    }
  })

  const handlerSubmit: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    submitForm().catch()
  }

  return (
    <form className={b()}>
      <h2 className={b('title')}>Регистрация</h2>
      <Input
        className={b('field')}
        label={'Имя'}
        name={'login'}
        value={values.login}
        onChange={handleChange}
        error={errors?.login}
        disabled={loading}
      />
       <Input
        className={b('field')}
        label={'mail'}
        name={'mail'}
        value={values.email}
        onChange={handleChange}
        error={errors?.email}
        disabled={loading}
      />
      <Input
        className={b('field')}
        label={'Пароль'}
        name={'password'}
        htmlType={InputType.Password}
        value={values.password}
        onChange={handleChange}
        error={errors?.password}
        disabled={loading}
      />
       <Input
        className={b('field')}
        label={'Подтвердите пароль'}
        name={'confirmPassword'}
        htmlType={InputType.Password}
        value={values.passwordConfirm}
        onChange={handleChange}
        error={errors?.passwordConfirm}
        disabled={loading}
      />
      {!!errorText && <p className={'error'}>{errorText}</p>}
      {!!successRegText && <p className={'success'}>{successRegText}</p>}
      <div>
        {/* <Button text={'Зарегистрироваться'} disabled={loading} /> */}
        <Button text={'Зарегистрироваться'} onClick={handlerSubmit} disabled={loading} />
      </div>
    </form>
  )
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({ app }) => ({
  loading: app.loading,
  errorText: app.errorText,
  successRegText: app.successRegText,
})

const mapDispatchToProp: MapDispatchToProps<DispatchProps, OwnProps> = { ...appActions }

export const RegistrationForm = connect(mapStateToProps, mapDispatchToProp)(RegistrationPresenter)
