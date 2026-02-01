# Valentine's Day Proposal Site

This is a cute interactive Valentine's Day proposal website made with React and Vite.

## Features

- **Interactive "No" Button**: The "No" button is shy and runs away when you try to hover over it!
- **Celebration**: Clicking "Yes" triggers a confetti explosion and shows a cute kissing animation.
- **Responsive**: Works on desktop and mobile (though the "run away" effect is best on desktop).

## How to Run Locally

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start the development server**:
    ```bash
    npm run dev
    ```
    Open the link shown in your terminal (usually `http://localhost:5173`) to see the site.

## How to Deploy (Get your Shareable Link!)

You wanted the link: `https://barsha-this-is-not-expect-from-you.vercel.app`

### Method 1: Using Vercel CLI (Easiest for Custom Name)

I have already configured the project name in `vercel.json`. Follow these steps:

1.  **Open your terminal** in this project folder.
2.  Run this command:
    ```bash
    npx vercel deploy --prod
    ```
3.  Follow the prompts:
    -   If asked to log in, choose "Continue with GitHub" or your preferred method.
    -   **Set up and deploy?** -> Type `Y` (Yes).
    -   **Which scope?** -> Select your account (press Enter).
    -   **Link to existing project?** -> Type `N` (No).
    -   **What's your project's name?** -> It should default to `barsha-this-is-not-expect-from-you`. Press Enter.
    -   **In which directory is your code located?** -> Press Enter (default is `./`).
    -   **Want to modify these settings?** -> Type `N` (No).

4.  Wait a moment, and Vercel will give you a **Production** link.
    -   If the name `barsha-this-is-not-expect-from-you` is available, your link will be:
        **`https://barsha-this-is-not-expect-from-you.vercel.app`**

### Method 2: Netlify Drop (Alternative)

1.  Run the build command:
    ```bash
    npm run build
    ```
2.  Go to [Netlify Drop](https://app.netlify.com/drop).
3.  Drag and drop the `dist` folder (inside your project folder) onto the page.
4.  Once uploaded, go to **Site settings** > **Change site name**.
5.  Enter `barsha-this-is-not-expect-from-you` and save.
6.  Your link will be: `https://barsha-this-is-not-expect-from-you.netlify.app`


## Customization

-   **Images**: You can change the images in `src/App.jsx` by replacing `ASKING_IMG` and `KISSING_IMG` constants with your own image URLs.
-   **Text**: Edit the text in `src/App.jsx` to say whatever you want!
