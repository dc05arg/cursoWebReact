function contador(){
    var cantidad = document.getElementById("text").value;
    var contador = cantidad.length;
    
    console.log("Escribistes " + contador + " caracteres!");
    
    document.getElementById("total").innerText = "Escribistes " + contador + " caracteres";

    }