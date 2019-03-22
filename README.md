## STORE
A CLI tool for managing key-value pairs

Store is a CLI tool built with [Node](https://nodejs.org/en/docs/) for scripting and server and [MongoDB](https://docs.mongodb.com/) for data storage used to store, retrieve and watch data stored in the form of key value pairs.

### Installation

- Clone this repository, run
  ```
  git clone https://github.com/VibhorCodecianGupta/node_CLI.git
  ```
- If you do not have `yarn` installed already, run
  ```
  npm install --global yarn
  ```

- Change directory into project root
  ```
  cd kv-node/
  ```

- For installing node dependencies, run
  ```
  yarn install
  ```


### Setup

 This tool is intended to run as a server/daemon, hence the CLI tool queries the database with every executable command. The daemon here is the database instance that is running in the `mongodb` server.
 Start up your `mongodb` server on your machine. For macOS, run
 ```
 brew services start mongodb
 ```
    OR
`/usr/local/bin/mongod` and `/usr/local/bin/mongo` in separate terminal sessions


### CLI Usage

Fire up another terminal and you are ready to go! The CLI offers the following commands to play with:


```
node store set <key> <value>
```
- This command sets a key value pair in the database with respective values of the arguments.

```
node store get <key>
```
- This command retrieves the value of the key passed in the arguments.

```
node store watch <key>
```
- This command watched the argument key for any changes. If you use the `store set` command from another terminal on the same key to change its value, the changes will be reflected in this instance of the CLI.


### Testing

The application has fully unit tested database query functions and utility functions used for CLI command actions.

- To run tests, run
  ```
  yarn test
  ```

- To generate a code coverage reports, run
  ```
  yarn test:report
  ```
### Docker

This project is docker-friendly, and has a `Dockerfile` and a `docker-compose.yml`. To run a docker instance of the application, run
  ```
  docker-compose build && docker-compose up
  ```
and continue using the CLI commands as mentioned above.


