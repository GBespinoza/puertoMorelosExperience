
$("#botonsnorkEnv").click(function() {
    // Validamos que los campos esten completos
    if($("#nombre").val() == "" || 
       $("#Email").val() == "" || 
       $("#Phone").val() == "" || 
       $("#dateofbirth").val() == "" || 
       $("#box1").val() == "" || 
       $("#result").val() == ""){
        alert("Campos incompletos");
    }else{
        // Ejecutamos AJAX
        $.ajax({
            type: 'POST',
            url: "../phpmail/snork.php",
            data: { 
                'nombre': $("#nombre").val(), 
                'Email': $("#Email").val(), 
                'Phone': $("#Phone").val(), 
                'dateofbirth': $("#dateofbirth").val(), 
                'box1': $("#box1").val(), 
                'result': $("#result").val()
            },
        }).done(function( data ) {
            var response = JSON.parse(data)
            alert(response.respuesta);
        });
        
        document.getElementById("myForm").reset();
    }
});

