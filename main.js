$("#changePicture").on("click", function (e) {
    var urlVal = $("#urlPicture").val();
    if (urlVal !== "") {
        $("#picture").attr('src', urlVal);
    } else {
        alert("Please fill in all the inputs!");
    }
});


$("#addSkill").on("click", function (e) {
    e.preventDefault();
    var skillValue = $("#skillValue").val();
    var list = $("#skillList");
    var item = $("<li class='skillItem' style='display:none'>" + skillValue + "</li>");
    if (skillValue !== "" ) {
      list.append(item);
      $(".skillItem").fadeIn(1500);

    } else {
        alert("Please fill in all the inputs!");
    }
  });



$("#addName").on("click", function (e) {
    var mynameVal = $("#myname").val();
    if (mynameVal !== "") {
        $("#name").text(mynameVal);
    } else {
        alert("Please fill in all the inputs!");
    }
});


$("#addTitle").on("click", function (e) {
    var mynameVal = $("#myTitle").val();
    if (mynameVal !== "") {
        $("#title").text(mynameVal);
    } else {
        alert("Please fill in all the inputs!");
    }
});

$("#addDesc").on("click", function (e) {
    var mynameVal = $("#myDesc").val();
    if (mynameVal !== "") {
        $("#desc").text(mynameVal);
    } else {
        alert("Please fill in all the inputs!");
    }
});
