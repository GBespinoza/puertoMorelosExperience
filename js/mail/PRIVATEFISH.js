$("#PRIVATEFISH").click(function() {
    // Validamos que los campos esten completos
    if($("#Nombre2").val() == "" || 
       $("#Apellido2").val() == "" || 
       $("#Telf2").val() == "" || 
       $("#radio_1").val() == "" || 
       $("#radio_2").val() == "" || 
       $("#radio_3").val() == "" || 
       $("#radio_4").val() == "" || 
       $("#radio_5").val() == "" || 
       $("#radio_6").val() == "" || 
       $("#radio_7").val() == "" || 
       $("#radio_8").val() == "" || 
       $("#radio_9").val() == "" || 
       $("#Fecha2").val() == ""){
        alert("Campos incompletos");
    }else{
        // Ejecutamos AJAX
        $.ajax({
            type: 'POST',
            url: "../phpmail/PRIVATEFISH.php",
            data: { 
                'Nombre2': $("#Nombre2").val(), 
                'Apellido2': $("#Apellido2").val(), 
                'Telf2': $("#Telf2").val(), 
                'radio': $('input[name=radio]:checked').val(), 
                'Fecha2': $("#Fecha2").val()
            },
        }).done(function( data ) {
            var response = JSON.parse(data)
            alert(response.respuesta);
        });
        
        document.getElementById("myForm2").reset();
    }
});

 
