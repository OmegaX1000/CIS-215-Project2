<!DOCTYPE html>
<html>
    <head>
        <title>Survey: PHP Questions</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js" integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    </head>
    <body>

        <!-- Big takeaways: required keyword, make sure value is in there, feel free to use other attributes! -->

        <form action="project1submit.php" method="post" class="survey">

        <fieldset>

        <label>Enter your email: </label>
        <input type="email" name="email-name" id="email-id" title="Enter Your Email Here... (ex. student01@college.edu)" required>

        <label>Enter your password: </label>
        <input type="password" name="pw-name" id="pw-id" title="Enter your school account password here." required>

        </fieldset>

        <div id = "age-field">
            <label title="Input your age here. Select Betweeen a range.">What age are you? </label>
            <div>
                <label title="Between 0 and 12 years old"> <input type="radio" name="age" id="age-0" value="0" required>
                0-12 </label>
            </div>
            <?php

            for($i=13;$i<65;$i=$i + 5){
                $j = $i + 4;
                print("<div><label title='Between $i and $j years old'><input type='radio' name='age' id='age-$i'value='$i'>
                $i-$j </label></div>");
            }

            ?>
            <div>
                <label title="68 years or older"> <input type="radio" name="age" id="age-68" value="68">
                68+ </label>
            </div>
        </div>

        <br>
    
        <div>
        <select name="gender" id="gender" title="Choose your gender Identity, if you don't want to say then you can say 'Other'">
            <option value="">--Please select your gender--</option>
            <option value="ma">Male</option>
            <option value="fe">Female</option>
            <option value="nb">Nonbinary</option>
            <option value="gf">Genderfluid</option>
            <option value="ag">Agender</option>
            <option value="ot">Choose not to say/Other</option>
        </select>
        </div>

        <div name = "version-field">
            <label> What version of PHP do you use? (only include the main version number) <input type="number" name="version" id="version" min="1", max="9" title="Select what Major version of PHP you use (1 to 9)"required> </label>
        </div>

        <div>
            <div>
                Please answer in 120 characters or fewer.
            </div>
            <label> What is your favorite part of PHP?     
            <input type=text name="favorite" id="favorite" title="Within 120 Characters describe what you like about using PHP."required></label>
            <label> Character Count: <span id = "CharCount">120</span></label>
        </div>

        <button type="submit" name="button-submit-form" id = "button-submit-form-id">Submit</button>

        </form>

        <div><a href='project1data.php'>View data page here</a></div>
        <script src="events.js"></script>  
    </body>
</html>