import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cmain from './Cmain';
import Dashboard from './components/Dashboard';
import Contract from './components/Contract';
import Task from './components/Task';
import Team from './components/Team';
import Invoice from './components/Invoice';
import Forms from './components/Forms';
import Report from './components/Report';
import Email from './components/Email';
import Setting from './components/Setting';
import Input from './components/Input';


function App() {


  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Cmain />}>
          <Route index element={<Dashboard />} />
          <Route path='contract' element={<Contract />} />
          <Route path='team' element={<Team />} />
          <Route path='task' element={<Task />} />
          <Route path='invoice' element={<Invoice />} />
          <Route path='forms' element={<Forms />} />
          <Route path='report' element={<Report />} />
          <Route path='email' element={<Email />} />
          <Route path='setting' element={<Setting />} />
          <Route path='input' element={<Input />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
