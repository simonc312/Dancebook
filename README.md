# Dancebook

a place where people can find out about all events going on in the dance community.

Pivoted to focus on having an audition form to keep track of applicants.  

---

For Linux and Mac users: 

0) Be sure to have node.js installed as well as npm a package manager for node modules.

1) Install Dependencies with npm package manager in terminal of root directory for Dancebook

 >Run: npm install
  
2) We are using a task manager called Gulp where tasks such as watching for changes in files,
this allows us to keep running the server locally and make changes to files without shutting down.
The default gulp task runs 'watch' and 'copy' tasks which will copy css, html, convert jsx to js, and image files
to a 'dist' directory. From the root directory:

 >Install gulp globally Run: npm install -g gulp 

 >Run: gulp

3) In the dist directory there should be index.html. For majority of development, this method is sufficient.

 >Run: python -m SimpleHTTPServer 8000 
  
4) Open a web browser at localhost:8000 to view Dancebook webpage.

*OR*

Follow these steps to run google app engine PHP development server
Which should be run when evaluating website before pushing to app engine production site. 

1) Follow steps for installing [Google App Engine SDK for PHP] [1] 

2) To begin serving from parent folder of Dancebook,

>Run: google_appengine/dev_appserver.py Dancebook/

Linux Users may need to specify php_executable_path 

>Run: google_appengine/dev_appserver.py --php_executable_path=php-5.4.25/installdir/bin/php-cgi Dancebook/

This by default will serve index.html on localhost:8080 and an admin dashboard at localhost:8000 

[1]: https://cloud.google.com/appengine/downloads#Google_App_Engine_SDK_for_PHP "Google App Engine SDK for PHP"

###Workflow For Code Review

0) Master branch commits and merges only stable features from Dev branch

1) Checkout to Dev branch. Checkout new feature branch

> Use naming convention: feature-version-number-* 

Currently we are version 1.0

2) Commit changes to this branch and push to it

3) On github repo, create a new pull request to Dev branch and assign someone to review it. 

4) After passing code review the feature branch will be merged with dev branch and then deleted. 
Otherwise make appropriate changes and commit to branch again - assign another person to review. 

5) If there are enough features to warrant commiting to master we can update the verision number to 1.1.  

6) Push updates to Google Appspot by running this from Dancebook parent folder:

>Run: python google_appengine/appcfg.py -A dancebook-2016 Dancebook/

###Common Issues Running Locally:

1) "Error: watch ENOENT" when running "gulp"

	This may happen because the maximum number of watchers is exceeded. 
	To increase the amount of watchers open an admin terminal and run:

	echo 10000 > /proc/sys/fs/inotify/max_user_watches
	echo 10000 > /proc/sys/fs/inotify/max_user_instances


###Important files 

1) login_bar.js.jsx currently initializes Parse and Facebook sdks and handles logging in and out. 

2) form_view.js.jsx will create new Parse class ApplicationForm each time submit button is pressed. 

3) event-manager.js.jsx will fetch all of logged in user's fb events. 