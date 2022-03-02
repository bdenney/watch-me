# WatchMe

![WatchMe](./finished-project.png)

WatchMe® is a convenient way to create a WatchList™️ that you can then share with your fellow Watchers™️®. As a new hire of WatchMe® you are tasked with building the first version of the app for your startup.

Fueled by Red Bull and free startup snacks you are determined to get this working in 90 minutes.

## Instructions

For this project, you’ll be building out a React application that displays a
list of shows, among other features. Try your best to find the right
places to insert code into the established code base.

Part of what this code challenge is testing is your ability to follow given
instructions. While you will definitely have a significant amount of freedom in
how you implement the features, be sure to carefully read the directions for
setting up the application.

## Setup

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `8081`.
3. In a new terminal, run `npm start`.

Make sure to open [http://localhost:8081/shows](http://localhost:8081/shows) in
the browser to verify that your backend is working before you proceed!

The base URL for your backend is: `http://localhost:8081`

## Core Deliverables

As a user, I should be able to:

- See all the details of the shows rendered in `ShowList`.
- Add a show from the `ShowList` to `MyWatchList` by clicking on it. The selected show should render in the `MyWatchList` component. The show can be added only **once**. The item **does not** disappear from the `ShowList`.
- Remove a show from `MyWatchList` by clicking on it. The show disappears from the `MyWatchList` component.
- Remove a show forever by clicking the delete button at the bottom of the each `ShowCard`. This should delete the show from both the backend and the frontend.

### Endpoints for Core Deliverables

#### GET /shows

Example Response:

```json
[
    {
        "id": 1,
        "name": "Futurama",
        "summary": "Futurama follows pizza guy Philip J. Fry, who reawakens in 31st century New New York after a cryonics lab accident. Now part of the Planet Express delivery crew, Fry travels to the farthest reaches of the universe with his robot buddy Bender and cyclopsian love interest Leela, discovering freaky mutants, intergalactic conspiracies and other strange stuff.",
        "image": "https://static.tvmaze.com/uploads/images/original_untouched/4/11403.jpg",
        "stream_on": "Hulu"
    },
    {
        "id": 2,
        "name": "Last Week Tonight with John Oliver",
        "summary": "On Last Week Tonight with John Oliver, John Oliver presents a satirical look at the week in news, politics and current events.",
        "image": "https://static.tvmaze.com/uploads/images/original_untouched/392/980542.jpg",
        "stream_on": "HBO"
    }
]
```

#### DELETE /shows/:id

Example Response:

```json
{}
```

