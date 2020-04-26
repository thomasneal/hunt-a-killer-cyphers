document.addEventListener("DOMContentLoaded", function(){
  const App = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      translate: '',
      translated: ''
    },
    methods: {
      a_to_z(translate) {
        var alphabet = [
          "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
          "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z"
        ];
        var workingTranslation = "";
        var sliced = translate.split("");
        sliced.forEach(function(s) {
            workingTranslation += App.check_letter(s);
        });
        this.translated = workingTranslation;
        console.log(this.translated);
      },
      check_letter(letter) {
        switch(letter) {
          case "a":
            return "z"
            break;
          case "b":
            return "y"
            break;
          case "c":
            return "x"
            break;
          case "d":
            return "w"
            break;
          case "e":
            return "v"
            break;
          case "f":
            return "u"
            break;
          case "g":
            return "t"
            break;
          case "h":
            return "s"
            break;
          case "i":
            return "r"
            break;
          case "j":
            return "q"
            break;
          case "k":
            return "p"
            break;
          case "l":
            return "o"
            break;
          case "m":
            return "n"
            break;
          case "n":
            return "m"
            break;
          case "o":
            return "l"
            break;
          case "p":
            return "k"
            break;
          case "q":
            return "j"
            break;
          case "r":
            return "i"
            break;
          case "s":
            return "h"
            break;
          case "t":
            return "g"
            break;
          case "u":
            return "f"
            break;
          case "v":
            return "e"
            break;
          case "w":
            return "d"
            break;
          case "x":
            return "c"
            break;
          case "y":
            return "b"
            break;
          case "z":
            return "a"
            break;
        }
      }
    } //end methods
  })
});
