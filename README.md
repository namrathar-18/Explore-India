# Explore India

Explore India is a responsive travel website that helps visitors discover Indian destinations through curated imagery, short travel stories, and destination categories.

## Features

- Responsive desktop and mobile layout
- Goa hero section with travel-focused call to action
- Destination cards for the Taj Mahal, Kerala backwaters, and Goa
- Destination filtering by Heritage, Nature, and Coast
- Interactive image preview modal
- Mobile navigation menu
- Accessible labels, keyboard-friendly controls, and descriptive image alt text
- Consistent image sizing and responsive text wrapping

## Project Structure

```text
travel-india/
├── index.html
├── css/
│   └── style.css
├── scripts/
│   └── script.js
├── images/
│   ├── goa.jpeg
│   ├── kerala.jpg
│   └── tajmahal.jpg
└── README.md
```

## Run Locally

This is a static website and does not require a build step or package installation.

From the `travel-india` directory, start a local server:

```powershell
python -m http.server 5500
```

Open the application at:

```text
http://127.0.0.1:5500/
```

You can also open `index.html` directly in a browser, but a local server is recommended for reliable asset loading.

## Git Workflow

Check the current repository state:

```powershell
git status
git branch -vv
git log --oneline --decorate --graph --all
```

Commit the README:

```powershell
git add README.md
git commit -m "Add project documentation"
```

Push the latest `main` branch:

```powershell
git push origin main
```

## Validation

Before pushing changes, validate the JavaScript and check for whitespace errors:

```powershell
node --check scripts/script.js
git diff --check
```

## Maintainer

Explore India project maintained by Namratha R.
