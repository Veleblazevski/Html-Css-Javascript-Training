    $(".addToCfrom").click(function(e) {
        if ($("#nameEnter").val() === "") {
            alert("enterValidData")
            return;
        }
        if (!IsEmail($("#emailEnter").val() || $("#emailEnter").val() === "")) {
            alert("entervalidEmial")
            return;
        }
        if ($("#mobileEnter").val().length < 9 || $("#mobileEnter").val() === "") {
            alert("enter a 9 digit mobile")
            return;
        } else {
            $("<div>").addClass("row").appendTo($(".data-table"));
            var inputName = $("<input>").addClass("name").val($("#nameEnter").val()).attr("readonly", true).appendTo($(".row:last-child"));
            var inputEmail = $("<input>").addClass("Email").val($("#emailEnter").val()).attr("readonly", true).appendTo($(".row:last-child"));
            var inputMobile = $("<input>").addClass("Mobile").val($("#mobileEnter").val()).attr("readonly", true).appendTo($(".row:last-child"));
            $("<button>").addClass("edit").text("Edit").attr("id", "editMe").bind("click", function() {


                if ($(this).text() == 'Edit') {
                    $(this).parent().find('input').attr("readonly", false).addClass("editClassInput");
                    $(this).text('Done');

                } else {
                    $(this).text('Edit');
                    $(this).parent().find('input').attr("readonly", true).removeClass("editClassInput");
                }

            }).appendTo($(".row:last-child"));
        }

        $("<button>").addClass("showInfo").text("Show Info").attr("id", "sshowInfo").bind("click", function() {
            var getDiv2 = document.getElementById("mobileinfo")
            getDiv2.innerHTML = $(this).prev().prev().prev().prev().val();

            var getDiv1 = document.getElementById("emailinfo")
            getDiv1.innerHTML = $(this).prev().prev().prev().val();

            var getDiv = document.getElementById("nameinfo");
            getDiv.innerHTML = $(this).prev().prev().val();


            $("#showDiv").show().css({
                display: 'grid',
            });
            $("#close").click(function(e) {
                $("#showDiv").css({
                    display: 'none'
                });
            });


        }).appendTo($(".row:last-child"));
        $("<button>").addClass("DeleteData").text("Delete Data").attr("id", "Delete").bind("click", function() {
            $(this).parent().remove();
        }).appendTo($(".row:last-child"));

        $("#nameEnter").val("");
        $("#emailEnter").val("");
        $("#mobileEnter").val("");



        function IsEmail(email) {
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(email)) {
                return false;
            } else {
                return true;
            }
        }


    });
    $('#mobileEnter').bind('keyup paste', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });