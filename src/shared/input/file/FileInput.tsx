import React, { ChangeEventHandler, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useExecuteMutation } from '../../../features/task/api/taskApi';
import { Language } from '../../../app/constants';

import './FileInput.scss';
import Icon from '../../icon/Icon';
import { IconType } from '../../icon';
import { useTranslation } from 'react-i18next';

interface FileInputProps {
  topicId?: string;
  taskId?: string;
}

const FileInput: React.FC<FileInputProps> = ({ topicId, taskId }) => {
  const { t } = useTranslation('t', { keyPrefix: 'file-input' });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [nameFile, setNameFile] = useState<string | null>(null);
  const [executeCode] = useExecuteMutation();
  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setNameFile(event.target.files?.[0].name || null);
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
    <div className={`file-upload `}>
      <div className={`file-upload__input ${nameFile ? 'file-upload__input-loaded' : ''}`}>
        <Icon className="file-upload__icon" icon={IconType.Load}></Icon>
        <label htmlFor={'file-input'}>{nameFile ? nameFile : t('input-button')}</label>
        <TextField
          InputProps={{ disableUnderline: true }}
          className={`file-load `}
          type="file"
          onChange={handleFileChange}
          variant="standard"
          id="file-input"
        ></TextField>
      </div>
      <Button
        className="file-upload__button"
        onClick={handleExecute}
        variant="contained"
        color="primary"
        disabled={selectedFile === null}
      >
        {t('load-text')}
      </Button>
    </div>
  );
};

export default FileInput;
