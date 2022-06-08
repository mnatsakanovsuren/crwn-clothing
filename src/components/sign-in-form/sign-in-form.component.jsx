import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';

import {SignInContainer, ButtonContainer} from './sign-in-form.styles';

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // eslint-disable-next-line
      const {user} = await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('User is not found');
          break;
        case 'auth/wrong-password':
          alert('Password is wrong');
          break;
        default:
          console.log(error);
      }
    }

  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  }

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          value={email}
          name="email"
          type="email"
          onChange={handleChange}
        />
        <FormInput
          label="password"
          value={password}
          type="password"
          name="password"
          onChange={handleChange}
        />
        <ButtonContainer>
          <Button buttonType={BUTTON_TYPES_CLASSES.base} type="submit">Sign in</Button>
          <Button buttonType={BUTTON_TYPES_CLASSES.google} type="button" onClick={signInWithGoogle}>Google Sign in</Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;