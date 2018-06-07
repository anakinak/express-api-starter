## Weather Forecast App

To run app:
`npm i && npm start`

You could also use something like forever, to automatically restart your app in case of a crash
```bash
$ sudo npm i -g forever
$ forever start server.js
```

To run tests:
`npm test`

## Usage
---
### Weather by location

A weather forcast should be displayed based upon the location specified in the url.

```http 
- Expected URL: http://localhost:/weather/:location
- Example URL: http://localhost:/weather/( sydney | brisbane )
```
### Filter by day of the week

A weather forcast should be displayed based upon the location and day specified in the url.

```http
- Expected URL: http://localhost:<port>/weather/:location/:weekday
- Example URL: http://localhost:<port>/weather/:location/( monday | tuesday | etc .. )
```

### Display forecast for today

```http
- Expected URL: http://localhost:<port>/weather/:location/today 
- Example URL: http://localhost:<port>/weather/sydney/today
```
