function toggleDropdown() {
    var dropdown = document.getElementById('myDropdown');
    dropdown.classList.toggle('active');
  }

  function selectOption(option) {
    alert('Anda memilih: ' + option);
    toggleDropdown(); // Menutup dropdown setelah memilih
  }