import { ClipboardText } from 'phosphor-react';

export const NoTask = () => {
   return (
      <div className='flex flex-col items-center border-t border-gray-400 rounded-t-lg px-6 py-16 text-gray-300'>
         <ClipboardText size={56} color='gray' />
         <strong>Você ainda não tem tarefas cadastradas</strong>
         <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
   );
};
