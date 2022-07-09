import { PlusCircle } from 'phosphor-react';
import { Tasks } from './Task';

export const Main = () => {
   return (
      <main className='w-[46rem] h-[3.375rem] mx-auto absolute inset-x-0 top-44'>
         <form className='flex'>
            <input
               required
               placeholder='Adicione uma nova tarefa'
               className='w-[39.875rem] mr-2 p-4 bg-gray-500 border border-gray-700 rounded-lg placeholder:text-gray-300 hover:text-gray-100 hover:border-purpleDark transition-colors'
            />
            <button className='flex items-center p-4 rounded-lg bg-blueDark text-sm font-bold hover:bg-blue transition-colors'>
               <p className='pr-1'>Criar</p>
               <PlusCircle size={16} />
            </button>
         </form>

         <section className='mx-auto flex justify-between mt-16 mb-6'>
            <div className='flex'>
               <p className='text-blue font-bold text-sm mr-2'>
                  Tarefas criadas
               </p>
               <span className='bg-gray-400 text-gray-200 px-2 py-0.5 rounded-full text-xs flex items-center'>
                  3
               </span>
            </div>
            <div className='flex'>
               <p className='text-purple font-bold text-sm mr-2'>Concluídas</p>
               <span className='bg-gray-400 text-gray-200 px-2 py-0.5 rounded-full text-xs flex items-center'>
                  2 de 5
               </span>
            </div>
         </section>

         <Tasks />
      </main>
   );
};
