// pestaña ¿Eres nuevo

$("#botonContactEnv").click(function() {
    // Validamos que los campos esten completos
    if($("#nombre").val() == "" || 
       $("#mail").val() == "" || 
       $("#Subject").val() == "" || 
       $("#Message").val() == ""){
        alert("Campos incompletos");
    }else{
        // Ejecutamos AJAX
        $.ajax({
            type: 'POST',
            url: "phpmail/mailContactsPM.php",
            data: { 
                'nombre': $("#nombre").val(), 
                'mail': $("#mail").val(), 
                'Subject': $("#Subject").val(), 
                'Message': $("#Message").val()
            },
        }).done(function( data ) {
            var response = JSON.parse(data)
            alert(response.respuesta);
        });
        
        document.getElementById("myForm").reset();
    }
});

