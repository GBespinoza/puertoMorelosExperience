$("#SHAREFISH").click(function() {
    // Validamos que los campos esten completos
    if($("#Nombre1").val() == "" || 
       $("#Apellido1").val() == "" || 
       $("#Telf1").val() == "" || 
       $("#Fecha1").val() == ""){
        alert("Campos incompletos");
    }else{
        // Ejecutamos AJAX
        $.ajax({
            type: 'POST',
            url: "../phpmail/SHAREFISH.php",
            data: { 
                'Nombre1': $("#Nombre1").val(), 
                'Apellido1': $("#Apellido1").val(), 
                'Telf1': $("#Telf1").val(), 
         
                'Fecha1': $("#Fecha1").val()
            },
        }).done(function( data ) {
            var response = JSON.parse(data)
            alert(response.respuesta);
        });
        
        document.getElementById("myForm1").reset();
    }
});