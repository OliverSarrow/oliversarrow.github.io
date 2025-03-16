import countapi from 'https://cdn.jsdelivr.net/gh/mlomb/countapi-js/index.d.ts';
// import countapi from 'countapi-js';
// const countapi = require('countapi-js');

countapi.visits().then((result) => {
    console.log("Visits to SHDemoChpt2Contents page:");
    console.log(result);
});
