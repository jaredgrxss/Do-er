import express, { Express } from 'express'
import path from 'path'
import { useRoutes } from './routes/index'

// server and port 
const server : Express = express();
const PORT = process.env.PORT || 3000

// template engine
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname + '/templates'));

// static files
server.use(express.static(path.join(__dirname + '/public')));

// funnel routes
useRoutes(server);

// start
server.listen(PORT, () => {
    console.log(`[server]: Server running at http://localhost:${PORT}`);
});




