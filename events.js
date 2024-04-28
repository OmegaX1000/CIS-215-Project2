$('#button-submit-form-id').click(function() {
    var form = document.querySelector("form");
    var email_qst = document.getElementById("email-id").value;
    var pass_qst = document.getElementById("pw-id").value;
    var gender_qst = document.getElementById("gender").value
    var verison_qst = document.getElementById("version").value;
    var favorite_qst = document.getElementById("favorite").value;
    var age_qst = false;

    for(var i = 13; i < 65; i = i + 5)
    {
        var temp = document.getElementById('age-' + i).checked;

        if (temp)
        {
            age_qst = true;
            console.log(age_qst);
            break;
        }
    }

    if (email_qst == "")
    {
        document.getElementById("email-id").style.borderColor = "red";
        document.getElementById("email-id").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("email-id").style.borderColor = "revert";
        document.getElementById("email-id").style.backgroundColor = "revert";
    }

    if (pass_qst == "")
    {
        document.getElementById("pw-id").style.borderColor = "red";
        document.getElementById("pw-id").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("pw-id").style.borderColor = "revert";
        document.getElementById("pw-id").style.backgroundColor = "revert";
    }

    if (age_qst == false)
    {
        document.getElementById("age-field").style.borderColor = "red";
        document.getElementById("age-field").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("age-field").style.borderColor = "revert";
        document.getElementById("age-field").style.backgroundColor = "revert";
    }

    if (gender_qst == "")
    {
        document.getElementById("gender").style.borderColor = "red";
        document.getElementById("gender").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("gender").style.borderColor = "revert";
        document.getElementById("gender").style.backgroundColor = "revert";
    }

    if (verison_qst == "")
    {
        document.getElementById("version").style.borderColor = "red";
        document.getElementById("version").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("version").style.borderColor = "revert";
        document.getElementById("version").style.backgroundColor = "revert";
    }

    if (favorite_qst == "")
    {
        document.getElementById("favorite").style.borderColor = "red";
        document.getElementById("favorite").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("favorite").style.borderColor = "revert";
        document.getElementById("favorite").style.backgroundColor = "revert";
    }
});

$('#favorite').on("keyup", function() {
    var banned_words = ["Damn", "Hell", "Ass", "Cherry", "Pepsi", "Oranges", "Screw You"];
    var favorite_text = document.getElementById("favorite").value;
    var WordDetected = false;

    document.getElementById("CharCount").textContent = 120 - favorite_text.length;
    
    for (var i = 0; i < banned_words.length; i++)
    {
        if (~favorite_text.indexOf(banned_words[i]))
        {
            WordDetected = true;
            break;
        }
    }

    if (WordDetected)
    {
        document.getElementById("favorite").style.borderColor = "red";
        document.getElementById("favorite").style.backgroundColor = "red";
        document.getElementById("button-submit-form-id").disabled = true;
    }
    else
    {
        document.getElementById("favorite").style.borderColor = "revert";
        document.getElementById("favorite").style.backgroundColor = "revert";
        document.getElementById("button-submit-form-id").disabled = false;
    }
});