import { Form } from '@adonisjs/inertia/react';
import { ArrowLeft } from '@solar-icons/react';

export default function Login() {
  return (
    <div className='w-4/6 px-20 gap-5 h-screen mx-auto flex flex-col items-center justify-center border border-dotted border-foreground-300 border-y-transparent dark:border-foreground-800 dark:border-y-transparent'>
      <div className='w-full flex items-center justify-start gap-4'>
        <button
          onClick={() => window.history.back()}
          className='border border-dotted border-foreground-300 dark:border-foreground-800 p-2'>
          <ArrowLeft size={16} weight='Linear' />
        </button>
        <div>
          <h1 className='font-medium text-lg'> Login </h1>
          <p className='text-sm text-foreground-400'>
            Enter your details login to your account
          </p>
        </div>
      </div>
      <Form className='w-full' route='session.store'>
        {({ errors }) => (
          <>
            <div className='field'>
              <label className='label' htmlFor='email'>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='input'
                autoComplete='username'
                data-invalid={errors.email ? 'true' : undefined}
              />
              {errors.email && <div className='formError'>{errors.email}</div>}
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
                autoComplete='current-password'
              />
              {errors.password ? (
                <span className='formError'>{errors.password}</span>
              ) : (
                ''
              )}
            </div>
            <div>
              <button
                type='submit'
                className='px-5 py-1 text-sm border border-dotted border-foreground-300 dark:border-foreground-800 flex items-center justify-center gap-2'>
                Login
              </button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
}
