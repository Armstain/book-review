import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import BookList from './components/BookList/BookList.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import BookListPage from './components/BookListPage/BookListPage.jsx';
import WishList from './WishList/WishList.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: '/bookList',
            element: <BookList></BookList>
          }
        ]
      },
      {
        path: "/BookListPage",
        element: <BookListPage></BookListPage>,

        children: [
          {
            index: true,
            path: '',
            element: <BookList></BookList>,
            loader: () => fetch('../data.json'),
          },
          {
            path: 'wishlist',
            element: <WishList></WishList>,
            loader: () => fetch('../data.json'),
          }
        ]



      },
      // {
      //   path: "/listed",
      //   element: <BookList></BookList>,
      //   loader: () => fetch('../data.json'),
      //   children: [
      //     {

      //     }
      //   ]
      // },

      {
        path: "/pagesRead",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('../data.json'),

      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../data.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
