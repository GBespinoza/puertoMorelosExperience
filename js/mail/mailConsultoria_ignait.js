// pestaña ¿Eres nuevo
$("#btnconsult").click(function() {
    // Validamos que los campos esten completos
    if($("#consName").val() == "" || 
       $("#consMail").val() == "" || 
       $("#consphone").val() == "" || 
       $("#consmss").val() == ""){
        alert("Campos incompletos");
    }else{
        // Ejecutamos AJAX
        $.ajax({
            type: 'POST',
            url: "phpmail/MailCons_ignait.php",
            data: { 
                'consName': $("#consName").val(), 
                'consMail': $("#consMail").val(), 
                'consphone': $("#consphone").val(),
                'consmss': $("#consmss").val()
            },
        }).done(function( data ) {
            var response = JSON.parse(data)
            alert(response.respuesta);
        });
    }
});
