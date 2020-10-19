$("#submit").on("click", function (e) {
    e.preventDefault();
    var firstName = $("#firstNameInput").val();
    var lastName = $("#lastNameInput").val();
    var phoneNumber = $("#phoneNumberInput").val();
    var email = $("#emailInput").val();
    var age = $("#ageInput").val();
    var birthday = $("#birthdayInput").val();
    var picture = $("#urlPictureInput").val();
    //if (firstName !== "" && lastName !== "" && phoneNumber !== "" && email !== "" && age !== "" && birthday !== ""&& picture !== "") {
        $("#name").text(firstName+" "+lastName);
        $("#phoneNumber").text(phoneNumber);
        $("#email").text(email);
        $("#age").text(age);
        $("#birthday").text(birthday);
        $("#picture").attr('src', picture);
        $("#picture").show();
   // } else {
   //     alert("Please fill all informations");

   // }

});




$("#addSkill").on("click", function (e) {
    e.preventDefault();
    var skillValue = $("#skillValue").val();
    var list = $("#skillList");
    var item = $("<li class='skillItem'>" + skillValue + "</li>");
    if (skillValue !== "" ) {
      list.append(item);
    } else {
        alert("Please put a skill!");
    }
  });


