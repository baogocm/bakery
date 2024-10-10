// Validate form


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
        document.body.style.overflow = "auto";
    }, 1000); // 3 seconds
});

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function(){
        introJs().start();
    },2000);
});


// Cập nhật giá trị cho ô tính tiền

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


$(document).ready(function() {
    var cash = parseFloat($('#cash').text())
    // Lắng nghe sự kiện khi giá trị của ô nhập liệu thay đổi
    $('#numberInput').on('input', function() {
        // Lấy giá trị từ ô nhập liệu
        var inputValue = $(this).val();
        // Ghi giá trị vào thẻ span
        var kq=0
        $('#numberOutput').text(inputValue);
         kq = inputValue*cash
        $('#cash').text(formatNumber(kq.toFixed(3)));

    });
});

$("#validate_form").validate({
    rules:{
        fullname:{
            minlength:5
        },
        email:{
            email:true
        },
        phone:{
            number:true,
            minlength:10,
            maxlength:11
        },

        textarea:{
            required:true
        },
        // password:{
        //     required:true,
        //     minlength: 8,
        // }

    },
    messages:{
        fullname:{
            required:"Vui lòng nhập tên của bạn",
            minlength:"Ít nhất 5 kí tự"
        },
        email:{
            required:"Vui lòng nhập email của bạn",
            email: "Email không hợp lệ"
        },
        phone:{
            required:"Vui lòng nhập SĐT của bạn",
            minlength:"SĐT phải có ít nhất 10 số",
        },
        password:{
            required: "Vui lòng nhập mật khẩu",
           
            minlength: "Mật khẩu phải có ít nhất 8 ký tự"        
        }
    },
    submitHandler: function(form) {
        form.submit(); 
        window.location.href = "../index.html"; //chuyển trang
    }

});

// Bánh mì


function showImage(id) {
    // Hide all images
    const images = document.querySelectorAll('.product-image');
    images.forEach(image => {
        image.classList.remove('active');
    });

    // Show the selected image
    const selectedImage = document.getElementById(id);
    selectedImage.classList.add('active');
}
