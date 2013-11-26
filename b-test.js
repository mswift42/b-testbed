function change_href(elt, hrefdest) {
    var oldhref = $(hrefdest).attr('href');
    // var mode = /flash[a-z0-9]*/.match($(elt).val());
    var str = "";
    var mode = $(elt).attr("selected");//.match(/flash[a-z0-9]*/);
	
    $(elt).change(function (){
	$(hrefdest).attr('href',(oldhref + " " + mode));
});
};
function man_href(elt,hrefdest) {
    var oldhref = document.getElementById(hrefdest);
    var hr = oldhref.innerHTML;
    var e = document.getElementById(elt);
    var strUser = e.options[e.selectedIndex].text;
    hrefdest.innerHTML = oldhref + " " + strUser;
    };
    
