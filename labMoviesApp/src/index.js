import SiteHeader from './components/siteHeader'
import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MovieDetailsPage from "./pages/moviePages/movieDetailsPage";
import FavouriteMoviesPage from './pages/moviePages/favouriteMoviesPage';
import UpcommingMoviesPage from './pages/moviePages/UpcommingMoviesPage'; //new
import {Link} from 'react-router-dom'
import MovieReviewPage from './pages/moviePages/movieReviewPage';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/moviePages/addMovieReviewPage'
import MustWatchMoviesPage from './pages/moviePages/mustWatchMoviesPage';
import TopMoviesPage from './pages/moviePages/topMoviesPage';
import NowPlayingMoviesPage from './pages/moviePages/nowPlayingMoviesPage';
import ShowsPage from './pages/showPages/showsPage';
import ShowDetailsPage from "./pages/showPages/showDetailsPage";
import FavouriteShowsPage from './pages/showPages/favouriteShowsPage';
import MustWatchShowsPage from './pages/showPages/mustWatchShowsPage';
import ShowsContextProvider from './contexts/showsContext';
import AuthContextProvider from './contexts/authContext';
import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signUpPage';
import './app.css';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <AuthContextProvider>
        <ShowsContextProvider>
        <MoviesContextProvider>
        <Routes>
        <Route exact path="/movies/upcomming/page=:pageNumber" element={<UpcommingMoviesPage />} />
        <Route exact path="/movies/mustwatch" element={<MustWatchMoviesPage />} />
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route exact path="/movies/top/page=:pageNumber" element={<TopMoviesPage />} />
        <Route exact path="/movies/now-playing/page=:pageNumber" element={<NowPlayingMoviesPage />} />
        <Route exact path="/shows/page=:pageNumber" element={<ShowsPage />} />
        <Route exact path="/shows/favourites" element={<FavouriteShowsPage />} />
        <Route exact path="/shows/mustwatch" element={<MustWatchShowsPage />} />

        <Route exact path="/page=:pageNumber" element={<HomePage />} />
        
        
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="/shows/:id" element={<ShowDetailsPage />} />

        <Route path="*" element={ <Navigate to="/login" /> } />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />

        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<SignUpPage/>} />
        
            </Routes>
        </MoviesContextProvider>
        </ShowsContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};


const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});