Engine Piklor
=============
[Piklor.js](https://github.com/jillix/piklor.js) version for Engine.

## Configuration

```js
{
    "selector": ".some-class"
  , "colors": ["red", "yellow", "blue"]
  , "options": {
        // object passed to the piklor.js constructor
    }
}
```

## Events

 - :arrow_up: `colorChosen` After the user selects the color, this event is
   emited containing the `color` field in the data object.


## Documentation
Please refer to the [piklor.js documentation](https://github.com/jillix/piklor.js) to find more about
these methods.

## `render()`

## `close()`

## `open()`

## `set(ev, data)`

### Params
- **Event** `ev`: The event object.
- **Object** `data`: An object containing:  - `col` (String): The color to set.
 - `p` (Boolean): If `false`, the color change will not be triggered.

## How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
