# About the Repo

This is the SSG source code for Atendit:

[Atendit.com](http://www.atendit.com)

It's powered by EleventyOne for 11ty, and is hosted on Netlify.

## Overview

It's our main site where our customers can find info about Atendit, including where they can buy an Atendit sensor.

If you have access, you can see more about it's purpose here: [BitBucket atendit-com Issue #2](https://bitbucket.org/didurememberto/atendit-com/issues/2/site-requirements).

## Local Development

### OS X Instructions

Consider if you should install a node version manager. Suggest ["n"](https://github.com/tj/n) if you decide to.

1. If you're not using a version mgr. install [Node](https://nodejs.org) directly, using the .pkg - which includes ```npm```.
1. In terminal, cd into the clone folder.
1. ```npm install```
1. ```npm run start```
1. Point your browser to: [localhost:8080](http://localhost:8080)
1. Edit files in ```src/sites/```

### Windows Instructions

tk

## Production

* URL: https://www.atendit.com
* Netlify URL: https://atendit.netlify.com

### Deploy Instructions

Netlify auto-publish is enabled! All pushes to branch ```master``` WILL GO LIVE IMMEDIATELY. Do not push to ```master```. Instead use ```develop``` and then submit a pull request.

----

## Staging

* URL: https://atendit-staging.netlify.com/
* Netlify URL: https://atendit-staging.netlify.com/

### Deploy Instructions

Netlify auto-publish is enabled for the  ```develop``` branch. So if you push to develop you can preview and circulate your changes by using the URL above.

