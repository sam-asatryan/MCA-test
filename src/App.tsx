import React from 'react';
import { useGetData } from './hooks';
import './styles.css';

export default function App() {
  const { isSuccess, data } = useGetData();

  return (
    <div>
      <h1 className="h1">WORKS!</h1>
      {isSuccess && <div>{JSON.stringify(data.feed, null, '\t')}</div>}
    </div>
  );
}
