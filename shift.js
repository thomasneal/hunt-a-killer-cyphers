document.addEventListener("DOMContentLoaded", function(){
  const App = new Vue({
    el: '#app',
    data: {
      translate: '',
      translated: '',
      shiftNumber: 1,
      negative: false,
      alphabet: {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11,
        l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20,
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
      }
    },
    methods: {
      shift(translate) {
        var workingTranslation = "";
        var sliced = translate.split("");
        sliced.forEach(function(s) {
            workingTranslation += App.check_letter(s);
        });
        this.translated = workingTranslation;
        //console.log(this.translated);
        //console.log(workingTranslation);
      },
      check_letter(letter) {
        if (this.negative) {
          var firstCalc = parseInt(this.alphabet[letter]) - parseInt(this.shiftNumber);
          console.log(firstCalc);
          if (firstCalc <= 0) {
            firstCalc = 26 - this.shiftNumber + 1;
          }

          return getKeyByValue(this.alphabet,firstCalc);

        } else {
          // positive
          var firstCalc = parseInt(this.alphabet[letter]) + parseInt(this.shiftNumber);

          if (firstCalc > 26) {
            firstCalc = firstCalc - 26;
          }

          return getKeyByValue(this.alphabet,firstCalc);
        }


      }
    } //end methods
  })
});

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
