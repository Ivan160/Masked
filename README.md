# Masked JavaScript Plugin

## Setup
### Masked-install
**Folder install**

First, download the file validator.js from the "install" folder. 
Import the validator into your project.
Next, call the validator function for those forms you wish to have validation.

```js
import validator from './validator';

addEventListener('DOMContentLoaded', function() {
   validator(document.querySelector('#form'));
});
```

### Masked-connections
**Folder connections**

First, download the file validator.js from the "connections" folder. 
Include the validator.js to your project.
Next, call the validator function for those forms you wish to have validation.

```js
<script src="./validator.js"></script>
<script>
   addEventListener('DOMContentLoaded', function () {
      validator(document.querySelector('#form'));
   });
</script>
```

## Usage
Set the name attribute for the items you wish to have validation.
```html
      <input type="text" name="name">
      <input type="text" name="phone">
      <input type="text" name="email">
```
