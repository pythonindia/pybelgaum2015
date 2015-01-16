PyBelgaum 2015 Website
===

How to contribute
---

 - Install [Jekyll](http://jekyllrb.com/docs/installation/). I'm using rubygems v2.1.11 and jekyll v1.4.3. Check the version after you install it.
 - fork this repo and clone the forked repo
 - run this command -

        $ jekyll serve -w

 - follow the instruction on console
 - make changes (Don't touch the `_site` directory)
 - add, commit, push and send pull request


How to write blog posts
---

 - After forking and setting the site up locally, run this command  -

        $ rake post title="My Legendary blog post"

 - On console it'll say that it has created a file inside `_posts` directory
 - Open the same file, write your blog post
 - Make sure you're running `jekyll serve -w` and watching for the changes and testing it on your browser before pushing
 - add, commit, push and send pull request
