
var app = angular.module('demo', ['times.tabletop']).controller('DemoCtrl', function($scope) {

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1o0qgdnj9YgMSNxm3vpRxRN39fa8xvE45S9PaqdXU-uk/pubhtml';


console.log("HELLO");
}).config(function(TabletopProvider)
{ TabletopProvider.setTabletopOptions({ key: 'https://docs.google.com/spreadsheets/d/1o0qgdnj9YgMSNxm3vpRxRN39fa8xvE45S9PaqdXU-uk/pubhtml',
 // Your key here. simpleSheet: true // Any Tabletop option except 'callback' works.
})}); 
