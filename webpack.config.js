{
    "name": "amplify-js-app",
    "version": "1.0.0",
    "description": "Amplify JavaScript Example",
    "dependencies": {
        "@aws-amplify/api": "latest",
        "@aws-amplify/pubsub": "latest"
    },
    "devDependencies": {
    "webpack": "^4.17.1",
        "webpack-cli": "^3.1.0",
        "copy-webpack-plugin": "^4.5.2",
        "webpack-dev-server": "^3.1.5"
    },
    "scripts": {
        "start": "webpack && webpack-dev-server --mode development",
        "build": "webpack"
    }
}