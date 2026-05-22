# Serve the MkDocs site locally with live reload
serve:
	uv run mkdocs serve

# Build the MkDocs site
build:
	uv run mkdocs build --strict

# Deploy to GitHub Pages
deploy:
	uv run mkdocs gh-deploy --force
