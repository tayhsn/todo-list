import { PlusCircle } from 'phosphor-react';

export const Input = () => {
   return (
      <form className='w-[46rem] h-[3.375rem] mx-auto flex absolute inset-x-0 top-44 '>
         <input
            required
            placeholder='Adicione uma nova tarefa'
            className='w-[39.875rem] mr-2 p-4 bg-gray-500 border border-gray-700 
            rounded-lg
            placeholder:text-gray-300
            hover:text-gray-100
            hover:border-purpleDark
            transition-colors'
         />
         <button className='flex items-center p-4 rounded-lg bg-blueDark text-sm font-bold hover:bg-blue transition-colors'>
            <p className='pr-1'>Criar</p>
            <PlusCircle size={16} />
         </button>
      </form>
   );
};
