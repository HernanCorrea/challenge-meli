import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Detail from '../../pages/Detail/Detail';
// import Home from '../../pages/Home/Home';
// import List from '../../pages/List/List';
const Home = lazy(() => import('./../../pages/Home/Home'));
const List = lazy(() => import('../../pages/List/List'));
const Detail = lazy(() => import('../../pages/Detail/Detail'));

export default function Navigator() {
  return (
    <div className="container">
      <Suspense fallback={null}>
        <Routes>
          <Route  path="/items/:id" element={<Detail />}></Route>
          <Route path="/items" element={<List/>}></Route>
          <Route index element={<Home/>}></Route>
          <Route path="*" element={<Home/>} />
        </Routes>
      </Suspense>
    </div>
  );
}
