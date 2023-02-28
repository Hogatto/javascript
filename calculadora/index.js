function Calculadora() {
    this.display = document.querySelector('.display')
    
    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target
            if (el.classList.contains('btn-num')) this.addNumDisplay(el)
            if (el.classList.contains('btn-clear')) this.clear()
            if (el.classList.contains('btn-del')) this.del()
            if (el.classList.contains('btn-eq')) this.resultado()
        });
    }

    this.resultado = () => {
        try {
        
        }catch(e){
            alert('conta invalida')
            return
        }
    }

    this.del = () => this.display.value = this.display.value.slice(0, -1)
    this.clear = () => this.display.value = '';
    this.addNumDisplay = el => this.display.value += el.innerText
    this.inicia = () => this.capturaCliques()

}

const calculadora = new Calculadora()
calculadora.inicia()