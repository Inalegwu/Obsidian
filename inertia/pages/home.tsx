import { Link } from '@adonisjs/inertia/react';

export default function Home() {
  return (
    <div className='w-4/6 h-screen mx-auto flex flex-col items-center justify-center border border-dotted border-y-transparent border-foreground-300 px-40 py-20'>
      <div className='flex flex-col item-start justify-center'>
        <h1 className='text-4xl font-extrabold'>Obsidian</h1>
        <p className='text-xs text-foreground-600 italic underline underline-offset'>
          a naturally occurring volcanic glass (technically a mineraloid) formed
          by the rapid cooling of silica-rich lava, preventing crystal growth
        </p>
      </div>
      <span className='text-base text-foreground-600 my-4'>
        A polished starter kit to get from zero to 100 immediately with AdonisJS
        and Inertia JS with React to build fullstack NodeJS Applications the
        best way
      </span>
      <div className='flex flex-col items-start w-full justify-center gap-3 my-3'>
        <h2 className='text-lg text-foreground-600'>Auth Already Configured</h2>
        <div className='flex items-center justify-start gap-3'>
          <Link route='new_account.create' className='text-sm underline'>
            Signup
          </Link>
          <Link route='session.create' className='text-sm underline'>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
