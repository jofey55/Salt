# How to Deploy SALT to Railway

This project is a full-stack application (Node.js + Express + React/Vite). It requires a specific build process.

## 🚀 Quick Deployment

1.  **Push to GitHub:**
    - Create a new repository on GitHub.
    - Push this entire project code to it.

2.  **Connect to Railway:**
    - Go to [Railway.app](https://railway.app).
    - Click **New Project** > **Deploy from GitHub repo**.
    - Select your repository.

3.  **Wait for Build:**
    - Railway will automatically detect `package.json`.
    - It will run `npm run build` (which builds both client and server).
    - It will run `npm start` to launch the site.

---

## 💻 Local Development (Testing on your machine)

If you downloaded the code to your computer:

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Build the Project:**
    ⚠️ **DO NOT** run `vite build`.
    Run this command instead:
    ```bash
    npm run build
    ```
    *(This runs the custom script `script/build.ts` which handles everything correctly)*

3.  **Start the Server:**
    ```bash
    npm start
    ```
    The site will be available at `http://localhost:5000`.

## ⚠️ Troubleshooting

- **"Rollup failed to resolve import..."**: This means you are running `vite build` directly or your `vite.config.ts` is incorrect. Use `npm run build`.
- **"bg-background does not exist"**: This means Tailwind is not configured. Run `npm install` to ensure all plugins are installed.
