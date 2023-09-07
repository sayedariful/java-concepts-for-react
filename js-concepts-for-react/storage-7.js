const addToLocalStorage = () => {
    const inputId = document.getElementById('storage-is');
    const id = inputId.value;

    const inputValue = document.getElementById('storage-value');
    const value = inputValue.value;
    // 
    if(id && value) {
    localStorage.setItem(id, value)
    }
    inputId.value= '';
    inputValue.value= '';

   /*  localStorage.setItem('friends', [23, 45, 45])
    localStorage.setItem('friends', JSON.stringify([23, 45, 45]))
    const pen = {price: 10, color: 'white'};
    localStorage.setItem('pen', pen)
    localStorage.setItem('pen', JSON.stringify(pen))
    const storagePen = localStorage.setItem('pen')
    console.log(storagePen);
    const penObject = JSON.parse(storagePen)
    console.log(penObject); */
}


