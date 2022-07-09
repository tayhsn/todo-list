interface Task {
   id: string | Number;
   task: string;
   isCompleted: boolean;
}

export const tasks: Task[] = [
   {
      id: 1,
      task: 'Codar React',
      isCompleted: true,
   },
   {
      id: 2,
      task: 'Estudar Arquitetura',
      isCompleted: true,
   },
   {
      id: 3,
      task: 'Fazer compras',
      isCompleted: false,
   },
];
