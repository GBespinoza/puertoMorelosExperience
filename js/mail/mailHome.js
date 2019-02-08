// pestaña ¿Eres nuevo

$("#botonHomeEnv").click(function() {
    // Validamos que los campos esten completos
    if($("#nombre").val() == "" || 
       $("#mail").val() == "" || 
       $("#numero").val() == "" || 
       $("#personas").val() == "" || 
       $("#fecha").val() == "" || 
       $("#fechas").val() == "" || 
       $("#sect").val() == "" || 
       $("#asunto").val() == ""){
        alert("Campos incompletos");
    }else{
        // Ejecutamos AJAX
        $.ajax({
            type: 'POST',
            url: "phpmail/mailHomePM.php",
            data: { 
                'nombre': $("#nombre").val(), 
                'mail': $("#mail").val(), 
                'numero': $("#numero").val(),
                'personas': $("#personas").val(),
                'fecha': $("#fecha").val(),
                'fechas': $("#fechas").val(),
                'sect': $("#sect").val(),
                'asunto': $("#asunto").val()
            },
        }).done(function( data ) {
            var response = JSON.parse(data)
            alert(response.respuesta);
        });
        
        document.getElementById("myForm").reset();
    }
});





