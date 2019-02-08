$("#TFDEnviar").click(function() {
    // Validamos que los campos esten completos
    if($("#nombre4").val() == "" || 
       $("#email4").val() == "" || 
       $("#telefono4").val() == ""){
        alert("Campos incompletos");
    }else{
        // Ejecutamos AJAX
        $.ajax({
            type: 'POST',
            url: "../phpmail/otherServ/TFD.php",
            data: { 
                'nombre4': $("#nombre4").val(), 
                'email4': $("#email4").val(), 
                'telefono4': $("#telefono4").val()
            },
        }).done(function( data ) {
            var response = JSON.parse(data)
            alert(response.respuesta);
        });
        
        document.getElementById("myFormTFD").reset();
    }
});