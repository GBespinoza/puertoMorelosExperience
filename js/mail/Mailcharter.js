$("#botonEnv").click(function() {
    // Validamos que los campos esten completos
    if($("#nombre").val() == "" || 
       $("#Email").val() == "" || 
       $("#Phone").val() == "" || 
       $("#dateofbirth").val() == ""){
        alert("Campos incompletos");
    }else{
        // Ejecutamos AJAX
        $.ajax({
            type: 'POST',
            url: "../phpmail/MailCharter.php",
            data: { 
                'nombre': $("#nombre").val(), 
                'Email': $("#Email").val(), 
                'Phone': $("#Phone").val(), 
                'dateofbirth': $("#dateofbirth").val()
            },
        }).done(function( data ) {
            var response = JSON.parse(data)
            alert(response.respuesta);
        });
        
        document.getElementById("myForm2").reset();
    }
});