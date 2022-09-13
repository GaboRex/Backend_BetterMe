const express = require('express');
const routes = require('./src/routes');
const app = express();
const cors = require('cors');
app.set('port', (process.env.PORT || 5000));
app.use(cors());

app.use(express.json());
app.use('/api', routes);

app.listen(app.get('port'), () => {
    
    console.log('Betterme server started on port ',process.env.PORT);
});
