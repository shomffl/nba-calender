const mix = require("laravel-mix");

mix.ts("resources/ts/app.tsx", "public/js/app.js")
    .sass("resources/sass/app.scss", "public/css/aop.css")
    .version();
