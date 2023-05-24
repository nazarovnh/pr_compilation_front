import React, { ChangeEventHandler, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useExecuteMutation } from '../../../features/task/api/taskApi';
import { Language } from '../../../app/constants';

const FileInput = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [executeCode] = useExecuteMutation();
  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSelectedFile(event.target.files?.[0] || null);
  };

  const handleExecute = () => {
    console.log(selectedFile);
    if (selectedFile) {
      executeCode({
        topicId: 'ed6bd2d6-941c-4497-922d-ce68fadd98f5',
        taskId: '643ed0d2-9630-11ec-b909-0242ac120002',
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
    <div>
      <TextField type="file" onChange={handleFileChange} variant="outlined" />
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
