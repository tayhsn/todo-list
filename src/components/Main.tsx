import { PlusCircle } from 'phosphor-react';
import {
   ChangeEvent,
   FormEvent,
   InvalidEvent,
   useEffect,
   useState,
} from 'react';
import { tasksMock } from '../data/tasksMock';
import { NoTask } from './NoTask';
import { Tasks } from './Task';

export const Main = () => {
   const [tasks, setTasks] = useState(tasksMock);
   const [newTask, setNewTask] = useState('');
   const [tasksCompleted, setTasksCompleted] = useState(0);

   const handleCreateTask = (event: FormEvent) => {
      event.preventDefault();

      const task = {
         id: (tasks.length + 1).toString(),
         task: newTask,
         isCompleted: false,
      };

      setTasks([...tasks, task]);
      setNewTask('');
   };

   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      event.target.setCustomValidity('');
      setNewTask(event.target.value);
   };

   const handleInputInvalid = (event: InvalidEvent<HTMLInputElement>) => {
      event.target.setCustomValidity('Esse campo é obrigatório');
   };

   const handleDeleteTask = (taskToDelete: string) => {
      const tasksWithoutDeletedOne = tasks.filter(
         (task) => task.id !== taskToDelete
      );

      setTasks(tasksWithoutDeletedOne);
   };

   const handleToggleTaskCompletion = (taskCompleted: string) => {
      let taskMapped = tasks.map((task) =>
         task.id === taskCompleted
            ? { ...task, isCompleted: !task.isCompleted }
            : { ...task }
      );
      setTasks(taskMapped);
   };

   useEffect(() => {
      countTasksCompleted();
   }, [tasks]);

   const countTasksCompleted = () => {
      let numberOfTasksCompleted = 0;
      for (let task of tasks) {
         if (task.isCompleted) {
            numberOfTasksCompleted++;
         }
      }
      setTasksCompleted(numberOfTasksCompleted);
   };

   const isInputTaskEmpty = newTask.length === 0;
   const totalTasks = tasks.length;

   return (
      <main className='w-[46rem] h-[3.375rem] mx-auto absolute inset-x-0 top-44'>
         <form className='flex' onSubmit={handleCreateTask}>
            <input
               required
               placeholder='Adicione uma nova tarefa'
               className='w-[39.875rem] mr-2 p-4 bg-gray-500 border border-gray-700 rounded-lg placeholder:text-gray-300 hover:text-gray-100 hover:border-purpleDark transition-colors'
               onChange={handleInputChange}
               value={newTask}
               onInvalid={handleInputInvalid}
            />
            <button
               className='flex items-center p-4 rounded-lg bg-blueDark text-sm font-bold enabled:hover:bg-blue transition-colors disabled:opacity-70 disabled:cursor-not-allowed'
               type='submit'
               disabled={isInputTaskEmpty}
            >
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
                  {totalTasks}
               </span>
            </div>
            <div className='flex'>
               <p className='text-purple font-bold text-sm mr-2'>Concluídas</p>
               <span className='bg-gray-400 text-gray-200 px-2 py-0.5 rounded-full text-xs flex items-center'>
                  {tasksCompleted} de {totalTasks}
               </span>
            </div>
         </section>
         {totalTasks > 0 ? (
            tasks
               .sort((a, b) => Number(b.id) - Number(a.id))
               .map((task) => (
                  <Tasks
                     key={task.id}
                     id={task.id}
                     task={task.task}
                     isCompleted={task.isCompleted}
                     onDeleteTask={handleDeleteTask}
                     onToggleTaskCompletion={handleToggleTaskCompletion}
                  />
               ))
         ) : (
            <NoTask />
         )}
      </main>
   );
};
