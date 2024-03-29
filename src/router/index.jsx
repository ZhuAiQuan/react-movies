/*
 * @Description: xingp，yyds
 * @Author: zaq
 * @Date: 2022-02-21 16:31:48
 * @LastEditTime: 2022-04-13 10:54:03
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
const CinemaFilm = lazy(() => import("@/views/cinemaFilm"));
const GeoLocation = lazy(() => import("@/views/geolocation"))

export default function index() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<Home />}></Route>
            <Route path="cinemas" element={<Cinemas />}></Route>
            <Route path="mine" element={<Mine />}></Route>
          </Route>
          <Route path="info" element={<Info />}></Route>
          <Route path="film-detail/:id" element={<Detail />}></Route>
          <Route path="photos" element={<AllPhotos />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="cinema-film/:id" element={<CinemaFilm />}></Route>
          <Route path="geo" element={<GeoLocation />}></Route>
          <Route path="404" element={<NotFound />}></Route>
          <Route path="*" element={<Navigate to="404" />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}
