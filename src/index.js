// Visit https://httpstatuses.com/ for a list of http status codes.

const express = require('express');
require('./db/mongoose');   // for connection to database
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const rootRouter = require('./routers/root');

const app = express();
const port = process.env.PORT;

app.use(express.json());    //parses incoming JSON requests as JS objects.
app.use(rootRouter);
app.use(userRouter);
app.use(taskRouter); 

app.listen(port, () => {
    console.log('Server is up on the port ' + port);
});

