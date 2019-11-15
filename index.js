const express = require('express');
const cors = require('cors');

const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');

const PORT = process.env.PORT || 5000;

const app = express();

/* Mount middleware here. */
app.use(cors());

/* Add route handling */
app.use('/', indexRouter);
app.use('/posts', postsRouter);

/* Add handler methods for errors and HTTP 404 responses. */
// catch 404 and forward to error handler
// error handler

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
