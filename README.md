# taylored-wines

### Note:

- Build requires NPM 3.x / Node 5.x (recommend using NVM)

### Usage:

1. Link embed.js into splash page HTML.
```html
<script type='https://bithubapp.github.io/taylored-wines/embed.js'></script>
```

2. Position div element with id 'taylored-wines-be-social' into splash page where you'd like the hub to appear.
```html
...
<div id="taylored-wines-be-social"></div>
...
````

### Build / Deploy:
1. Change embed.js iframe src path to production path
2. Run makefile.
	- Compiles production version of scripts
	- Pushes local repo working copy to gh-pages origin branch