deploy:
	git checkout -b gh-pages
	node build.js
	git add -f dist/
	git add . -A
	git commit -m "Update dist for release"
	git push -f origin gh-pages 
	git checkout master
	git branch -D gh-pages