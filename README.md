# TagsInput
This repository is a [jQuery](https://jquery.com/)  plugin for a tag input. 

![tagsinput example](https://github.com/cris-m/TagsInput/blob/master/screenshots/Screenshot2.png?raw=true)

## What is TagsInput?
**TagsInput** it is a simple [jQuery](https://jquery.com/) plugin for tags input text functionalities.
## Configure TagsInput.

* If you want to use the functionality provided by plugin you should  a [Font Awesome](https://fontawesome.com/start) sylesheet and [TagsInput](https://github.com/cris-m/TagsInput/blob/master/src/js/taginput.js) javascript file to your html.
* Add a div as a tags contains in html and a the hidden input text which will receive the tag names when user press  <kbd>Tab</kbd> or <kbd>Spacebar</kbd>.

Example
```html
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <label>Enter some programming Language</label>
            <div class="myContainer"></div>
        </div>
        </div>
    <input type="text" class="inputTags" hidden/>
</div>
```

* The plugin can then be added into your javascript like so
```javascript
$('.myContainer').TagsInput({
  initialTags: ['c#', 'python', 'jQuery'], // allow initialization of tags
  tagInputPlaceholder:'eg. python',
  tagHiddenInput: $('.inputTags'),
  tagContainerBorderColor: '#d3d3d3',
  tagBackgroundColor: '#295070',
  tagColor: '#9cc3db',
  tagBorderColor: '#688eac'
});
```
## Results
![tagsinput result 1](https://github.com/cris-m/TagsInput/blob/master/screenshots/Screenshot1.png?raw=true)

![tagsinput result 2](https://github.com/cris-m/TagsInput/blob/master/screenshots/Screenshot2.png?raw=true)

![tagsinput result 3](https://github.com/cris-m/TagsInput/blob/master/screenshots/Screenshot3.png?raw=true)

## Usage
To use **TagsInput**, the user write the text and press <kbd>Tab</kbd> or <kbd>Spacebar</kbd> to add the tag name to the hidden input text which will be sent to the server side when the user submit the form.
## Contributing
This project welcomes contributions and suggestions.