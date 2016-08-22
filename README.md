# Custom Curriculum Vitae

## Running The App

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following commands:

  ```shell
  npm install
  jspm install -y
  bower install
  ```
3. To run the app, execute the following command:

  ```shell
  gulp watch
  ```
4. Browse to [http://localhost:9000](http://localhost:9000) to see the app. You can make changes in the code found under `src` and the browser should auto-refresh itself as you save files.

## Bundling and Export
To bundle and prepare your application for exporting, just run the following command:
  ```shell
    gulp export
  ```

Once the export is completed, just copy the `export` folder to your host.

## Configuration
In order to personalize the application with your own data, just edit the files in the `test-data` folder with your own data. 
> **Note**: In future releases of this project, a more dynamic way to personalize the CV with your own data will be provided.
