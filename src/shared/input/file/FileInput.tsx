import React, { ChangeEventHandler, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useExecuteMutation } from '../../../features/task/api/taskApi';
import { Language } from '../../../app/constants';

import './FileInput.scss';

interface FileInputProps {
  topicId?: string;
  taskId?: string;
}

const FileInput: React.FC<FileInputProps> = ({ topicId, taskId }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [executeCode] = useExecuteMutation();
  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSelectedFile(event.target.files?.[0] || null);
  };

  const handleExecute = () => {
    console.log(selectedFile);
    if (selectedFile) {
      executeCode({
        topicId: topicId,
        taskId: taskId,
        sourceCode: selectedFile,
        language: Language.CPP,
      })
        .unwrap()
        .then((response) => {
          console.log(response);
        });
    }
    if (selectedFile) {
      console.log('Executing file:', selectedFile);
    } else {
      console.log('No file selected');
    }
  };
  return (
    <div className="file-upload">
      <TextField
        InputProps={{ disableUnderline: true }}
        className="file-load"
        type="file"
        onChange={handleFileChange}
        variant="standard"
      />
      <Button
        onClick={handleExecute}
        variant="contained"
        color="primary"
        disabled={selectedFile === null}
      >
        Execute
      </Button>
    </div>
  );
};

export default FileInput;
