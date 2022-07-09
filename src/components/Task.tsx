import { Trash } from 'phosphor-react';

export const Tasks = () => {
   const isComplete = true;
   return (
      <div className='w-[46rem] h-[4.5rem] p-4 flex items-start bg-gray-500 rounded-lg border border-gray-400'>
         <input
            type='checkbox'
            title='Marcar tarefa como feita'
            className='pt-4 before:rounded-full cursor-pointer border-2 border-blue hover:border-blueDark checked:bg-purple'
         />

         <p className='w-[39.5rem] mx-3 text-[0.875rem]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            iusto ad praesentium voluptate explicabo beatae quis nihil labore!
         </p>

         <button
            title='Deletar tarefa'
            className='text-gray-300 hover:text-danger hover:bg-gray-400 hover:rounded-sm'
         >
            <Trash size={20} />
         </button>
      </div>
   );
};
