$("#dsrEnv").click(function() {
    // Validamos que los campos esten completos
    if($("#nombre1").val() == "" || 
       $("#Email1").val() == "" || 
       $("#Telefono1").val() == ""){
        alert("Campos incompletos");
    }else{
        // Ejecutamos AJAX
        $.ajax({
            type: 'POST',
            url: "../phpmail/otherServ/DSR.php",
            data: { 
                'nombre1': $("#nombre1").val(), 
                'Email1': $("#Email1").val(), 
                'Telefono1': $("#Telefono1").val()
            },
        }).done(function( data ) {
            var response = JSON.parse(data)
            alert(response.respuesta);
        });
        
        document.getElementById("myFormdsr").reset();
    }
});

