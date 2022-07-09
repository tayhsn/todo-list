import { Logo } from './Logo';

export const Header = () => {
   return (
      <header className='w-full h-[12.5rem] bg-gray-700 flex items-center justify-center text-4xl font-black'>
         <Logo />
         <span className='text-blue pl-3'>to</span>
         <span className='text-purpleDark '>do</span>
      </header>
   );
};
