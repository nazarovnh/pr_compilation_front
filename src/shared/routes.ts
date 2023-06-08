const routes = {
  root: {
    index: '/',
    subject: 'subject',
    topic: 'topic',
    task: 'task',
  },
  profile: {
    signUp: 'signUp',
    signIn: 'signIn',
  },
  wildcard: '*',
  id: ':id',
  subjectId: ':subjectId',
  topicId: ':topicId',
  taskId: ':taskId',
};

export const paths = {
  subject: `${routes.root.index}${routes.root.subject}`,
  topic: `${routes.root.index}${routes.root.topic}`,
  task: `${routes.root.index}${routes.root.task}`,
  taskProblem: `${routes.root.subject}/${routes.id}/${routes.root.topic}/${routes.id}/${routes.root.task}/${routes.id}`,

  subjectId: (id: string) => `${paths.subject}/${id}`,
  topicId: (id: string) => `${paths.topic}/${id}`,
  taskId: (id: string) => `${paths.task}/${id}`,
};

export default routes;
