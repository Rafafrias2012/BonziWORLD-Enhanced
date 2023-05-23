$(document).ready(function(){
	if(window.location.path == "/") {
		$.getJSON("./dist/json/version.json", function(result){
			$.each(result, function(i, field){
				$("#login_version").text("Version " + field + "");
				$("#ver_log").text("Version " + field + "");
			});
		});
	} else {
		$.getJSON("../../dist/json/version.json", function(result){
			$.each(result, function(i, field){
				$(".ver").text("BonziWORLD Enhanced  v" + field + " ");
			});
		});
	}
});
