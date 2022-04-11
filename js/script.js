const servicesProducts = [
    'Accesories', 'Alcohol', 'Art', 'Books', 'Drink', 'Electronics', 'Flowers & Plants', 'Food', 'Gadgets', 'Garden', 'Grocery', 'Home', 
    'Jewelry', 'Kids & Baby', "Men's fashion", 'Mobile', 'Motorcyles', 'Movies', 'Music', 'Office', 'Pets', 'Romantic', 'Sport', 'Toys'
]

const saleServicesProducts = [
    'Accesories', 'Alcohol', 'Art', 'Books', 'Drink', 'Electronics', 'Flowers & Plants', 'Food'
]


const productsList = document.querySelector('.products-list')
const saleProductsList = document.querySelector('.products-sale-list')

// Rendering all product items in the html
for (let i = 0; i < servicesProducts.length; i++) {
    productsList.innerHTML += `<li class="li-product-services"> <a href="#non-product-404-page"> ${servicesProducts[i]} </a> </li>`
}
for (let i = 0; i < saleServicesProducts.length; i++) {
    saleProductsList.innerHTML += `<li class="li-product-services"> <a href="#non-product-404-page"> ${saleServicesProducts[i]} </a> </li>`
}




// Making the section products hide/show when user click on services-link
// When user click services-link style it 
const $btnServicesLinkNavbar = $('#services-navbar')
const $sectionServicesProducts = $('.section-services-products')

//Hiding the section
$sectionServicesProducts.hide()

$btnServicesLinkNavbar.on('click', ()=>{
    $btnServicesLinkNavbar.toggleClass('style-services-link')
    $sectionServicesProducts.toggle(700)
})


//Inject current year in the footer section
let currentYear = new Date().getFullYear()
const $spanYearFooter = $('#year-footer')
$spanYearFooter.text(currentYear)



//FORM LOGIN SECTION
//Adding an event when click on user-login icon from navbar open the  Login pop-up
const $formLoginSection = $('.form-login-box')
const $userLoginIcon = $('#user-login-register');

const $formInputPassword = $('#form-input-password')
const $forgetPassword = $('#forget-password')
const $togglePassword = $('#togglePassword')
const $createAccount = $('#create-account')
const $formRegisterSection = $('.form-create-account-box')
//selector for form and register form
const modal = document.querySelector('.modal')

$formLoginSection.hide()
$formRegisterSection.hide()

$userLoginIcon.on('click', ()=> {
    $formLoginSection.show()
    modal.style.display = 'block'
    $formRegisterSection.hide()
    $('#oops').css('zIndex', 0)
})


//When user click "forget password" -> delete password from input 
//When user click on the eye from input, show the password
$forgetPassword.on('click', ()=> {
    $formInputPassword.val('')
})

//DONT KNOW WHY THIS IS NOT WORKING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// $togglePassword.click(function() {
//     if( type === 'password') {
//         $formInputPassword.attr('type', 'text')
//     } else {
//         $formInputPassword.attr('type', 'password')
//     }
// })


$togglePassword.click(function(){
    if( $(this).hasClass('password') ) {
        $formInputPassword.attr('type', 'text')
        $(this).removeClass('password').addClass('text')
    } else if ( $(this).hasClass('text') ) {
        $formInputPassword.attr('type', 'password')
        $(this).removeClass('text').addClass('password')
    }
})

//Making the p with no account displayng a new register form when clicked
$createAccount.click(()=>{
    $formLoginSection.hide()
    $formRegisterSection.show()
})

//Making the modal to be displayed in the background and the login/register form to be hidden when click on overlay
window.addEventListener('click', clickCloseModal)
window.addEventListener('keydown', keypressCloseModal)

function clickCloseModal(e) {
    if ( e.target === modal ) {
        $formLoginSection.hide()
        modal.style.display = 'none'
        $('#oops').css('zIndex', 1)
    }
}

function keypressCloseModal(e) {
    if ( e.key === 'Escape') {
        $formLoginSection.hide()
        modal.style.display = 'none'
        $('#oops').css('zIndex', 1)
    }
}




const $nonProductSection = $('.non-product-404')
$nonProductSection.hide()


window.addEventListener("click",function(e) {
    if (e.target.getAttribute('href') == "#non-product-404-page") {
      console.log('da')
      $nonProductSection.show()
      $sectionServicesProducts.hide()
      $btnServicesLinkNavbar.removeClass('style-services-link')
    } else if ( e.target.getAttribute('href') == "#home") {
        $nonProductSection.hide()
    }
});




const $links = $('li a')
$links.attr('href', '#non-product-404-page')
