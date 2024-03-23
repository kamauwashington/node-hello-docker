# NodeJS + ExpressJS(TypeScript)-> Kubernetes Kickstarter

> This repository is purely for reference and is illustrative in it is purpose. This is one of the many ways of implementing and or configuring this solution. 

This project is geared towards getting a local sandbox to test a NodeJS Express application in Kubernetes for test projects and Proof of Concepts. It allows the local testing of the NodeJS ExpressJS application, Dockerization, Docker Registry Push, and Kube Apply + Delete. This configuration creates 2 replicas for illustrative purposes only.

This code and or configuration is not intended to be used in production as is, and should be modified to reflect the standards and practices, and security requirements for where this code when modified will be productionalized.


## Prerequisites

Before you continue, ensure you have met the following requirements:

* [NodeJS 20+](https://nodejs.org/en/blog/release/v20.9.0)
* [Docker Desktop](https://www.docker.com/products/docker-desktop/) w/ Kubernetes option turned on
* [Kubectl](https://kubernetes.io/docs/tasks/tools/) The Kubernetes command-line tool
* [Local Docker Registry](https://www.docker.com/blog/how-to-use-your-own-registry-2/)
    * While DockerHub can be used, the aim of this repository is to simplify getting up and running
    * use the cmd **docker run -d -p 5000:5000 --name registry registry:latest**
        * On OSX, AirPlay uses port 5000, this can be turned off in settings or the registry can run on another port, the package.json scripts will need to be updated for the latter.
* run **npm install** prior to issuing any other commands.

## Running

* To run locally with NodeJS only **npm run local:start**
* To deploy to Docker **npm run docker:build**
* To deploy to Kubernetes **npm run deploy:all**

In all cases, the exposed port is **3000** which can be changed via environment variable (dotenv may be added at a later date)


## Notes

* There are helper scripts in the npm script section named appropriately for the task they are to be used for with pre and post in some cases for clean up, build, logins, etc.
* This example uses **localhost:5000** as the default docker registry, this can be changed in the npm scripts.
* Local Docker registries usually do not require authentication, however if another registry used requires it, modify the **docker:login** npm script.
* These scripts may be updated to use **cross-var** so that the scripts can be parameterized for cross platform use. However for this example it was best to keep things simplified for all levels of users.