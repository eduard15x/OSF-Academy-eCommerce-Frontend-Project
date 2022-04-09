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
