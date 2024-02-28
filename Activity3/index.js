document.addEventListener("DOMContentLoaded", function() {
    var dropdownLinks = document.querySelectorAll('.has-dropdown > a');
    dropdownLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        var dropdownContent = this.parentElement.querySelector('.dropdown-content');
        dropdownContent.classList.toggle('active');
      });
    });
  
    var subproductLinks = document.querySelectorAll('.has-subproducts > a');
    subproductLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        var subproductsContent = this.parentElement.querySelector('.subproducts-content');
        subproductsContent.classList.toggle('active');
      });
    });
  });
  