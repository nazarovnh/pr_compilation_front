import React from 'react';

import CodeEditor from '@uiw/react-textarea-code-editor';

import './Task.scss';
import FileInput from '../../shared/input/file/FileInput';
import { useGetTaskQuery } from '../../features/task/api/taskApi';

interface TaskProps {
  topicId: string;
  taskId: string;
}

const Task: React.FC<TaskProps> = ({
  topicId = 'ed6bd2d6-941c-4497-922d-ce68fadd98f5',
  taskId = '643ed0d2-9630-11ec-b909-0242ac120002',
}) => {
  const { data: taskInfo } = useGetTaskQuery({
    topicId,
    taskId,
  });
  const [code, setCode] = React.useState(`function add(a, b) {\n  return a + b;\n}`);
  console.log(taskInfo);
  return (
    <div className="task">
      <h2>{'Задание 1'}</h2>
      <div>
        <div className="task_task-info task-info">
          <article className="task-info__task-sidetask-side task-sidetask-side">
            {/* <BackButton text={`Задание ${1}`} /> */}
            <section className="task-info__section">
              <h1 className="task-info__section-title">Условие задачи</h1>
              <p className="task-info__section-text">{taskInfo?.taskTitle}</p>
            </section>
            <section className="task-info__section">
              <h1 className="task-info__section-title">Пример входных данных</h1>
              <p className="task-info__section-text">
                Пример входных данных на столько строк сколько нужно, пусть всё ползёт вниз
              </p>
            </section>
            <section className="task-info__section">
              <h1 className="task-info__section-title">Пример выходных данных</h1>
              <p className="task-info__section-text">
                Пример входных данных на столько строк сколько нужно, пусть всё ползёт вниз
              </p>
            </section>
            <section className="task-info__section task-info__limit">
              <div className="task-info__memory-limit">
                <h5>Ограничение памяти</h5>
                <p>10мб</p>
              </div>
              <div className="task-info__time-limit">
                <h5>Ограничение времени выполнения</h5>
                <p>15с</p>
              </div>
            </section>
          </article>
          <div className="task__code-editor-wrapper">
            <CodeEditor
              className="task__code-editor"
              value={code}
              language="js"
              onChange={(evn) => setCode(evn.target.value)}
              style={{
                fontSize: 12,
                backgroundColor: '#fff',
                borderRadius: 24,
                alignSelf: 'stretch',
                flexGrow: 1,
                fontFamily:
                  'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
              }}
            />
          </div>
        </div>
        <div className="task task__loader">
          <FileInput topicId={topicId} taskId={taskId} />
        </div>
      </div>
    </div>
  );
};

export default Task;
