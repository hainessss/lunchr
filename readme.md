# Description

Lunchr is a CLI used for finding the location of open Food Trucks in San Francisco.

# Usage

Git clone this repo:

```https://github.com/hainessss/lunchr.git```

cd into the repo:

```cd lunchr```

Run the provided executable (linux/macos available):

```./lunchr-macos```

# Build

To build a new version. Make sure you have Node(v10) and NPM installed.

cd into the repo and install deps:

```npm install```

Run the build scripts:

```nprm run build:macos```

for mac, or

```npm run build:linux```

for linux.

# Retrospective

One design decision I made very early on was that I would use the full extent of the SF Data api to query and page the results.  This is the same approach I would have used if I was building a web application as it allows for very client friendly load and render times. The data set has a little over 3000 rows, enough that I would not want to load and render all of them on a mobile or memory restricted web client.  However, in retrospect, for a CLI, which could easily handle this load; it would have been much faster to get all the records and transform the data as opposed to learning the intricacies of the Data SF API.

Improvements for a web version might include:

1.) The separation of state to a standalone service/data structure i.e. Redux. As well as storing the results of queries in memory to avoid redundant calls.
2.) The separation of data transformation and rendering, both of which are basically handled in `displayResponse.js`. This would be analogous to React as the render layer and a functional layer focused on transforming data in way that is easily consumed by React. (This can also be done server-side)

