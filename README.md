# Chef Mistral

Chef Mistral is a React web app that helps you generate creative recipes based on the ingredients you have on hand. Powered by Hugging Face's Mistral AI, it suggests recipes using your input and displays them in a readable markdown format.

## Features

- Add ingredients to your list
- Get recipe suggestions using Mistral AI
- Clean, responsive UI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/branesh2k/Chef-Mitral-webapp.git
   cd chef_mistral
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up your Hugging Face API token:**

   - Sign up or log in at [Hugging Face](https://huggingface.co/).
   - Go to [Access Tokens](https://huggingface.co/settings/tokens) and create a new token with "read" access.
   - Create a `.env` file in the root of the project and add your token:

     ```
     REACT_APP_HF_ACCESS_TOKEN=your_huggingface_access_token_here
     ```

   - **Note:** You need access to the `mistralai/Mistral-7B-Instruct-v0.3` model on Hugging Face. Some models may require you to request access or accept terms.

4. **Start the development server:**
   ```sh
   npm start
   ```

5. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## Usage

1. Enter ingredients one by one and click "Add ingredient".
2. Once you have at least 4 ingredients, click "Get a recipe" to generate a recipe suggestion.
3. The recipe will be displayed below in a readable format.

## Project Structure

- `src/components/` – React components (UI)
- `src/ai.js` – Handles communication with Hugging Face's Mistral AI
- `.env` – **Not committed to git**; stores your Hugging Face API token

## Environment Variables

- **REACT_APP_HF_ACCESS_TOKEN**  
  Your Hugging Face access token.  
  Example `.env` file:
  ```
  REACT_APP_HF_ACCESS_TOKEN=hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  ```

## License

This project is for educational/demo purposes.

---

**Note:**  
If you encounter a `401 Unauthorized` error, ensure your token is valid, has access to the Mistral model, and is correctly set in your `.env` file. Restart the development server after any changes to `.env`.