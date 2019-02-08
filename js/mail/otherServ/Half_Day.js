$("#HalfEnv").click(function() {
    // Validamos que los campos esten completos
    if($("#nombre3").val() == "" || 
       $("#email3").val() == "" || 
       $("#telefono3").val() == ""){
        alert("Campos incompletos");
    }else{
        // Ejecutamos AJAX
        $.ajax({
            type: 'POST',
            url: "../phpmail/otherServ/Half_Day.php",
            data: { 
                'nombre3': $("#nombre3").val(), 
                'email3': $("#email3").val(), 
                'telefono3': $("#telefono3").val()
            },
        }).done(function( data ) {
            var response = JSON.parse(data)
            alert(response.respuesta);
        });
        
        document.getElementById("myFormHalf").reset();
    }
});