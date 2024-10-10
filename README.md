## Requirements

* ### node version >=18.17.0

## Used libraries
1.  **Vuetify**: just to have some UI
2. **vue-query**: to handle api call states, retries and much more automatically
3. **axios**: http client

## Description
1. Project structure
   * **/src/components/**: catalog for generic components to be used within project
   * **/src/core/**: core functionalities like http clients, crons, ws etc
   * **/src/api/**: client and its endpoints per project domains
   * **/src/config.js**: general configuration of application. it should contain variables which could be different per release environment or changed during app lifecycle without need of code update (used for api_key in this project)
 
TODO: Good idea would be to have switch button that changes "from" and "to" inputs each other

## Project Setup

### 1. Install dependencies
```sh
npm install
```

### 2. Start development server

```sh
npm run dev
```

### 3. App would start at

```
http://localhost:5173/
```

