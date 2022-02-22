/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 16:31:48
 * @LastEditTime: 2022-02-21 17:00:56
 * @LastEditors: zaq
 * @Reference:
 */
import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Loading from "_c/loading";
const Home = lazy(() => import("@/views/home"));
const Cinemas = lazy(() => import("@/views/cinemas"));
const Info = lazy(() => import("@/views/info"));
const Mine = lazy(() => import("@/views/mine"));
const NotFound = lazy(() => import("@/views/404"));

export default function index() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="cinemas" element={<Cinemas />}></Route>
          <Route path="info" element={<Info />}></Route>
          <Route path="mine" element={<Mine />}></Route>
          <Route path="404" element={<NotFound />}></Route>
          <Route path="*" element={<Navigate to="404" />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}
