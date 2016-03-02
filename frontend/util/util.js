var GeneralUtilities = {};

// GeneralUtilities.camelize = function(str) {
//   return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
//     return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
//   }).replace(/\s+/g, '');
// };

GeneralUtilities.changeBackground = function() {
  document.body.style.backgroundImage = "";
  var selection = document.getElementById("nav");
  selection.style.backgroundColor = '#D3E3E8';
  selection.style.borderBottom = '1px solid black';
};

module.exports = GeneralUtilities;
