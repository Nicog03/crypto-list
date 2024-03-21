# Crypto List

![app headear](/docs/assets/images/header.png)

## How to preview the application

- To access the production deploy of the aplication, just navigate to the link:
  https://cryptolist-chi.vercel.app/

## How to run locally

To run the application locally on a development server locally there are some steps that you may follow:

- Get a CoinGecko DEMO API Key by following the steps at the [CoinGecko official docs](https://support.coingecko.com/hc/en-us/articles/21880397454233-User-Guide-How-to-sign-up-for-CoinGecko-Demo-API-and-generate-an-API-key)
- Create a `.env.local` file at the root folder
  <img src="/docs/assets/images/folder-structure.png">
- On the `.env.local` file, create a new variable called API_KEY with your API Key as the value, just like this:
  ```
  API_KEY=00_000000000000
  ```
- On the terminal, install the dependencies with your preferred package manager
  ```
  npm install
  yarn install
  ```
- After the install, start the development server
  ```
  npm run dev
  yarn dev
  ```
- On the browser, navigate to the link displayed on the terminal
