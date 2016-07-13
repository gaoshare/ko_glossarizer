
require.config({
  baseUrl: './js/',
  paths: {    
    text:         'vendor/text',
    jquery:       'vendor/jquery',
    glossarizer:  'vendor/glossarizer',
    tooltip:      'vendor/tooltip',
    knockout:     'vendor/knockout'
    },
    
  shim: {           
    jquery: {
      exports: '$'
    },
    glossarizer: ['jquery'],
    tooltip:     ['jquery']      
  }
});


require(['jquery', 'knockout', 'glossarizer', 'tooltip'], function($, ko) {

  ko.bindingHandlers.glossIt = {
    init: function(element, valueAccessor, allBindings) {
      $(element).glossarizer({
        sourceURL: 'glossary.json',
        callback: function(){

          // Callback fired after glossarizer finishes its job

          new tooltip();

        }
      });      
    }
  }


  function VM() { }
  ko.applyBindings(VM);

});

