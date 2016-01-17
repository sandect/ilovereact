.PHONY: css
css:
	mkdir -p bundle
	postcss -w -u autoprefixer -u postcss-import css/app.css -o bundle/app.css

.PHONY: server
server:
	browser-sync start --server --files='index.html,bundle/app.css,js/app.js'

.PHONY: clean
clean:
	rm -r bundle
