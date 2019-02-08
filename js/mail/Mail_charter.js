$("#botonEnv").click(function() {
    // Validamos que los campos esten completos
    if($("#nombre").val() == "" || 
       $("#correo").val() == "" || 
       $("#telefono").val() == "" || 
       $("#fecha").val() == ""){
        alert("Campos incompletos");
    }else{
        // Ejecutamos AJAX
        $.ajax({
            type: 'POST',
            url: "phpmail/Mail_charter.php",
            data: { 
                'nombre': $("#nombre").val(), 
                'correo': $("#correo").val(), 
                'telefono': $("#telefono").val(), 
                'fecha': $("#fecha").val()
            },
        }).done(function( data ) {
            var response = JSON.parse(data)
            alert(response.respuesta);
        });
        
        document.getElementById("myForm2").reset();
    }
});


