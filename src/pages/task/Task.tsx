import React, { useEffect } from 'react';

import CodeEditor from '@uiw/react-textarea-code-editor';

import './Task.scss';
import FileInput from '../../shared/input/file/FileInput';
import { useLazyGetTaskQuery } from '../../features/task/api/taskApi';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { GetTaskResponse } from '../../features/task/model';
import { Typography } from '@mui/material';
import ExampleCard, { ExampleCardType } from '../../shared/card/example/ExampleCard';

const Task = () => {
  const { topicId, taskId } = useParams();
  const [getTaskQuery] = useLazyGetTaskQuery();
  const [taskInfo, setTaskInfo] = useState<GetTaskResponse | undefined>(undefined);
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);

  useEffect(() => {
    if (taskId && !taskInfo) {
      getTaskQuery({ taskId })
        .unwrap()
        .then((response) => setTaskInfo(response));
    }
  }, [taskId, taskInfo]);

  return (
    <div className="task">
      <Typography variant="h2">{`Задание ${taskInfo?.taskOrder}`}</Typography>
      <div>
        <div className="task_task-info task-info">
          <article className="task-info__task-side task-side">
            <section className="task-info__section">
              <h1 className="task-info__section-title">Условие задачи</h1>
              <p className="task-info__section-text">{taskInfo?.taskDescription}</p>
            </section>
            <section className="task-info__section">
              <h1 className="task-info__section-title">Пример входных данных</h1>
              <ExampleCard
                example={taskInfo?.exampleInput}
                type={ExampleCardType.INPUT}
              ></ExampleCard>
            </section>
            <section className="task-info__section">
              <h1 className="task-info__section-title">Пример выходных данных</h1>
              <ExampleCard
                example={taskInfo?.exampleCorrectOutput}
                type={ExampleCardType.OUTPUT}
              ></ExampleCard>
            </section>
            <section className="task-info__section task-info__limit">
              <div className="task-info__memory-limit">
                <h5>Ограничение памяти</h5>
                <p>{`${taskInfo?.memoryLimit} мб`}</p>
              </div>
              <div className="task-info__time-limit">
                <h5>Ограничение времени выполнения</h5>
                <p>{`${taskInfo?.timeLimit} с`}</p>
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
