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
    productsList.innerHTML += `<li> <a href=""> ${servicesProducts[i]} </a> </li>`
}
for (let i = 0; i < saleServicesProducts.length; i++) {
    saleProductsList.innerHTML += `<li> <a href=""> ${saleServicesProducts[i]} </a> </li>`
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

$formLoginSection.hide()

$userLoginIcon.on('click', ()=> {
    $formLoginSection.fadeIn(800)
})

//When user click "forget password" -> delete password from input 
//When user click on the eye from input, show the password

const $formInputPassword = $('#form-input-password')
const $forgetPassword = $('#forget-password')
const $togglePassword = $('#togglePassword')


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
const $createAccount = $('#create-account')
const $formRegisterSection = $('.form-create-account-box')

$formRegisterSection.hide()

$createAccount.click(()=>{
    $formLoginSection.hide()
    $formRegisterSection.fadeIn(500)
})








//CLOSE MODALS WHEN CLICK OUTSIDE OF THEM !!!!!!!!!!HELP
// const $formsModal = $('.modal')

// function closeModel() {
//     $('html').on('click', (e)=> {
//         if ( $(e.target).hasClass('modal') ) {
//             $formsModal.show()
//             if ( !$(e.target).hasClass('modal') ) {
//                 $formsModal.hide()
                
//             }   
//         } 
//     })    
// }



document.addEventListener("click", function(event) {
    if ( !event.target.closest(".modal") ) {
        closeModal()
    }
})
  
  function closeModal() {
    document.querySelector(".modal").style.display = "none"
  }
