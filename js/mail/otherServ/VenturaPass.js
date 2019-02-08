$("#VenturaPass").click(function() {
    // Validamos que los campos esten completos
    if($("#nombreVentura").val() == "" || 
       $("#emailVentura").val() == "" || 
       $("#telVentura").val() == ""){
        alert("Campos incompletos");
    }else{
        // Ejecutamos AJAX
        $.ajax({
            type: 'POST',
            url: "../phpmail/otherServ/VenturaPass.php",
            data: { 
                'nombreVentura': $("#nombreVentura").val(), 
                'emailVentura': $("#emailVentura").val(), 
                'telVentura': $("#telVentura").val()
            },
        }).done(function( data ) {
            var response = JSON.parse(data)
            alert(response.respuesta);
        });
        
        document.getElementById("myFormVenturaPass").reset();
    }
});
