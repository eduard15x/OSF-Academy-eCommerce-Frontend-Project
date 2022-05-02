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
    productsList.innerHTML += `<li class="li-product-services"><a>${servicesProducts[i]}</a></li>`
}
for (let i = 0; i < saleServicesProducts.length; i++) {
    saleProductsList.innerHTML += `<li class="li-product-services"><a>${saleServicesProducts[i]}</a></li>`
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
//toggle PASSWORD
$togglePassword.on('click', ()=> {
    if( $formInputPassword.attr('type') === 'password' ) {
        $formInputPassword.attr('type', 'text')
        console.log('type - text')
    } else {
        $formInputPassword.attr('type', 'password')
        console.log('type - password')
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
        $('#oops').css('z-index', '10')
    }
}

function keypressCloseModal(e) {
    if ( e.key === 'Escape') {
        $formLoginSection.hide()
        modal.style.display = 'none'
        $('#oops').css('z-index', '10')
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
const $priceSpecificProduct = $('#specific-product-price')
const $inputSpecificProductQuantity = $('#input-specific-product-quantity')
const $decrementInputSpecificProductQuantiy = $('#decrement-input-specific-product-quantity')
const $incrementInputSpecificProductQuantiy = $('#increment-input-specific-product-quantity')

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

let cartProductsList = []
let wishlistProductsList = []

$.getJSON('/data/popular-items.json', (products)=> {
    function displayPopularItems(n) {
        $popularItemsList.html('')
        $.each ( products.slice(0, n), (i)=> {
            //dislaying the first 8 products only 
            $popularItemsList.append(
            `<li class="li-item-product-from-ul">
                <img src="${products[i].src}" class="popular-items-image" alt="${products[i].productName}" id="${products[i].productPrice}">
                <button class="add-product-to add-to-cart" id="add-product-to-cart"> <i class="fa-solid fa-plus"></i> </button>
                <button class="add-product-to add-to-wishlist" id="add-product-to-wishlist"> <i class="fa-solid fa-heart"></i> </button>
                <div class="list-popular-items-div-details" id="${products[i].src}">
                    <p class="p-descr-list-popular-items" id="${products[i].productPrice}">${products[i].productName}</p>
                    <p class="p-price-list-popular-items">$ ${products[i].productPrice}</p>
                </div>
            </li>`);    
            
            let $pPrice = $('.p-price-list-popular-items')
            $pPrice.hover( 
                function() {
                    $(this).removeClass('p-price-list-popular-items').addClass('mario').html(`<span id="span1">$${products[$(this).parent().parent().index()].productPrice}</span> <span id="border"></span> <span class="buy-now-from-product">BUY NOW</span>`)
                    const $btnBuyNowFromProduct = $('.buy-now-from-product')

                    $btnBuyNowFromProduct.on('click', ()=> {
                        let currentIndex = $(this).parent().parent().index()

                        //Look up
                        cartProductsList.push( { src: products[currentIndex].src, productName: products[currentIndex].productName, productPrice: products[currentIndex].productPrice, quantity: products[currentIndex].quantity } )
                        console.log(wishlistProductsList)

                        let arrayCartNew = [...new Map(cartProductsList.map(item => [item.productName, item])).values()]
                        //create unique array -
                        console.log(arrayCartNew)
                        $quantityCartProducts.html(arrayCartNew.length)
                    })
                }, 
                function() {
                    $(this).removeClass('mario').addClass('p-price-list-popular-items').html(`$${products[$(this).parent().parent().index()].productPrice}`)
                }                
            )



            

            let $image = $('.popular-items-image')
            let $detailsProduct = $('.list-popular-items-div-details')
            let $buttonsAddProducts = $('.add-product-to')
            $buttonsAddProducts.hide()
            $image.hover(
                ()=>{ showButtons() }
                ,
                ()=>{ hideButtons() }
            )

            $buttonsAddProducts.hover(
                ()=>{ showButtons() }
                ,
                ()=>{ hideButtons() }
            )

            function showButtons() {
                $buttonsAddProducts.show()
                $image.css('opacity', '0.1'),
                $detailsProduct.css('opacity', '0.1')
            }

            function hideButtons() {
                $buttonsAddProducts.hide()
                $image.css('opacity', '1'),
                $detailsProduct.css('opacity', '1')
            }
        })
        
        


        //---------------
        const btnAddProductToCart = document.getElementsByClassName('add-to-cart')
        const btnAddProductToWishlist = document.getElementsByClassName('add-to-wishlist')
       
        
            

        const ulShoppingCartAdded = document.querySelector('.shopping-cart-items-added')

        for ( let i = 0 ; i < btnAddProductToCart.length; i++) {
            //1---
            btnAddProductToCart[i].addEventListener('click', ()=> {
                cartProductsList.push( { src: products[i].src, productName: products[i].productName, productPrice: products[i].productPrice, quantity: products[i].quantity } )
                console.log(cartProductsList)
                
                
                let arrayCartNew = [...new Map(cartProductsList.map(item => [item.productName, item])).values()]
                console.log(arrayCartNew)
                $quantityCartProducts.html(arrayCartNew.length)

                ulShoppingCartAdded.innerHTML = ''
                for ( let i = 0 ; i < arrayCartNew.length; i++) {
                    ulShoppingCartAdded.innerHTML += 
                    `
                    <li>
                        <img src="${arrayCartNew[i].src}" class="img-items-added">
                        <div class="shopping-cart-items-added-details-product">
                            <p>${arrayCartNew[i].productName}</p>
                            <p>$ ${arrayCartNew[i].productPrice}</p>
                        </div>
                        <input type="number" value="${arrayCartNew[i].quantity}" class="item-added-quantity">
                        <p class="shopping-cart-quantity-operators"> <span class="decrement-quantity"><i class="fa-solid fa-minus "></i></span> <span class="increment-quantity"><i class="fa-solid fa-plus "></i></span> </p>
                        <p class="item-added-price">$${arrayCartNew[i].productPrice},00</p>
                        <button class="cart-delete-item-added">X</button>
                    </li>
                    `

                    
                    
                }


                
               


                

                changeQuantityOfProductsAdded()
                //create function that changes quantity
                function changeQuantityOfProductsAdded() {

                    let subtotalPrice = 0
                    let totalCartPrice = 0
                    let cartInputProductQuantity = document.querySelectorAll('.item-added-quantity')
                    let decrementCartProductQuantity = document.querySelectorAll('.decrement-quantity')
                    let incrementCartProductQuantity = document.querySelectorAll('.increment-quantity')
                    let productAddedTotalPrice = document.querySelectorAll('.item-added-price')
                    let cartSubtotalPrice = document.getElementById('cart-subtotal-price')
                    let cartTotalPrice = document.getElementById('total-price-shopping-cart')
                    
                    
                    for ( let i = 0 ; i < arrayCartNew.length; i++) {
                        //1
                        incrementCartProductQuantity[i].addEventListener('click', ()=> {
                            cartInputProductQuantity[i].value++;
                            productAddedTotalPrice[i].textContent = ` $${cartInputProductQuantity[i].value * arrayCartNew[i].productPrice},00 `
                        })
                        //2
                        decrementCartProductQuantity[i].addEventListener('click', () => {
                            if (cartInputProductQuantity[i].value > 1) {
                                cartInputProductQuantity[i].value--
                                productAddedTotalPrice[i].textContent = ` $${cartInputProductQuantity[i].value * arrayCartNew[i].productPrice},00 `
                            }
                            
                        })
                        
                        subtotalPrice += arrayCartNew[i].productPrice * cartInputProductQuantity[i].value
                        cartSubtotalPrice.textContent = `$${subtotalPrice}`

                        
                    }

                    let inputCartDelivery = document.querySelectorAll('.input-cart-delivery')
                    for ( let i = 0; i < inputCartDelivery.length; i++) {
                        inputCartDelivery[i].addEventListener('click', () => {
                            if ( inputCartDelivery[i].checked ) {
                                totalCartPrice = subtotalPrice + parseInt(inputCartDelivery[i].value)
                                cartTotalPrice.textContent = `$${totalCartPrice}`
                            }
                        })
                    }
                }
            })
            //2---
            
            //display wishlist list
            const $btnHeartNavbar = $('#wishlistIcon')
            const $wishlistSection = $('.section-wishlist')
            const $btnCloseWishlist = $('#close-wishlist')
            const wishlistUl = document.querySelector('.wishlist-ul')

            $wishlistSection.hide()

            $btnHeartNavbar.on('click', ()=> {
                $wishlistSection.show()
            })

            $btnCloseWishlist.on('click', ()=> {
                $wishlistSection.hide()
            })

            btnAddProductToWishlist[i].addEventListener('click', ()=> {
                wishlistProductsList.push( { productName: products[i].productName, productPrice: products[i].productPrice, src: products[i].src } )
                console.log(wishlistProductsList)

                let arrayWishlistNew = [...new Map(wishlistProductsList.map(item => [item.productName, item])).values()]
                console.log(arrayWishlistNew)
                $quantityWishlistProducts.html(arrayWishlistNew.length)

                wishlistUl.innerHTML = ''
                for ( let i = 0 ; i < arrayWishlistNew.length; i++) {
                    wishlistUl.innerHTML += 
                    `
                    <li class="li-wishlist">
                        <img src="${arrayWishlistNew[i].src}" class="img-items-added">
                        <p class="name-product-wishlist">${arrayWishlistNew[i].productName}</p>
                        <p class="price-product-wishlist">$ ${arrayWishlistNew[i].productPrice}</p>
                    </li>
                    `
                }
            })

            
        }

        

        
      
    }


    const $quantityWishlistProducts = $('#quantity-wishlist-products')
    const $quantityCartProducts = $('#quantity-cart-products')
    $quantityWishlistProducts.html(`${wishlistProductsList.length}`)
    $quantityCartProducts.html(`${cartProductsList.length}`)


    function removeBtn() {
        const btnRemoveProducts = document.querySelectorAll('.cart-delete-item-added')
        const btnRemoveProduct = Array.from(btnRemoveProducts)
        for ( let i = 0; i < btnRemoveProduct.length; i++) {
            btnRemoveProduct[i].addEventListener('click', (e)=> {
                e.target.parentElement.remove()
                let indexOfBtn = btnRemoveProduct.indexOf(btnRemoveProduct[i])
                btnRemoveProduct.splice(indexOfBtn, 1)
                $quantityCartProducts.html(btnRemoveProduct.length)
            })
            
        }
    }
    
    

    //DISPLAY THE POPULAR ITEMS IN THE PAGE
    displayPopularItems(8)
    //CREATE BUTTON "LOAD MORE" TO DISPLAY 4 MORE PRODUCTS
    $btnLoadMoreProducts.on('click', ()=>{
        displayPopularItems(12)
        changeLastItem()
        //---
        //CHANGING THE BUTTON LOAD MORE - > BUTTON MINIMIZE TO DISPLAY AGAIN ONLY 8 PRODUCTS
        $btnLoadMoreProducts.hide()
        $btnMinimizeProducts.show()
        $btnMinimizeProducts.on('click', ()=> {
            displayPopularItems(8)
            changeLastItem()
            $btnMinimizeProducts.hide()
            $btnLoadMoreProducts.show()
        } )
        //---
    })

    //TASK 5.1 CAROUSEL BANNER - HOME PAGE 
    const bannerImages = [ 
        "/images/home-page-photos/layer1homepage.png",
        "/images/home-page-photos/layer2homepage.png",
        "/images/home-page-photos/layer3homepage.png"
    ]

    const imgHomepage = document.querySelector('#image-section-home-page')
    const dotsHomepage = document.getElementsByClassName('dot-section-homepage')
    const $infoTextHomepage = $('.info-text-section-one-homepage')

    let slideIndexHomepage = 0
    showSlideHomepage(slideIndexHomepage)

    function currentSlideHomepage(n) {
        showSlideHomepage(slideIndexHomepage = n)
    }


    function showSlideHomepage(n) {
        if ( n > bannerImages.length) {
            slideIndexHomepage = 0
        }
        if( n < 0) {
            slideIndexHomepage = bannerImages.length
        }
        if ( n === 0 ) {
            $infoTextHomepage.css({'align-items': 'flex-start', 'margin-left': '25px', 'margin-right': '0px', 'text-align': 'left'})
        }
        if ( n === 1 ) {
            $infoTextHomepage.css({'align-items': 'center', 'margin-left': '0px', 'margin-right': '0px', 'text-align': 'center' })
        }
        if ( n === 2 ) {
            $infoTextHomepage.css({'align-items': 'flex-end', 'margin-left': '0px', 'margin-right': '20px', 'text-align': 'right'})
        }
        // for ( let i = 0; i < bannerImages.length; i ++) {
        //     // imgHomepage.src = bannerImages[i]
        // }
        for ( let i = 0; i < dotsHomepage.length; i++) {
            dotsHomepage[i].className = dotsHomepage[i].className.replace('dot-active', '')
            dotsHomepage[i].addEventListener('click', ()=> {
                currentSlideHomepage(i)
            })
        }
        imgHomepage.src = bannerImages[slideIndexHomepage]
        dotsHomepage[slideIndexHomepage].className += ' dot-active'

}

    //TASK 5.4 FEATURED PRODUCTS - CHANGE SLIDES WITH PREV/NEXT BUTTONS and AUTO CHANGE 
    const listFeaturedProducts = document.querySelector('.list-featured-products')
    const btnPrevFeaturedProducts = document.querySelector('#btn-prev-featured-products')
    const btnNextFeaturedProducts = document.querySelector('#btn-next-featured-products')
    listFeaturedProducts.innerHTML = ''
    let startFeaturedProduct = 0
    let lengthForFeaturedProductCarousel = startFeaturedProduct + 4
    
    displayFeaturedProducts(startFeaturedProduct,lengthForFeaturedProductCarousel)

    function displayFeaturedProducts(startFeaturedProduct, lengthForFeaturedProductCarousel) {
        for ( let i = startFeaturedProduct; i < lengthForFeaturedProductCarousel; i++) {    
            listFeaturedProducts.innerHTML += 
            `
                <li class="fade-featured-products">
                    <img src="${products[i].src}">
                    <p class="p-descr-list-featured-products">${products[i].productName}</p>
                    <p class="p-subtitle-list-featured-products">$ ${products[i].productPrice}</p>
                </li>
            `
        }
    }

    //btn prev 
    btnPrevFeaturedProducts.addEventListener('click', ()=>{
        listFeaturedProducts.innerHTML = ''
        if ( startFeaturedProduct === 0) {
            startFeaturedProduct = 8
            lengthForFeaturedProductCarousel = startFeaturedProduct + 4
        } else {
            startFeaturedProduct -= 4
            lengthForFeaturedProductCarousel = startFeaturedProduct + 4
        }
        displayFeaturedProducts(startFeaturedProduct, lengthForFeaturedProductCarousel)
    })
    //btn next
    btnNextFeaturedProducts.addEventListener('click', ()=> {
        listFeaturedProducts.innerHTML = ''
        if ( startFeaturedProduct === 8) {
            startFeaturedProduct = 0
            lengthForFeaturedProductCarousel = startFeaturedProduct + 4
        } else {
            startFeaturedProduct +=4;
            lengthForFeaturedProductCarousel = startFeaturedProduct + 4
        }
        displayFeaturedProducts(startFeaturedProduct, lengthForFeaturedProductCarousel)
    })

    //function to auto-change in carousel slides every 5 seconds
    function autoChangeSlides() {
        listFeaturedProducts.innerHTML = ''
        if ( startFeaturedProduct === 8) {
            startFeaturedProduct = 0
            lengthForFeaturedProductCarousel = startFeaturedProduct + 4
        } else {
            startFeaturedProduct +=4;
            lengthForFeaturedProductCarousel = startFeaturedProduct + 4
        }
        displayFeaturedProducts(startFeaturedProduct, lengthForFeaturedProductCarousel)
        setTimeout(autoChangeSlides, 5000)
    }
    autoChangeSlides()

//targets for elements in page
    window.addEventListener("click",function(e) {
        if (e.target.getAttribute('href') === "#non-product-404-id") {
            displaySection404Error()
        } else if ( e.target.getAttribute('href') === "#home") {
            displayHomePage()
        } else if ( e.target.getAttribute('id') === "btn-col1-section-one") {
            console.log('dada')
            displaySectionCategoryServices()
        } else if ( e.target.getAttribute('class') === "popular-items-image" ) {
            $titleRedirectPage.text( e.target.alt)
            $spanSubtitleRedirectPage.text(e.target.alt)
            $priceSpecificProduct.text(`$${e.target.id}`)
            $mainSpecificProductImage.attr('src', '').attr('src', `${e.target.src}`)
            quantitySpecificProductInput(e)
            displaySpecificProduct()
            
        } else if ( e.target.getAttribute('class') === 'p-descr-list-popular-items') {
            $titleRedirectPage.text( e.target.textContent)
            $spanSubtitleRedirectPage.text(e.target.textContent)
            $priceSpecificProduct.text(`$${e.target.id}`)
            console.log(typeof(parseInt(e.target.id)))
            $mainSpecificProductImage.attr('src', '').attr('src', `${e.target.parentNode.id}`)
            quantitySpecificProductInput(e)
            displaySpecificProduct()   
            
        } else if ( e.target.getAttribute('href') === '#osftheme') {
            displaySectionCategoryServices()
        } else if ( e.target.getAttribute('id') === 'shoppingcart') {
            displayShoppingCart()
            removeBtn()
            $('.shopping-cart-items-added').show()
        }
    });

    
    let quantitySpecificProduct = 1
    const $titleRedirectPage = $('#non-product-title')
    const $priceSpecificProduct = $('#specific-product-price')
    const $inputSpecificProductQuantity = $('#input-specific-product-quantity')
    const $decrementInputSpecificProductQuantiy = $('#decrement-input-specific-product-quantity')
    const $incrementInputSpecificProductQuantiy = $('#increment-input-specific-product-quantity')

    function quantitySpecificProductInput(x) {
        $decrementInputSpecificProductQuantiy.on('click', ()=> {
            if ( $inputSpecificProductQuantity.val() > 1) {
                quantitySpecificProduct--
                $inputSpecificProductQuantity.val(quantitySpecificProduct)
                $priceSpecificProduct.text(`$${parseInt(x.target.id) * parseInt($inputSpecificProductQuantity.val() )}`)
            }
        })
    
        $incrementInputSpecificProductQuantiy.on('click', ()=> {
            quantitySpecificProduct++
            console.log(quantitySpecificProduct)
            $inputSpecificProductQuantity.val(quantitySpecificProduct)
            $priceSpecificProduct.text(`$${parseInt(x.target.id) * parseInt($inputSpecificProductQuantity.val() )}`)
        })
    }
//add function in section specific-product for 'read more' link when click to display full description and not only 100 characters
    const paragraphDescription = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas'
    const pDescr = document.querySelector('#specific-product-descr')
    const readMore = document.querySelector('#readmore-link')
    pDescr.textContent = paragraphDescription.substring(0, 100)

    readMore.addEventListener('click', ()=> {
        pDescr.textContent = paragraphDescription.substring(0, paragraphDescription.length)
    })

    //Giving every li the error page href
    //1
    const $links = $('.categoriest-footer-list a')
    $links.attr('href', '#non-product-404-id')
    //2
    const $ulNavLinks = $('.ul-nav li a')
    $ulNavLinks.attr('href', '#')
    //3
    const $links2 = $('.services-products li a')
    $links2.attr('href', '#non-product-404-id')

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
        changeLastItem()
    }
    //function to display the 404 page
    function displaySection404Error() {
        console.log('da')
        $sectionOpenWhenClick.show().css('padding-bottom', '35px')
        $sectionServicesProducts.hide()
        $btnServicesLinkNavbar.removeClass('style-services-link')
        $titleRedirectPage.text('404')
        $hr1RedirectPage.css({'background-color': 'gainsboro', 'width':'400px'}) 
        $hr2RedirectPage.css({'background-color': 'gainsboro', 'width':'400px'})    
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
        changeLastItem()
    }
    //function to display a specifig product 
    function displaySpecificProduct() {
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

    changeLastItem()
    function changeLastItem() {
        $('.li-item-product-from-ul').last().html(
            `
            <img src="/images/products/popular/product3.png" id="last-popular-item-img">
            <div class="li-last-product-div">
                <p id="last-item-p1">My dragons are misbehaving again. Unbelieveable!</p>
                <p id="last-item-p2"> <span id="span-last-item-p2"> <i class="fa-solid fa-user-check"></i></span>5H AGO</p>
            </div>
            `
        ).css({'background-color': '#ffffff', 'height': '360px' , 'background-image': 'linear-gradient(to top, #675b99 0%, #dc5987 100%)'}).addClass('hide-last-product')
        $('#last-popular-item-img').css({'height': '360px' ,'opacity': '0.1'})    
    }

    



    //footer sections toggle for display hide/show when click
    const $contactFooterTitle = $('#contact-footer-title')
    const $categoriestFooterTitle = $('#categoriest-footer-title')
    const $aboutFooterTitle = $('#about-footer-title')

    const $contactFooterList = $('.contact-footer-list')
    const $categoriestFooterList = $('.categoriest-footer-list')
    const $aboutFooterList = $('.about-footer-ul')


    if ($(window).width() < 768) {
        $contactFooterList.show()
        $categoriestFooterList.hide()
        $aboutFooterList.hide()

        $contactFooterTitle.on('click', ()=> {
            $contactFooterList.toggle(500)
        })
        $categoriestFooterTitle.on('click', ()=> {
            $categoriestFooterList.toggle(500)
        })
        $aboutFooterTitle.on('click', ()=> {
            $aboutFooterList.toggle(500)
        })

        $('.li-item-product-from-ul').last().hide()
        displayPopularItems(1)
    }




//change specific product quantity and update price
//end
});


//SECTION COOKIES -> X to hide section , ACCEPT to add cookies in local storage until you delete cache
const $sectionCookies = $('.section-cookies')
const $closeCookies = $('#close-cookies')
const $acceptCookies = $('#accept-cookies')
$sectionCookies.hide()

setTimeout(function() {
    if ( localStorage.getItem('cookies') === 'true') {
        return
    } else {
        $sectionCookies.show()
    }
}, 5000)

$closeCookies.on('click', ()=> {
    $sectionCookies.hide()
})

$acceptCookies.on('click', ()=> {
    localStorage.setItem('cookies', 'true')
    $sectionCookies.hide()
})


//TASK 7.1 MAXIMIZE FULL WIDTH FOR IMAGE
const $btnFullDisplayImage = $('#maximize-product-image')
const $btnNormalImage = $('#minimize-product-image')
const $mainSpecificProductImage = $('#section-specific-product-main-image')

$btnNormalImage.hide()

$btnFullDisplayImage.on('click', ()=> {
    $mainSpecificProductImage.css({'width': '100%', 'height': 'auto', 'position': 'absolute', 'left': '0px', 'padding': '0px 55px', 'z-index': '4'})
    $btnFullDisplayImage.hide()
    $btnNormalImage.show()
})

$btnNormalImage.on('click', ()=> {
    $btnNormalImage.hide()
    $btnFullDisplayImage.show()
    $mainSpecificProductImage.css({'width': '578px', 'height': '526px', 'position': 'relative', 'padding': '0px', 'z-index': '0'})
})


//ACTIVE STATE FOR SELECTED PHOTO AND REPLACE THE MAIN PHOTO WITH THE SELECTED ONE
const sectionSmallImagesSpecificProduct = document.querySelector('.section-specific-product-images')
const smallImages = sectionSmallImagesSpecificProduct.getElementsByClassName('specific-product-small-image')

for ( let i = 0 ; i < smallImages.length; i ++) {
    smallImages[i].addEventListener('click', ()=> {
        console.log('dad')
        let currentClass = document.getElementsByClassName('active-image')
        if ( currentClass.length > 0) {
            currentClass[0].className = currentClass[0].className.replace('active-image', '')
        }
        smallImages[i].className += " active-image";
        $mainSpecificProductImage.attr('src', '').attr('src', `${smallImages[i].src}`)
    })
}


//DISPLAY SPECIFIC TAB FOR SPECIFIC SUBTITLE DESCRIPTION / ADDITIONAL INFORMATION / REVIEW(3)
const currentTabProduct = document.getElementsByClassName('tab-product')
const currentSectionSpecificTab = document.getElementsByClassName('show-tab-section')
let currentTabIndex = 0 

displayCurrentTab(currentTabIndex)


function displayCurrentTab(x) {
    for ( let i = 0 ; i < currentTabProduct.length; i++) {
        currentTabProduct[i].className = currentTabProduct[i].className.replace('tab-product current-tab-specific-product', 'tab-product')
        currentTabProduct[i].addEventListener('click', ()=> {
            selectCurrentTab(i)
        })
    }

    for ( let i = 0 ; i < currentSectionSpecificTab.length; i++) {
        currentSectionSpecificTab[i].style.display = 'none'
    }

    currentTabProduct[x].className += ' current-tab-specific-product'
    currentSectionSpecificTab[x].style.display = 'flex'
}

function selectCurrentTab(z) {
    displayCurrentTab(currentTabIndex = z)
}





//responsive layout
//----------------

//burger button for mobile layout
const menuBtn = document.querySelector('.menu-burger');
const navbarBurger = document.querySelector('.ul-nav');
let menuIsOpen = false;

menuBtn.addEventListener('click', ()=> {
    if(!menuIsOpen) {
        menuBtn.classList.add('open');
        menuIsOpen = true;
        navbarBurger.style.display = 'flex';
    } else {
        menuBtn.classList.remove('open');
        menuIsOpen = false;
        navbarBurger.style.display = 'none';
    }
})
//navbar, services-products (li) section toggle display hide/show when click
const $productsCategoriesTitle = $('#product-categories-title')
const $productsSaleTitle = $('#sale-title')
const $productsList = $('.products-list')
const $productsSaleList = $('.products-sale-list')

$productsList.hide()
$productsSaleList.hide()

$productsCategoriesTitle.on('click', ()=> {
    $productsList.toggle(700)
})

$productsSaleTitle.on('click', ()=> {
    $productsSaleList.toggle(700)
})








