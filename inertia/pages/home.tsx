import { Link } from '@adonisjs/inertia/react';

export default function Home() {
  return (
    <div className='w-4/6 h-screen mx-auto flex flex-col items-center justify-center border border-dotted border-y-transparent border-foreground-300 dark:border-background-800 dark:border-y-transparent px-40 py-20'>
      <div className='flex flex-col item-start justify-center'>
        <h1 className='text-4xl font-extrabold'>Obsidian</h1>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.google.com/search?q=obsidian+mineral&sca_esv=82e1ade9a4b9d4d3&hl=en&sxsrf=ANbL-n6944Ix11q84QmPM5uFZm-ZxW6-9A%3A1772217296206&ei=0OOhaburDOqQhbIPrsOQgAs&biw=1366&bih=701&ved=0ahUKEwi7057zp_qSAxVqSEEAHa4hBLAQ4dUDCBE&uact=5&oq=obsidian+mineral&gs_lp=Egxnd3Mtd2l6LXNlcnAiEG9ic2lkaWFuIG1pbmVyYWwyCxAAGIAEGIoFGJECMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDILEAAYgAQYigUYkQIyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkjtMFCyAVjHLXACeAGQAQCYAfcCoAHUEaoBBTItOC4xuAEDyAEA-AEBmAILoALZEsICChAAGEcY1gQYsAPCAg0QABiABBiKBRhDGLADwgIOEAAY5AIY1gQYsAPYAQHCAhMQLhiABBiKBRhDGMgDGLAD2AEBwgIZEC4YgAQYigUYQxjHARjRAxjIAxiwA9gBAcICChAAGIAEGIoFGEPCAhAQLhiABBiKBRhDGMcBGNEDwgIKEAAYgAQYFBiHApgDAIgGAZAGEboGBggBEAEYCZIHBzIuMC44LjGgB8IwsgcFMi04LjG4B7kSwgcGMi0xLjEwyAdygAgB&sclient=gws-wiz-serp'
          className='text-xs text-foreground-600 italic underline underline-offset'>
          a naturally occurring volcanic glass (technically a mineraloid) formed
          by the rapid cooling of silica-rich lava, preventing crystal growth
        </a>
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
