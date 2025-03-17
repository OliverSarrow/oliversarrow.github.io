import * as countapi from 'https://cdn.jsdelivr.net/npm/countapi-js';
// import countapi from 'countapi-js';
// const countapi = require('countapi-js');

countapi.visits().then((result) => {
    console.log("Visits to SHDemoChpt2Contents page:");
    console.log(result);
});
