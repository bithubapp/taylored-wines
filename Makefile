deploy:
	git checkout -b gh-pages
	node build.js
	git add -f dist/
	git commit -am \"Update dist for release\"
	git push -f gh-pages 
	git checkout master
	git branch -D gh-pages