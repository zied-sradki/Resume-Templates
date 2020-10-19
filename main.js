$("#submit").on("click", function (e) {
    e.preventDefault();
    var firstName = $("#firstNameInput").val();
    var lastName = $("#lastNameInput").val();
    var phoneNumber = $("#phoneNumberInput").val();
    var email = $("#emailInput").val();

    var age = $("#ageInput").val();
    var birthday = $("#birthdayInput").val();
    var picture = $("#urlPictureInput").val();

        $(".main").show();
        $("#name").text(firstName+" "+lastName);
        $("#phoneNumber").text(phoneNumber);
        $("#email").text(email);
        $("#age").text(age);
        $("#birthday").text(birthday);
        $("#picture").attr('src', picture);
        $("#picture").show();


});




$("#addSkill").on("click", function (e) {
    e.preventDefault();
    var skillValue = $("#skillValue").val();
    var list = $("#skillList");
    var item = $("<li class='skillItem' style='display:none'>" + skillValue + "</li>");
    if (skillValue !== "" ) {
    $(".main").show();
      list.append(item);
      $(".skillItem").fadeIn(1500);

    } else {
        alert("Please fill in all the inputs!");
    }
  });


