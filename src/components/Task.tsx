import { Check, Circle, Trash } from 'phosphor-react';
import classnames from 'classnames';

interface TaskProps {
   id: string;
   task: string;
   isCompleted: boolean;
   onDeleteTask: (id: string) => void;
   onToggleTaskCompletion: (id: string) => void;
}

export const Tasks = ({
   id,
   task,
   isCompleted,
   onDeleteTask,
   onToggleTaskCompletion,
}: TaskProps) => {
   return (
      <div className='w-[46rem] h-[4.5rem] p-4 flex items-start bg-gray-500 rounded-lg border border-gray-400'>
         <button
            onClick={() => onToggleTaskCompletion(id)}
            className={classnames('cursor-pointer rounded-full', {
               'text-blue hover:text-blueDark': !isCompleted,
               'bg-purple text-gray-100': isCompleted,
            })}
         >
            {isCompleted ? <Check size={20} /> : <Circle size={20} />}
         </button>

         <p
            className={classnames('w-[39.5rem] mx-3 text-sm break-words', {
               'line-through text-gray-300': isCompleted,
            })}
         >
            {task}
         </p>

         <button
            title='Deletar tarefa'
            className='text-gray-300 hover:text-danger hover:bg-gray-400 hover:rounded-sm'
            onClick={() => onDeleteTask(id)}
         >
            <Trash size={20} />
         </button>
      </div>
   );
};
