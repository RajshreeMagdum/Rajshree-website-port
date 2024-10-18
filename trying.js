function flipPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    
    pages.forEach((page, index) => {
      if (index < pageNumber) {
        page.classList.add('flipped');
      } else {
        page.classList.remove('flipped');
      }
    });
  }
  
  