import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './App.css';
import UserTable from './Table/UserTable';

import { Toaster } from 'react-hot-toast'

export default function App() {
  return (
    <> 
      <Toaster></Toaster>
      <UserTable />
    </>
  );
}
