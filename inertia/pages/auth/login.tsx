import { Form } from '@adonisjs/inertia/react';
import { ArrowLeft } from '@solar-icons/react';
import { Spinner } from '~/components/atoms';

export default function Login() {
  return (
    <div className='w-full h-screen mx-auto flex'>
      <Form className='w-4/6 flex flex-col justify-center bg-white border-r border-r-solid border-r-background-200/60 p-10 h-full' route='session.store'>
        {({ errors,processing }) => (
          <>
            <div className="flex flex-col items-start justify-center my-3 gap-2">
              <button onClick={()=>window.history.back()} className='bg-background-100 rounded-md corner-squircle flex items-center justify-center border border-solid border-background-200 p-2'>
                <ArrowLeft size={16} weight="Linear"/>
              </button>
              <div>
                <h1 className='font-medium text-lg'> Login </h1>
                <p className='text-sm text-foreground-400'>
                  Enter your details login to your account
                </p>
              </div>
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
                className='w-full rounded-md corner-squircle bg-primary-500 p-2 text-xs my-5 flex items-center justify-center uppercase text-white'>
                {processing?<Spinner size={12}/>:<span>Login</span>}
              </button>
            </div>
          </>
        )}
      </Form>
      <div className='w-2/6 h-screen flex items-center justify-center'>
       content
      </div>
    </div>
  );
}
