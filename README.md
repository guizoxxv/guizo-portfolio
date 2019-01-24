Guizo's portfolio

* `npm run serve` - port 8080 (executed when container is started)
* Serve dist folders with npm packages `server` or `http-server` - port 5000
* Change dist folder owner after `npm run build` to avoid git permission errors
* Add single folder to branch on git:
    * git subtree push --prefix dist_site origin site