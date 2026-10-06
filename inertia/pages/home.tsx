import { Link } from '@adonisjs/inertia/react';

export default function Home() {
  return (
    <div className='w-[85%] h-screen flex flex-col mx-auto p-5 items-start justify-center border-x border-x-solid border-x-foreground-200/30'>
      <div className='absolute z-1 top-0 bg-white border-b border-b-solid border-b-foreground-200/60 left-0 px-5 py-4 flex items-center justify-between w-full'>
        <Link route="home" className="uppercase font-bold">Obsidian</Link>
        <nav className="flex items-center justify-end gap-5">
          <Link route="new_account.create" className='text-xs font-medium transition uppercase text-foreground-500 hover:text-foreground-950 hover:underline'>Create Account</Link>
       <Link route="session.create" className='px-5 py-1.25 text-xs uppercase rounded-md flex items-center justify-center corner-squircle bg-primary-500 text-white'>Login</Link>
        </nav>
      </div>
      <h1 className="text-7xl font-extrabold">Obsidian</h1>
      <div className="w-full h-[35vh] flex mt-20 gap-4 items-center justify-around">
        <div className="flex flex-col items-start justify-between w-2/6 gap-4 h-full bg-white border border-solid border-background-200 p-6 rounded-lg corner-squircle">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg underline underline-offset-2">Auth Configured</h1>
            <span className="text-sm text-foreground-500">Login and account creation flows already implemented along with models and connections. Just swap out for your database configuration</span>

          </div>
          <div className="w-full flex items-center text-xs justify-end gap-4 underline">
            <Link route="session.create">Login</Link>
<Link route="new_account.create">Create Account</Link>
</div>
        </div>
        <div className="flex flex-col items-start justify-between w-2/6 gap-4 h-full bg-white border border-solid border-background-200 p-6 rounded-lg corner-squircle">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg underline underline-offset-2">Themed from the Get Go</h1>
            <span className="text-sm text-foreground-500">Tailwindcss preconfigured with default background, foreground, primary, secondary and accent themes with standard naming that can be easily replaced without breaking anything</span>

          </div>
        </div>
        <div className="flex flex-col items-start justify-between w-2/6 gap-4 h-full bg-white border border-solid border-background-200 p-6 rounded-lg corner-squircle">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg underline underline-offset-2">Monitoring Set up</h1>
            <span className="text-sm text-foreground-500">Prebuilt monitoring panel pre installed thanks to adonisjs-server-stats</span>
          </div>
          <div className="w-full flex items-center text-xs justify-end gap-4 underline">
            <Link href="https://github.com/simulieren/adonisjs-server-stats">
              See Server Stats
            </Link>
        </div>
        </div>
        <div className="flex flex-col items-start justify-between w-2/6 gap-4 h-full bg-white border border-solid border-background-200 p-6 rounded-lg corner-squircle">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg underline underline-offset-2">Cutting Edge</h1>
            <span className="text-sm text-foreground-500">Always up-to-date with the latest technologies to build the future with AdonisJS</span>
          </div>
        </div>
      </div>
   </div>
  );
}
