This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
The project is based on code samples from the official React documentation.

To Start: 
```
npm start
```

Notes:
```
React components can have state by setting this.state in their constructors. this.state should be considered as private to a React component that it’s defined in.

When you call setState in a component, React automatically updates the child components inside of it too.

The main benefit of immutability is that it helps you build pure components in React. Immutable data can easily determine if changes have been made which helps to determine when a component requires re-rendering.

Keys tell React about the identity of each component which allows React to maintain state between re-renders. If a component’s key changes, the component will be destroyed and re-created with a new state.

By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

Returning null from a component’s render method does not affect the firing of the component’s lifecycle methods.

Controlled Components are components whole values are controlled by React state.

```


TODO:
```
Add a toggle button that lets you sort the moves in either ascending or descending order.
When someone wins, highlight the three squares that caused the win.
When no one wins, display a message about the result being a draw.
```