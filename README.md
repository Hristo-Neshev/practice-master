# About Practice Master

Practice Mater is organizer for musicians - professional and amateur. 
The app is deployed at https://reverent-bartik-438439.netlify.app/

This project have Home Guest, Register and Login  pages open to anyone.
In registration form all fields are required. If some field is empty or the data is not valid notification message is shown.
Registered users have different home page with different "Call to action" button and different navigation bar. 

## Repertoire page

Repertoire page is the place where users can add or remove pieces to their repertoire. On the left side is Add repertoire form, and on the right side is list with current repertoire.

## Concert page

On this page users can see list of their planned concerts or add new one. From there they can view details about concert or delete it.

## Concert create/edit pages

In this pages user can set/change details about place, date and stating hour of teh concert. Also can edit concert program and see total length of the concert.


## Concert details page

Here users can see all info about given concert. Also they can edit information about the concert.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

# Project Architecture

For this project i use Backedless for the Back-end.
The components are separated in two : containers and components.

## Containers
The most of components here is state-full.
The major containers are : Header, Main, and Footer.
The most important is the Main. There is the Routing and Concerts and Repertoire components.

## Components
The most of components here is state-less.
Here are components like Home, Not Found, or components used in other components like Notifications or Navigation etc.

# Other

Only LoadingSpinner use css module, other components use SASS.
Context API is used for passing data about is user is logged in or not.

# Future of the project

For the project i plan to add new major section about daily practice new pieces. There users can write notes, check how long they practice given piece, and total practice time(daily and weekly)





