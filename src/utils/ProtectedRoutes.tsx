// import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useAppSelector } from '../redux/store';

// import { AuthState } from '../types/auth.type';

// function ProtectedRoute({ component: Component, ...rest }: any) {
// 	const {isAuthenticated} = useAppSelector((state: AuthState) => state.user);

// 	return (
// 		<Route
// 			{...rest}
// 			render={(props) => {
// 				if (!isAuthenticated) {
// 					return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
// 				}
// 				return <Component {...props} {...rest} />;
// 			}}
// 		/>
// 	);
// }

// export default ProtectedRoute;

import React from 'react'

const ProtectedRoutes = () => {
  return <div>ProtectedRoutes</div>
}

export default ProtectedRoutes
