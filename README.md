# Fortnite Stats Tracker
This is a simple fortnite stats tracker utilizing [Fortnite Tracker](https://fortnitetracker.com/)'s API for fetching user info based on their *username*. It features throttling on the server to not violate fortnite tracker api's request limit.



## Technologies
* UI: React / Material UI
* State: Redux / Redux Thunk / Redux Promise Middleware
* Server: Node / express
* Building: Parcel

## Prerequisites
In order to run or host the app you'll need a **TRN-Api-Key** which can be generated by creating an account on [Fortnite Tracker Api](https://fortnitetracker.com/site-api). You'll need to export this key as an environment variable before running:

```
export FT_KEY=<your key here>
```

Also install all packages using:
```
npm install
```

## Commands
To run locally: 
```
npm run start-dev
```

To build production build:
```
npm run build
```

To run production build:
```
npm run start
```