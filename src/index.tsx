import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BioPortfolioPage from "./PortfolioPages/bioPortfolioPage/bioPortfolioPage";
import CvPortfolioPage from "./PortfolioPages/cvPortfolioPage/cvPortfolioPage";
import ProjectsPortfolioPage from "./PortfolioPages/projectsPortfolioPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App/> }>
          <Route path="" element={ <Navigate to='/cv'/> }/>
          <Route path="bio" element={ <BioPortfolioPage/> }/>
          <Route path="cv" element={ <CvPortfolioPage/> }/>
          <Route path="projects" element={ <ProjectsPortfolioPage/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
