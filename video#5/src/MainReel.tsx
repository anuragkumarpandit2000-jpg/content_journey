import React from 'react';
import { RouteProps } from './types';
import { MetaCyberRoute } from './routes/MetaCyberRoute';

export const MainReel: React.FC<RouteProps> = (props) => {
  const activeRoute = props.routeId || 'meta-cyber';

  switch (activeRoute) {
    case 'meta-cyber':
    default:
      return <MetaCyberRoute {...props} />;
  }
};
