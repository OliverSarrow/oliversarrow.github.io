import countapi from 'countapi-js';

countapi.visits().then((result) => {
    console.log("Visits to SHDemoChpt2Contents page:");
    console.log(result);
});
