import { Form } from '@adonisjs/inertia/react';
import {ArrowLeft} from "@solar-icons/react";

export default function Signup() {
  return (
    <div className='w-4/6 px-20 gap-5 h-screen mx-auto flex flex-col items-center justify-center border border-dotted border-foreground-300 border-y-transparent dark:border-foreground-800 dark:border-y-transparent'>
      <div className='w-full flex items-center justify-start gap-4'>
        <button onClick={()=>window.history.back()} className='border border-dotted border-foreground-300 dark:border-foreground-800 p-2'>
          <ArrowLeft size={16} weight="Linear"/>
        </button>
        <div>
          <h1 className='font-medium text-lg'> Signup </h1>
          <p className='text-sm text-foreground-400'>
            Enter your details below to create your account
          </p>
        </div>
      </div>
      <div className='w-full gap-4'>
        <Form className='gap-5' route='new_account.store'>
          {({ errors }) => (
            <>
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

              <div>
                <button
                  type='submit'
                  className='px-5 py-1 text-sm border border-dotted border-foreground-300 dark:border-foreground-800 flex items-center justify-center gap-2'>
                  Sign up
                </button>
              </div>
            </>
          )}
        </Form>
      </div>
    </div>
  );
}
