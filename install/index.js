'use strict';
import masked from './masked.js';

addEventListener('DOMContentLoaded', function() {
   var phone = document.querySelectorAll('[name="phone"]');
   for (var i = 0; i < phone.length; i++) {
      masked(phone[i], "+7 (___) ___-__-__");
   }
   masked(document.querySelector("#date"), "__/__/____");   
});