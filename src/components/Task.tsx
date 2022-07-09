import { Check, Circle, Trash } from 'phosphor-react';
import classnames from 'classnames';
import { Task } from '../data/tasksMock';

export const Tasks = ({ id, task, isCompleted }: Task) => {
   return (
      <div className='w-[46rem] h-[4.5rem] p-4 flex items-start bg-gray-500 rounded-lg border border-gray-400'>
         <button
            className={classnames('cursor-pointer rounded-full', {
               'text-blue hover:text-blueDark': !isCompleted,
               'bg-purple text-gray-100': isCompleted,
            })}
         >
            {isCompleted ? <Check size={20} /> : <Circle size={20} />}
         </button>

         <p
            className={classnames('w-[39.5rem] mx-3 text-sm', {
               'line-through text-gray-300': isCompleted,
            })}
         >
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
