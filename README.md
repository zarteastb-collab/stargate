# MyAI Gemini Interface

A custom AI interface with a modular, adjustable, and draggable layout, powered by Google's Gemini API. This project aims to provide a flexible and user-friendly environment for interacting with AI models.

## Features

* **Modular and Adjustable Layout:** Create and arrange multiple AI interaction panes.
* **Draggable Panes:** Easily reorder and organize your workspace.
* **Resizable Columns and Panes:** Customize the size of your interface elements for optimal viewing.
* **Google OAuth 2.0 Integration:** Secure user authentication using Google accounts.
* **Gemini API Integration:** Ready to be extended with powerful AI capabilities.

## Getting Started

Follow these steps to set up and run the project in your GitHub Codespace.

### 1. Create a GitHub Codespace

If you haven't already, create a new Codespace for this repository. GitHub Codespaces provides a cloud-based development environment.

### 2. Configure Google OAuth 2.0 Credentials

This application uses Google OAuth for user authentication. You need to set up credentials in the Google Cloud Console:

1.  Go to the [Google Cloud Console Credentials Page](https://console.cloud.google.com/apis/credentials).
2.  Create a new OAuth 2.0 Client ID (Web application type).
3.  **Crucially**, add your Codespace's public URL as an "Authorized redirect URI".
    * To find your Codespace's public URL: In your Codespace, go to the "Ports" tab at the bottom.
    * Find the row for port `3001`.
    * Copy the "Forwarded Address" (e.g., `https://your-codespace-name-3001.app.github.dev`).
    * Paste this URL into the "Authorized redirect URIs" field in Google Cloud Console and append `/auth/google/callback`.
    * **Example URI:** `https://your-codespace-name-3001.app.github.dev/auth/google/callback`
4.  Save your changes and note down your **Client ID** and **Client Secret**.

### 3. Set up Gemini API Key

You will also need a Google AI API Key for Gemini:

1.  Go to [Google AI Studio](https://aistudio.google.com/app/apikey).
2.  Create a new API key.

### 4. Environment Variables (`.env` file)

Create a file named `.env` in the root of your project (next to `package.json`). This file will store your sensitive API keys and secrets.