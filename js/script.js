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
    productsList.innerHTML += `<li class="li-product-services"> <a href="#non-product-404-id"> ${servicesProducts[i]} </a> </li>`
}
for (let i = 0; i < saleServicesProducts.length; i++) {
    saleProductsList.innerHTML += `<li class="li-product-services"> <a href="#non-product-404-id"> ${saleServicesProducts[i]} </a> </li>`
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



 

const $popularItemsList = $('.list-popular-items')
const $btnLoadMoreProducts = $('#btn-section-two-load-more')
const $btnMinimizeProducts = $('#btn-section-two-minimize')

const $sectionOpenWhenClick = $('#non-product-404-id')
const $sectionOops = $('#non-product-404-page')
const $mainSection = $('main')
const $sectionOneMain = $('.section-one-homepage')
const $sectionTwoMain = $('.section-two-popular-items')
const $sectionThreeMain = $('.section-three-banner')
const $sectionFourMain = $('.section-four-featured-products')
const $sectionFiveMain = $('.section-five')
const $sectionTwoTitleDiv = $('.section-two-title-div')
const $sectionFilters = $('.section-two-filters')
const $sectionFiltersProductsResults = $('.section-two-p-products-results')
const $btnSectionTwoPopularItems = $('.btn-section-two')
const $sectionSpecificProducts = $('.section-specific-products')
const $sectionShoppingCart = $('.section-shopping-cart')
//small details
const $titleRedirectPage = $('#non-product-title')
const $hr1RedirectPage = $('#non-product-hr1')
const $hr2RedirectPage = $('#non-product-hr2')
const $spanSubtitleRedirectPage = $('#span-subtitle')
const $paragraphFiltersProductsResults = $('#section-two-filters-products-results')
const $sectionTwoTitlePopular = $('#section-two-title')
const $sectionTwoHr1 = $('#section-two-hr1')
const $sectionTwoHr2 = $('#section-two-hr2')
const $OSFThemeLink = $('#osftheme-link')
const $OSFThemeSlash = $('#osftheme-slash')

//Default 
$sectionOpenWhenClick.hide()
$sectionFilters.hide()
$paragraphFiltersProductsResults.hide()
$sectionSpecificProducts.hide()
$OSFThemeLink.hide()
$OSFThemeSlash.hide()
$btnMinimizeProducts.hide()
$sectionShoppingCart.hide()

let newArr = [];

$.getJSON('/data/popular-items.json', (products)=> {
    function displayPopularItems(n) {
        $popularItemsList.html('')
        $.each ( products.slice(0, n), (i)=> {
            //dislaying the first 8 products only 
            $popularItemsList.append(
            `<li>
            <img src="${products[i].src}" class="popular-items-image">
            <p class="p-descr-list-popular-items">${products[i].productName}</p>
            <p class="p-price-list-popular-items">${products[i].productPrice}</p>
            </li>`);    
            
            let $pPrice = $('.p-price-list-popular-items')
            $pPrice.hover( 
                function() {
                    $(this).removeClass('p-price-list-popular-items').addClass('mario').html(`<span id="span1">${products[i].productPrice}</span> <span id="border"></span> <span>BUY NOW</span>`)
                }, 
                function() {
                    $(this).removeClass('mario').addClass('p-price-list-popular-items').html(`${products[i].productPrice}`)
                }
            )
        })
    }

    //DISPLAY THE POPULAR ITEMS IN THE PAGE
    displayPopularItems(8)
    //CREATE BUTTON "LOAD MORE" TO DISPLAY 4 MORE PRODUCTS
    $btnLoadMoreProducts.on('click', ()=>{
        displayPopularItems(12)
        //---
        //CHANGING THE BUTTON LOAD MORE - > BUTTON MINIMIZE TO DISPLAY AGAIN ONLY 8 PRODUCTS
        $btnLoadMoreProducts.hide()
        $btnMinimizeProducts.show()
        $btnMinimizeProducts.on('click', ()=> {
            displayPopularItems(8)
            $btnMinimizeProducts.hide()
            $btnLoadMoreProducts.show()
        } )
        //---
    })



//targets for elements in page
    window.addEventListener("click",function(e) {
        if (e.target.getAttribute('href') === "#non-product-404-id") {
            displaySection404Error()
        } else if ( e.target.getAttribute('href') === "#home") {
            displayHomePage()
        } else if ( e.target.getAttribute('id') === "btn-col1-section-one") {
            console.log('dada')
            displaySectionCategoryServices()
        } else if ( e.target.getAttribute('class') === "p-descr-list-popular-items"  || e.target.getAttribute('class') === "popular-items-image" ) {
            console.log('hihihihihihi')
            displaySpecificProduct()
        } else if ( e.target.getAttribute('href') === '#osftheme') {
            displaySectionCategoryServices()
        } else if ( e.target.getAttribute('id') === 'shoppingcart') {
            displayShoppingCart()
            $('.shopping-cart-items-added').show()
        }
    });
    

    //Giving every li the error page href
    //1
    const $links = $('li a')
    $links.attr('href', '#non-product-404-id')
    //2
    const $ulNavLinks = $('.ul-nav li a')
    $ulNavLinks.attr('href', '#')
    

    //function to display standard home page
    function displayHomePage() {
        $sectionOpenWhenClick.hide()
        $mainSection.show()
        $sectionFilters.hide()
        $sectionOneMain.show()
        $sectionTwoMain.show()
        $sectionTwoMain.css({'background-color': '#262a32', 'margin-top': '30px', 'padding-top': '80px'})//rechange
        $btnSectionTwoPopularItems.css({'background-color': 'transparent', 'margin-top': '30px', 'margin-bottom': '0px'})//rechange
        $sectionTwoTitleDiv.show()
        $sectionThreeMain.show()
        $sectionFourMain.show()
        $sectionFiveMain.show()
        $paragraphFiltersProductsResults.hide()
        $sectionSpecificProducts.hide()
        $sectionTwoTitlePopular.css( {'color': '#ffffff', 'text-transform': 'capitalize'} )
        $sectionTwoHr1.css('border-color', 'grey')
        $sectionTwoHr2.css('border-color', 'grey')
        $btnLoadMoreProducts.show()
        $btnMinimizeProducts.hide()
        $sectionShoppingCart.hide()
        displayPopularItems(8)
    
    }
    
    //function to display the 404 page
    function displaySection404Error() {
        console.log('da')
        $sectionOpenWhenClick.show().css('padding-bottom', '35px')
        $sectionServicesProducts.hide()
        $btnServicesLinkNavbar.removeClass('style-services-link')
        $titleRedirectPage.text('404')
        $hr1RedirectPage.css('background-color', 'gainsboro') 
        $hr2RedirectPage.css('background-color','gainsboro')
        $spanSubtitleRedirectPage.text('404')
        $sectionOops.show()
        $mainSection.hide()
        $OSFThemeLink.hide()
        $OSFThemeSlash.hide()
        $sectionShoppingCart.hide()
    }
    
    //function to display the landing services page
    function displaySectionCategoryServices() {
        $titleRedirectPage.text('Services')
        $spanSubtitleRedirectPage.text('Category Landing Services')
        $hr1RedirectPage.css({'background-color': 'whitesmoke', 'width':'400px'}) 
        $hr2RedirectPage.css({'background-color': 'whitesmoke', 'width':'400px'})
        $sectionOpenWhenClick.show().css('padding-bottom', '0px')
        $sectionOops.hide()
        $sectionFilters.show()
        $sectionOneMain.hide()
        $sectionTwoMain.css({'background-color': '#f1edea', 'margin-top': '0px', 'padding-top': '0px'})//rechange
        $btnSectionTwoPopularItems.css({'background-color': '#84bc22', 'margin-top': '100px', 'margin-bottom': '40px'})//rechange
        $sectionTwoTitleDiv.hide()
        $sectionThreeMain.hide()
        $sectionFourMain.show()
        $sectionFiveMain.hide()
        $paragraphFiltersProductsResults.show()
        $OSFThemeLink.hide()
        $OSFThemeSlash.hide()
        $sectionSpecificProducts.hide()
        displayPopularItems(12)
        $btnLoadMoreProducts.hide()
        $btnMinimizeProducts.show()
        $sectionShoppingCart.hide()
        $btnMinimizeProducts.on('click', function(){
            displayPopularItems(8)
            $btnMinimizeProducts.hide()
            $btnLoadMoreProducts.show()
        })
    }
    
    //function to display a specifig product 
    function displaySpecificProduct() {
        $titleRedirectPage.text('Archi Desk Accesories Pen Cup')
        $spanSubtitleRedirectPage.text(`Archi Desk Accesories Pen Cup`)
        $hr1RedirectPage.css({'background-color': 'gainsboro', 'width':'200px'}) 
        $hr2RedirectPage.css({'background-color': 'gainsboro', 'width':'200px'})    
        $sectionOpenWhenClick.show().css('padding-bottom', '0px')
        $sectionOops.hide()
        $sectionSpecificProducts.show()
        $sectionOneMain.hide()
        $sectionTwoMain.css({'background-color': '#f1edea', 'margin-top': '0px', 'padding-top': '55px'})//rechange
        $sectionTwoTitleDiv.show()
        $sectionTwoTitlePopular.css( {'color': '#45413e', 'text-transform': 'uppercase'} )
        $sectionTwoHr1.css('border-color', 'gray')
        $sectionTwoHr2.css('border-color', 'gray')
        $btnSectionTwoPopularItems.css({'background-color': '#84bc22', 'margin-top': '100px', 'margin-bottom': '40px'})//rechange
        $btnSectionTwoPopularItems.hide()
        $sectionThreeMain.hide()
        $sectionFourMain.hide()
        $OSFThemeLink.show()
        $OSFThemeSlash.show()    
        $sectionFilters.hide()
        $paragraphFiltersProductsResults.hide()
        $sectionShoppingCart.hide()
        displayPopularItems(4)
    }



    function displayShoppingCart() {
        $sectionShoppingCart.show()
        $titleRedirectPage.text('SHOPPING CART')
        $spanSubtitleRedirectPage.text(`Shopping Cart`)
        $hr1RedirectPage.css({'background-color': 'gainsboro', 'width':'360px'}) 
        $hr2RedirectPage.css({'background-color': 'gainsboro', 'width':'360px'})    
        $sectionOpenWhenClick.show().css('padding-bottom', '0px')
        $sectionOops.hide()
        $sectionOneMain.hide()
        $sectionTwoMain.hide()
        $sectionThreeMain.hide()
        $sectionFourMain.hide()
        $sectionFiveMain.hide()
        $OSFThemeLink.hide()
        $OSFThemeSlash.hide()  
        $sectionSpecificProducts.hide()
    }
//end
});





