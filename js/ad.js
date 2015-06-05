//123.59.43.175:5000/clk

//document.write(JSON.stringify(data));

arg = "{\"adunit\": {        \"type\": 1,        \"floor\": 1.6,        \"cid\": \"1101201\",        \"param\": {            \"count\": 3        }     },    \"device\": {        \"os\": \"ANDROID\",        \"os_version\": \"4.4.4\",        \"resolution_w\": 720,        \"resolution_h\": 1080,        \"network_id\": 70120,        \"device_type\": 2,        \"device_id\": \"6C0590AFF652982CEB7B3F7D8214C508\",        \"device_id_enc\": 1,        \"delected_language\": \"zh_CN\",        \"brand\": \"xiaomi\",        \"model\": \"m2\"    },    \"geo\": {        \"country\": \"asd\",        \"city\": \"asdf\",        \"latitude\": 102.153585,        \"longtitude\": 10.5544    },    \"user_id\": \"bangbang2015001\",    \"is_test\": 1,    \"cur\": \"CNY\",    \"sdk\": \"bangbang\"}"

jsonObj = JSON.parse(arg)
xmlhttp = new XMLHttpRequest()
xmlhttp.open("POST","http://123.59.43.175:5000/clk/", true);
//xmlhttp.open("POST","http://192.168.1.246:5000/clk/", true);
xmlhttp.setRequestHeader("Content-Type", "application/json");
xmlhttp.onreadystatechange = function(){
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		jsonResponse = JSON.parse(xmlhttp.responseText);
		display(jsonResponse);
	}
};

xmlhttp.send(JSON.stringify(jsonObj)); 

function display(jsonResponse){
	adms = jsonResponse.adm;

	var htmlPrefix = "<html><head><title></title></head><body style='padding:0px;margin:0px;'>";
	var htmlSuffix = "<![if !IE]><script type='text/javascript'>document.close();</script><![endif]></body></html>";
	document.write(htmlPrefix);

		var adm = adms[0].data;
		imgSrc = adm.img;
		text = adm.text;
		document.write("<div><img src='" + imgSrc + "'><p>" + text + "</p></div>");

	document.write(htmlSuffix);

}