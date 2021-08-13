import React from 'react';
import ReactDOM from 'react-dom';
// import { Padre } from './components/tarea-memo/Padre';
// import { IntroReducer } from './components/useReducer/IntroReducer';
import { TodoApp } from './components/useReducer/TodoApp';
// import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook';
// import { SimpleForm } from './components/useEffect/SimpleForm';
// import { UseMultipleState } from './components/useExamples/UseMultipleState';
// import { ExampleRef } from './components/useRef/ExampleRef';
// import { CounterWithCustomHooks } from './components/useState/CounterWithCustomHooks';
// import { useFetch } from './Hooks/useFetch';
// import { HooksApp } from './HooksApp';

import './index.css';



ReactDOM.render(
  <>
    <TodoApp />
  </>,
  document.getElementById('root')
);

