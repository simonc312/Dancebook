# Dancebook
a place where people can find out about all events going on in the dance community. 

For Linux and Mac users: 

0) Be sure to have node.js installed as well as npm a package manager for node modules.

1) Install Dependencies with npm package manager in terminal of root directory for Dancebook

  Run: npm install
  
2) We are using a task manager called Gulp where tasks such as watching for changes in files,
this allows us to keep running the server locally and make changes to files without shutting down.
The default gulp task runs 'watch' and 'copy' tasks which will copy css, html, convert jsx to js, and image files
to a 'dist' directory. From the root directory:

  Run: gulp

3) In the dist directory there should be index.html

  Run: python -m SimpleHTTPServer 8000 
  
4) Open a web browser at localhost://8000 to view Dancebook webpage.
