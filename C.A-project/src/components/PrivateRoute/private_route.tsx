
// PrivateRoute.tsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    element: JSX.Element;
    [key: string]: any; 
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, ...rest }) => {
    const isAuthenticated = !!localStorage.getItem('token'); 
    return (
        <Route
            {...rest}
            element={isAuthenticated ? element : <Navigate to="/login" />} 
        />
    );
};

export default PrivateRoute;
