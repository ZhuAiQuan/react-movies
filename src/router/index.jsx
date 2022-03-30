/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 16:31:48
 * @LastEditTime: 2022-03-30 14:00:02
 * @LastEditors: zaq
 * @Reference:
 */
import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Loading from "_c/loading";
import Layouts from "@/layout";
const Home = lazy(() => import("@/views/home"));
const Cinemas = lazy(() => import("@/views/cinemas"));
const Info = lazy(() => import("@/views/info"));
const Mine = lazy(() => import("@/views/mine"));
const NotFound = lazy(() => import("@/views/404"));
const Detail = lazy(() => import("@/views/film-info/detail"));
const AllPhotos = lazy(() => import("@/views/film-info/photos"));
const LoginPage = lazy(() => import("@/views/login"));

export default function index() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route path="home" element={<Home />}></Route>
            <Route path="cinemas" element={<Cinemas />}></Route>
            <Route path="mine" element={<Mine />}></Route>
          </Route>
          <Route path="info" element={<Info />}></Route>
          <Route path="film-detail/:id" element={<Detail />}></Route>
          <Route path="photos" element={<AllPhotos />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="404" element={<NotFound />}></Route>
          <Route path="*" element={<Navigate to="404" />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}
