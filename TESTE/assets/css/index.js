document.getElementById('codigo').addEventListener('keydown', function(e) {
    if(e.keyCode === 9) { // TAB
        var posAnterior = this.selectionStart;
        var posPosterior = this.selectionEnd;

        e.target.value = e.target.value.substring(0, posAnterior)
                         + '\t'
                         + e.target.value.substring(posPosterior);

        this.selectionStart = posAnterior + 1;
        this.selectionEnd = posAnterior + 1;
 
        // não move pro próximo elemento
        e.preventDefault();
    }
}, false);