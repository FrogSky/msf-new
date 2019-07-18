<template>
	<div>helloworld
		<form method="POST" enctype="multipart/form-data" id="fileUploadForm">
		<!-- <input type="text" name="extraField"/><br/><br/> -->
		<input type="file" name="crtpicture"/><br/><br/>
		<input type="submit" value="Submit" id="btnSubmit"/>
		</form>
	</div>
</template>
<script>
	$(document).ready(function(){
		$("#btnSubmit").click(function (event) {
        event.preventDefault();
        fire_ajax_submit();
    });

    function fire_ajax_submit() {
		    // Get form
		    var form = $('#fileUploadForm')[0];
		    var data = new FormData(form);
		    console.log($('#fileUploadForm')[0])
		    // data.append("CustomField", "This is some extra data, testing");
		 
		    $("#btnSubmit").prop("disabled", true);
		 
		    $.ajax({
		        type: "POST",
		        enctype: 'multipart/form-data',
		        url: "http://123.56.217.229:8080/uploadCrtPicture.msf",
		        data: data,
		        processData: false, //prevent jQuery from automatically transforming the data into a query string
		        contentType: false,
		        cache: false,
		        timeout: 600000,
		        success: function (data) {
		 	
		            $("#result").text(data);
		            console.log("SUCCESS : ", data);
		            $("#btnSubmit").prop("disabled", false);
		 
		        },
		        error: function (e) {
		 
		            $("#result").text(e.responseText);
		            console.log("ERROR : ", e);
		            $("#btnSubmit").prop("disabled", false);
		 
		        }
		    });
		 
		}
	})
</script>