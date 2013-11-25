function change_href(elt, hrefdest) {
    var oldhref = $(hrefdest).attr('href');
    // var mode = /flash[a-z0-9]*/.match($(elt).val());
    var str = "";
    var mode = $(elt).val();
	
    $(elt).change(function (){
	$(hrefdest).attr('href',(oldhref + " " + mode));
});
};
