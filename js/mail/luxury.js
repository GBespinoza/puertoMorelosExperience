$("#botonluxEnv").click(function() {
    // Validamos que los campos esten completos
    if($("#nombre").val() == "" || 
       $("#Email").val() == "" || 
       $("#Phone").val() == "" || 
       $("#dateofbirth").val() == "" || 
       $("#per_1").val() == "" || 
       $("#per_2").val() == "" || 
       $("#ItemsTotal").html() == ""){
        alert("Campos incompletos");
    }else{
        // Ejecutamos AJAX
        $.ajax({
            type: 'POST',
            url: "../phpmail/luxury.php",
            data: { 
                'nombre': $("#nombre").val(), 
                'Email': $("#Email").val(), 
                'Phone': $("#Phone").val(), 
                'dateofbirth': $("#dateofbirth").val(), 
                'per_1': $("#per_1").val(), 
                'per_2': $("#per_2").val(), 
                'ItemsTotal': $("#ItemsTotal").html()
            },
        }).done(function( data ) {
            var response = JSON.parse(data)
            alert(response.respuesta);
        });
        
        document.getElementById("myForm").reset();
    }
});
