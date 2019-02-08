$("#canopyEnv").click(function() {
    // Validamos que los campos esten completos
    if($("#nombreSelv1").val() == "" || 
       $("#EmailSelv1").val() == "" || 
       $("#TelfSelv1").val() == ""){
        alert("Campos incompletos");
    }else{
        // Ejecutamos AJAX
        $.ajax({
            type: 'POST',
            url: "../phpmail/otherServ/SelvExtremeCanop.php",
            data: { 
                'nombreSelv1': $("#nombreSelv1").val(), 
                'EmailSelv1': $("#EmailSelv1").val(), 
                'TelfSelv1': $("#TelfSelv1").val()
            },
        }).done(function( data ) {
            var response = JSON.parse(data)
            alert(response.respuesta);
        });
        
        document.getElementById("myFormExtreme").reset();
    }
});