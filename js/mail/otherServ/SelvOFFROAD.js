$("#ROADEnv").click(function() {
    // Validamos que los campos esten completos
    if($("#nombreSelv2").val() == "" || 
       $("#EmailSelv2").val() == "" || 
       $("#TelfSelv2").val() == ""){
        alert("Campos incompletos");
    }else{
        // Ejecutamos AJAX
        $.ajax({
            type: 'POST',
            url: "../phpmail/otherServ/SelvOFFROAD.php",
            data: { 
                'nombreSelv2': $("#nombreSelv2").val(), 
                'EmailSelv2': $("#EmailSelv2").val(), 
                'TelfSelv2': $("#TelfSelv2").val()
            },
        }).done(function( data ) {
            var response = JSON.parse(data)
            alert(response.respuesta);
        });
        
        document.getElementById("myFormROAD").reset();
    }
});