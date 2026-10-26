# eCrimePortal

A React + Vite frontend and Spring Boot backend for an eCrime complaint portal.

## Repository layout

- `Frontend/` — React, Vite, and Tailwind frontend
- `Backend/` — Spring Boot 3 / Java 21 API

## Security note

Real credentials are intentionally not included in this repository. Never commit `.env`, `.env.local`, database passwords, OAuth client secrets, JWT signing keys, or API keys. The `.env.example` files contain placeholders only. If a key was previously pushed to a repository or shared, revoke/rotate it; removing it from the latest source file does not remove it from old Git commits.

## Frontend setup

1. Install Node.js (use a version supported by the installed Vite version).
2. In a terminal, enter `Frontend/`.
3. Run `npm ci`.
4. Copy `.env.example` to `.env.local` and fill in values. A Google Maps browser key is intentionally visible to the browser, so restrict it in Google Cloud Console to the required Maps APIs and your allowed HTTP referrers.
5. Run `npm run dev`.

The frontend expects the backend at `http://localhost:8080` by default. Override it with `VITE_API_BASE_URL` in `Frontend/.env.local` if needed.

## Backend setup

Requirements: Java 21 and MySQL.

1. Create the `ecrimeportaldb` database in MySQL.
2. Set the following environment variables in the same terminal before starting the backend: `DB_URL`, `DB_USERNAME`, `DB_PASSWORD`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `JWT_SECRET`, and `NEWS_API_KEY`.
3. `JWT_SECRET` must contain at least 32 bytes of random data. For JWT security, use a newly generated value and keep it private. Changing it invalidates previously issued JWTs.
4. Enter `Backend/` and run `./mvnw spring-boot:run` on macOS/Linux or `mvnw.cmd spring-boot:run` on Windows.

Spring Boot does not load `Backend/.env.example` automatically; use it as a reference and set the variables in your shell or hosting provider's environment settings.

### Windows PowerShell example

```powershell
$env:DB_URL = "jdbc:mysql://localhost:3306/ecrimeportaldb"
$env:DB_USERNAME = "root"
$env:DB_PASSWORD = "your-local-mysql-password"
$env:GOOGLE_CLIENT_ID = "your-google-oauth-client-id"
$env:GOOGLE_CLIENT_SECRET = "your-google-oauth-client-secret"
$env:JWT_SECRET = [Convert]::ToBase64String([Security.Cryptography.RandomNumberGenerator]::GetBytes(32))
$env:NEWS_API_KEY = "your-newsapi-key"
.\mvnw.cmd spring-boot:run
```

The Google OAuth and NewsAPI features require valid credentials. If they are not configured, those integrations will not work. No real secrets should be put into this README or checked into Git.

## Uploading to GitHub

The cleaned project archive intentionally excludes the previous `.git` directory, compiled Java output, and `node_modules`. Create a **new empty GitHub repository** and initialize Git from this folder so the old commit history (which may contain credentials) is not pushed again:

```bash
git init
git add .
git status
git commit -m "Prepare eCrimePortal for GitHub"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Before `git commit`, check `git status` and make sure no real `.env` file or credentials are listed. Replace the placeholder GitHub URL with your own repository URL.
