// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: { production: boolean, API_KEY: string, BASE_URL: string } = {
  production: false,
  // API_KEY: 'AIzaSyDCjP4KCrd2NpSuO-b1hNn0ylO9Xpi2Q8E',
  API_KEY: 'AIzaSyBdKDbwwQBsulBaz4-KbiAS2nomsu2QzEE',
  BASE_URL: 'https://www.googleapis.com/youtube/v3'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
