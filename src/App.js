import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const  App =()=> {
  const pageSize = 12;
  // apikey
  const apiKey = process.env.NEWS_API || "32ebcf3ceb2445e0be9171766026d1c4"
  // loading bar progress method
  const [progress, setProgress] = useState(0)


    return (
      <div>
        <BrowserRouter>
          < Navbar />
          <LoadingBar
          height={5}
            color='#f11946'
            progress={progress}
            // progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key={"general"} pageSize={pageSize} category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key={"business"} pageSize={pageSize} category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key={"entertainment"} pageSize={pageSize} category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key={"health"} pageSize={pageSize} category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key={"science"} pageSize={pageSize} category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key={"sports"} pageSize={pageSize} category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key={"technology"} pageSize={pageSize} category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )

  }
export default App