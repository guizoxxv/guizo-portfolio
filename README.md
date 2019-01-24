Guizo's portfolio

* `npm run serve` - port 8080 (executed when container is started)
* Serve dist folders with npm packages `server` or `http-server` - port 5000
* Change dist folder owner after `npm run build` to avoid git permission errors
* Add single folder to branch on git:
    * ~~`git subtree push --prefix app/dist_site origin site`~~ (**Error:** `Updates were rejected because the tip of your current branch is behind`)
    * ``git push origin `git subtree split --prefix app/dist_site develop`:site -f``