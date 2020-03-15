# My Bike & Co, SEO friendly website
This repository demonstrates the usage of [HA-CMS](https://github.com/daphnis-automation/HA-CMS)  (Headless Content Management System, build in Angular).

## Goal
1) Build a SEO friendly website in Angular.
2) Demonstrate the Headless CMS [HA-CMS](https://github.com/daphnis-automation/HA-CMS) usage (as much as possible, a real world example)
3) Pages should load fast, minimal Stylesheet and Js file usage!
4) Ofcourse Server side rendering / maybe prerendering?
6) Do not use too big pictures and no copyright material! Free cycle pictures: https://pixabay.com/photos/round-cycling-cyclist-sport-2086759/
5) Pages to be build:
    -  Home / Landing Page
    -  Contact Page
    -  Google Maps for displaying the resellers
    -  Catalog / Shop module
    -  Sitemap (containing all links to pages and catalog)
    -  t.b.d..



## Pre-requisites

Node v12.13.0
<code>node -v</code>

Npm 6.12.0
<code>npm -v</code>

@angular/cli 9.0.6
<code>ng version</code>


## Starting 

<code>npm install</code> For installing the required packages

<code>ng serve</code> For running the instance (Mostly used during Development)

<code>npm run start:ssr</code> For building it into an SEO friendly website. (Uses Server Side Rendering)


# Rules
1) Do not use unneccessary Stylesheets, Javascript files or templates.
2) Build the components with existing Material UI components: https://material.angular.io/
3) Try to keep code and files / folder clean, nice and tidy!
4) Do not push: API keys, private keys, user / pass because this is a public repository. Instead use the: [dotenv package](https://www.npmjs.com/package/dotenv)
4) Prevent talking to DOM from codebehind. See also: [Angular Universal Gotchas](gotchas.md)