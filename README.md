# Dancebook

a place where people can find out about all events going on in the dance community. 

---

For Linux and Mac users: 

0) Be sure to have node.js installed as well as npm a package manager for node modules.

1) Install Dependencies with npm package manager in terminal of root directory for Dancebook

 >Run: npm install
  
2) We are using a task manager called Gulp where tasks such as watching for changes in files,
this allows us to keep running the server locally and make changes to files without shutting down.
The default gulp task runs 'watch' and 'copy' tasks which will copy css, html, convert jsx to js, and image files
to a 'dist' directory. From the root directory:

 >Run: gulp

3) In the dist directory there should be index.html

 >Run: python -m SimpleHTTPServer 8000 
  
4) Open a web browser at localhost:8000 to view Dancebook webpage.

*OR*

Follow these steps to run google app engine development server

1) Follow steps for installing [Google App Engine SDK for PHP] [1] 

2) To begin serving from parent folder of Dancebook,

>Run: google_appengine/dev_appserver.py Dancebook/

Linux Users may need to specify php_executable_path 

>Run: google_appengine/dev_appserver.py --php_executable_path=php-5.4.25/installdir/bin/php-cgi Dancebook/

This by default will serve index.html on localhost:8080 and an admin dashboard at localhost:8000 

[1]: https://cloud.google.com/appengine/downloads#Google_App_Engine_SDK_for_PHP "Google App Engine SDK for PHP"

###Common Issues Running Locally:

1) "Error: watch ENOENT" when running "gulp"

	This may happen because the maximum number of watchers is exceeded. 
	To increase the amount of watchers open an admin terminal and run:

	echo 10000 > /proc/sys/fs/inotify/max_user_watches
	echo 10000 > /proc/sys/fs/inotify/max_user_instances
