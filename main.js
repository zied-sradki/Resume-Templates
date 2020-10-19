$("#changePicture").on("click", function (e) {
    var urlVal = $("#urlPicture").val();
    if (urlVal !== "") {
        $("#picture").attr('src', urlVal);
    } else {
        alert("Please fill in all the inputs!");
    }
});


$("#addMyname").on("click", function (e) {
    var mynameVal = $("#myname").val();
    if (mynameVal !== "") {
        $("#name").text(mynameVal);
    } else {
        alert("Please fill in all the inputs!");
    }
});


