const options = document.querySelectorAll('.option'),
  clientItems = document.querySelectorAll('.client__item');

  options.forEach(option => {
    option.addEventListener('click', () => {
      // remove class active 
      options.forEach(option => {
        option.classList.remove('option--active');
      });
      // add class active
      option.classList.add('option--active');
      
      let dataFilter = option.getAttribute('data-filter');  
      clientItems.forEach(clientItem => {
        clientItem.classList.toggle('hidden');
        if( (clientItem.getAttribute('data-tag') == dataFilter) || (dataFilter === 'all')) {
          clientItem.classList.remove('hidden');
        }
      });

    });
  });
