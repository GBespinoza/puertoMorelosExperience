$("#botonChart").click(function() {
    // Validamos que los campos esten completos
    if($("#nombrech").val() == "" || 
       $("#Emailch").val() == "" || 
       $("#Phonech").val() == "" || 
       $("#fecha").val() == ""){
        alert("Campos incompletos");
    }else{
        // Ejecutamos AJAX
        $.ajax({
            type: 'POST',
            url: "phpmail/charter.php",
            data: { 
                'nombrech': $("#nombrech").val(), 
                'Emailch': $("#Emailch").val(),
                'Phonech': $("#Phonech").val(),
                'fecha': $("#fecha").val()
            },
        }).done(function( data ) {
            var response = JSON.parse(data)
            alert(response.respuesta);
        });
        
        document.getElementById("myForm").reset();
    }
});