/** Base */
import React from 'react'

/** Styles */
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles'

/** Components */
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  )
}

export default SignInAndSignUpPage
