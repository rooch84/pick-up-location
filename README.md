# Pick-up Location

This is an implementation of a simple pick-up location search box.  
After suffering with quota issues with cors.io, I decided to create a
Meteor.js app to service the rentalcars.com endpoint directly.

## Live Version

You can find a live version of the project at http://rc.chrisrooney.co.uk/

## Installation

Install Meteor with `curl https://install.meteor.com/ | sh`
(from https://www.meteor.com/install)

Clone the repo, and from the repo root run:

`meteor npm install`

## Usage

From the repo root, run:

`meteor`

Or `meteor --allow-superuser` if running at root user.

Then point your browser to `http://localhost:3000`

## Testing

On a vanilla Ubuntu install, `bzip2` and `libfontconfig` are required:

`apt-get install bzip2 libfontconfig`

Phanton.js is also a prerequisite:

`meteor npm i --save-dev phantomjs-prebuilt`

Then run `npm test` to run some component tests (or `meteor npm run test-as-root` if root user).
