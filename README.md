# Dizplai-Coding-Challenge-Vue

I am off on holiday on the 24th, and had work this week, so please bare in mind I didn't have a whole lot of time to work on this (also never used Vue, luckily they have excellent documentation)!

Have used node express server for backend

## Issues I would have liked to fix/things I missed

Given more time would have spent much longer on CSS
Did not have time to integrate database, this comes with some data integrity issues with IDs etc. (data stored in temp-data.js)
Needed to implement proxy for back-end calls instead of explicit calls and cors module on backend
Would have liked to move backend logic to java
Wanted to implement a call to add poll API into the UI, but didn't have time, api can be called through postman etc. have provided an example json body in example-body.json (you will see the new poll in view results section)
Intended to implement ability to change active poll

## Back End Setup (Ensure in back-end directory)

```sh
npm install
```

### Spin up Back End server set to port 8000 (Ensure in back-end directory)

```sh
npm run dev
```

## Front End Setup (Ensure in front-end directory) 

```sh
npm install
```

### Compile and Hot-Reload Front End for Development (Ensure in front-end directory) 

```sh
npm run dev
```

### Run Front End Unit Tests (Ensure in front-end directory) 

```sh
npm run test:unit
```