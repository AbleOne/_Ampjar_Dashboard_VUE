import Vue from 'vue';
import App from './App.vue';
import 'date-input-polyfill';
import noUiSlider from 'nouislider';

import './assets/styles/main.css';
import 'nouislider/distribute/nouislider.min.css'

Vue.config.productionTip = false;

document.addEventListener("DOMContentLoaded", function(event) {

  //   Input range : NoUISlider
  //   get `data-` from html
  function input_range_data ( element, key ) {
      return element.getAttribute('data-' + key);   
  }

  // create instance of input_range_multi
  function createInputRangeMulti(slider) {

    var range_multi_start = JSON.parse(input_range_data(slider, "start"));
    var range_multi_ranges = JSON.parse(input_range_data(slider, "ranges"));
    
    noUiSlider.create(slider, {
      start: range_multi_start,
      connect: true,
      range: range_multi_ranges
    });
  }

  var inputs_range_multi = document.getElementsByClassName('input-range-multi');

  for ( var i = 0; i < inputs_range_multi.length; i++ ) {
    createInputRangeMulti(inputs_range_multi[i])
  }

});
  
new Vue({
  render: h => h(App),
}).$mount(`#ampjar_dashboard`);
