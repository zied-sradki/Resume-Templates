$("#submit").on("click", function (e) {
    e.preventDefault();
    var firstName = $("#firstNameInput").val();
    var lastName = $("#lastNameInput").val();
    var phoneNumber = $("#phoneNumberInput").val();
    var email = $("#emailInput").val();
    var adresse = $("#adresseInput").val();

    var age = $("#ageInput").val();
    var birthday = $("#birthdayInput").val();
    var picture = $("#urlPictureInput").val();
    if (firstName !== "" && lastName !== "" && phoneNumber !== "" && email !== "" && age !== "" && birthday !== ""&& picture !== "") {
        $("#name").text(firstName+" "+lastName);
        $("#contact").show();
        $("#phoneNumber").text("Number: "+phoneNumber);
        $("#email").text("Email: " + email);
        $("#adresse").text("Adresse: " + adresse);
        $("#personal").show();
        $("#age").text("Age :"+age);
        $("#birthday").text("Birthday :" + birthday);
        $("#picture").attr('src', picture);
        $("#picture").show();
    } else {
        alert("Please fill all informations");
    }

});




$("#addSkill").on("click", function (e) {
    e.preventDefault();
    var skillValue = $("#skillValue").val();
    var list = $("#skillList");
    var item = $("<li class='skillItem'>" + skillValue + "</li>");
    if (skillValue !== "" ) {
        $("#skills").show();
        list.append(item);
    } else {
        alert("Please put a skill!");
    }
  });


