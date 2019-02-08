$("#dspEnv").click(function() {
    // Validamos que los campos esten completos
    if($("#nombre2").val() == "" || 
       $("#email2").val() == "" || 
       $("#tel2").val() == ""){
        alert("Campos incompletos");
    }else{
        // Ejecutamos AJAX
        $.ajax({
            type: 'POST',
            url: "../phpmail/otherServ/DSP.php",
            data: { 
                'nombre2': $("#nombre2").val(), 
                'email2': $("#email2").val(), 
                'tel2': $("#tel2").val()
            },
        }).done(function( data ) {
            var response = JSON.parse(data)
            alert(response.respuesta);
        });
        
        document.getElementById("myFormdsp").reset();
    }
});

