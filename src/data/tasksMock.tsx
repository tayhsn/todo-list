export interface Task {
   id: string;
   task: string;
   isCompleted: boolean;
}

export const tasksMock: Task[] = [
   {
      id: '1',
      task: 'Codar React',
      isCompleted: true,
   },
   {
      id: '2',
      task: 'Estudar Arquitetura',
      isCompleted: false,
   },
];
