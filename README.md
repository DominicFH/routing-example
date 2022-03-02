# Routing Tasks

0. The senior dev team have a had a change of heart over `fetch`. Refactor the BE request function to make use of the Axios API. You wish to remind yourself of the syntax using the [docs](https://axios-http.com/)

1. Make use of React Router to change each of the planet names to a Link. The Link should change the URL to `/planets/:planet_id` where the `planet_id` is replaced with the id of the planet that has been clicked.

2. Create a new static component (just add a static <p> tag for now) which renders instead of the list of planets when the the path matches `/planets/:planet_id`.

3. Add a navigation link to this new component which sets the path back to `/`. It should navigate us back to a view of the planet lists. _Consider the lifecycle of the components whilst navigating between the two paths._

4. This new component will need to display more information on the planet that has been clicked(Consider renaming the component to `SinglePlanet` if you have not already). Tap into the lifecycle of this component and get it to fetch data on a single planet _on mount_. You'll need to request the data from the following endpoint `https://space-facts.herokuapp.com/api/planets/:planet_id`. How can you access the `planet_id` in this component?

5. A user may navigate through your app by changing the URL. Ensure that your `SinglePlanet` component is hydrated with the new correct planet information as you update the id in the path.

6. Add an `isLoading` state to this component to conditionally render a loading message.
