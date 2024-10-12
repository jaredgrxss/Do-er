import { Express } from 'express';
import pingRoutes from './ping';
import homepageRoutes from './homepage';

// add all routes to server in one place
const useRoutes = async (server: Express) => {
    server.use(pingRoutes);
    server.use(homepageRoutes);
};

export { useRoutes };
