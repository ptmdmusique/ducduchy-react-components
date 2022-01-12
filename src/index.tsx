import React, { FC } from 'react';
import './components/main/index.scss';
import './components/main/theme.scss';
import { initializeIconList } from './utils/iconInit';

initializeIconList();

export const Thing: FC = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-5/6 m-auto text-2xl text-center text-skin-success uppercase bg-blue-300 bg-opacity-10 shadow-xl rounded-3xl">
      {children || 'Hello World! (❁´◡`❁)'}
    </div>
  );
};

export * from './components';
