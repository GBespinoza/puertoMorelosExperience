$("#UnlimitedPass").click(function() {
    // Validamos que los campos esten completos
    if($("#nombreUnlimited").val() == "" || 
       $("#emailUnlimited").val() == "" || 
       $("#telUnlimited").val() == ""){
        alert("Campos incompletos");
    }else{
        // Ejecutamos AJAX
        $.ajax({
            type: 'POST',
            url: "../phpmail/otherServ/UnlimitedPass.php",
            data: { 
                'nombreUnlimited': $("#nombreUnlimited").val(), 
                'emailUnlimited': $("#emailUnlimited").val(), 
                'telUnlimited': $("#telUnlimited").val()
            },
        }).done(function( data ) {
            var response = JSON.parse(data)
            alert(response.respuesta);
        });
        
        document.getElementById("myFormUnlimitedPass").reset();
    }
});
