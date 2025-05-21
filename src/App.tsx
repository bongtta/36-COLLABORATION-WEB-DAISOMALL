import { Global, ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import GlobalStyle from './styles/global';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import pageRoutes from '@routes/pageRoutes';

function App() {
  const router = createBrowserRouter([...pageRoutes]);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
