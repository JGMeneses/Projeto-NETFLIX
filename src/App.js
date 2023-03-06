import React from 'react';
import { Routes,Route} from 'react-router-dom';
import Post from './pages/post'
import Edit from './pages/edit'
import Feed from './pages/feed'
import Lermais from './pages/lermais'


export default function App(){
   return(
        <div>
            <h1>Teste</h1>
            <Routes>
                <Route path='/Post' element={<Post/>} />
                <Route path='/edit' element={<Edit/>} />
                <Route path='/Feed' element={<Feed/>} />
                <Route path='/Lermais' element={<Lermais/>} />
            </Routes>
         </div>
   );
}

