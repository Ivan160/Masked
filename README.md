# Masked JavaScript Plugin
The Masked JavaScript Plugin allows the user to enter input data more easily.

## Usage
### Masked-install
**Folder install**

First, download the file masked.js from the "install" folder. 
Import the masked into your project.
Next, call the masked function and pass the desired input and pattern.

```js
import masked from './masked.js';

addEventListener('DOMContentLoaded', function() {
   var phone = document.querySelectorAll('[name="phone"]');
   for (var i = 0; i < phone.length; i++) {
      masked(phone[i], "+7 (___) ___-__-__");
   }
   masked(document.querySelector("#date"), "__/__/____");   
});
```

### Masked-connections
**Folder connections**

First, download the file masked.js from the "connections" folder. 
Include the masked.js to your project.
Next, call the masked function and pass the desired input and pattern.

```js
<script src="./masked.js"></script>
<script>
   window.addEventListener("DOMContentLoaded", function () {
      var phone = document.querySelectorAll('[name="phone"]');
      for (var i = 0; i < phone.length; i++) {
         masked(phone[i], "+7 (___) ___-__-__");
      }
      //or
      masked(document.querySelector("#date"), "__/__/____");
   });
</script>
```
