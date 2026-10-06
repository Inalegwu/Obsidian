import { Form } from '@adonisjs/inertia/react';
import {ArrowLeft} from "@solar-icons/react";
import { Spinner } from '~/components/atoms';

export default function Signup() {
  return (
    <div className='w-full gap-5 h-screen mx-auto flex'>
      <Form className='gap-5 w-4/6 h-full p-20 bg-white border-r border-r-solid border-r-background-200/60' route='new_account.store'>
          {({ errors ,processing}) => (
          <main>
            <div className="flex my-5 flex-col gap-3 items-start justify-center">
              <button onClick={()=>window.history.back()} className='bg-background-100 rounded-md corner-squircle flex items-center justify-center border border-solid border-background-200 p-2'>
                <ArrowLeft size={16} weight="Linear"/>
              </button>
              <div>
                <h1 className='font-medium text-lg'> Signup </h1>
                <p className='text-sm text-foreground-400'>
                  Enter your details below to create your account
                </p>
              </div>
            </div>
              <div className='field'>
                <label className='label' htmlFor='fullName'>
                  Full name
                </label>
                <input
                  type='text'
                  name='fullName'
                  id='fullName'
                  className='input'
                  data-invalid={errors.fullName ? 'true' : undefined}
                />
                {errors.fullName && (
                  <div className='formError'>{errors.fullName}</div>
                )}
              </div>
              <div className='field'>
                <label className='label' htmlFor='email'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='input'
                  autoComplete='email'
                  data-invalid={errors.email ? 'true' : undefined}
                />
                {errors.email && (
                  <div className='formError'>{errors.email}</div>
                )}
              </div>
              <div className='field'>
                <label className='label' htmlFor='password'>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  className='input'
                  autoComplete='new-password'
                  data-invalid={errors.password ? 'true' : undefined}
                />
                {errors.password && (
                  <div className='formError'>{errors.password}</div>
                )}
              </div>
              <div className='field'>
                <label className='label' htmlFor='passwordConfirmation'>
                  Confirm password
                </label>
                <input
                  type='password'
                  name='passwordConfirmation'
                  id='passwordConfirmation'
                  className='input'
                  autoComplete='new-password'
                  data-invalid={
                    errors.passwordConfirmation ? 'true' : undefined
                  }
                />
                {errors.passwordConfirmation && (
                  <div className='formError'>{errors.passwordConfirmation}</div>
                )}
              </div>
                <button
                  type='submit'
                  className='w-full rounded-md corner-squircle bg-primary-500 p-2 text-xs my-5 flex items-center justify-center uppercase text-white'>
                  {processing?<Spinner size={12}/>:<span>Sign up</span>}
                </button>
            </main>
          )}
        </Form>
      <div className='w-2/6 h-full flex items-center justify-center gap-4'>
       content
      </div>
    </div>
  );
}
