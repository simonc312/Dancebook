# Check if user is root
if [ "$(whoami)" != "root" ]; 
then
        echo "root privledges required to run script"
        exit 1
fi
# Makefile for installing dependencies

# Install Google Appengine PHP 

#Mac
wget https://storage.googleapis.com/appengine-sdks/featured/GoogleAppEngineLauncher-1.9.21.dmg
hdiutil mount GoogleAppEngineLauncher-1.9.21.dmg 
installer -package /path/to/package -target "/Volumes/Macintosh HD"
#unmount disk image
cd ~
hdiutil unmount "/Volumes/Chicken of the VNC/"
# Linux 
wget https://storage.googleapis.com/appengine-sdks/featured/google_appengine_1.9.21.zip
unzip google_appengine_1.9.21.zip 
export PATH=$PATH:/path/to/google_appengine/


# Check python is installed 
/usr/bin/env python -V

# Install php 5.4

sudo apt-get install gcc libmysqlclient-dev libxml2-dev
wget --trust-server-names http://us2.php.net/get/php-5.4.25.tar.bz2/from/us1.php.net/mirror
tar -xvf php-5.4.25.tar.bz2
cd php-5.4.25
./configure --prefix=$PWD/installdir --enable-bcmath --with-mysql --with-pdo-mysql
make install
cd -

# Install mysql linux

apt-get install mysql-server-5.5

# Install mysql mac tar file

wget http://dev.mysql.com/downloads/file.php?id=457711

# Install node 
sudo apt-get install node

# Install node modules

npm install

# Install gulp

sudo npm install gulp

# Run gulp task to create 'dist' source files

gulp copy