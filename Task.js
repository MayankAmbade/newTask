function adjustHeight(selectedBox) {
    const boxes = document.querySelectorAll('.box');
    
    boxes.forEach((box, index) => {
      if (index + 1 === selectedBox) {
        box.style.height = '162px';  // Set the desired height for the selected box
        box.style.borderColor = '#007F61';
        box.style.backgroundColor='#F4FBF9';
      } else {
        box.style.height = '70px'; // Set the desired height for other boxes
        box.style.borderColor = '#ccc'; 
        box.style.backgroundColor='#fff'; 
      }
    });
  }