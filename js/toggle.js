
function toggleSidebar(){
	var drawer=document.getElementsByTagName("sidebar")[0];
	if(drawer.getAttribute("enabled")==="true"){
		drawer.setAttribute("enabled" ,"false");
	
	}
	else{
		drawer.setAttribute("enabled","true");
		
	}
}

