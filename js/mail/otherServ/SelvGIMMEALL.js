$("#GIMMEEnv").click(function() {
    // Validamos que los campos esten completos
    if($("#nombreSelv3").val() == "" || 
       $("#EmailSelv3").val() == "" || 
       $("#TelfSelv3").val() == ""){
        alert("Campos incompletos");
    }else{
        // Ejecutamos AJAX
        $.ajax({
            type: 'POST',
            url: "../phpmail/otherServ/SelvGIMMEALL.php",
            data: { 
                'nombreSelv3': $("#nombreSelv3").val(), 
                'EmailSelv3': $("#EmailSelv3").val(), 
                'TelfSelv3': $("#TelfSelv3").val()
            },
        }).done(function( data ) {
            var response = JSON.parse(data)
            alert(response.respuesta);
        });
        
        document.getElementById("myFormGIMME").reset();
    }
});