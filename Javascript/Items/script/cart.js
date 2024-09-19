let items = JSON.parse(localStorage.getItem('items'));
let purchased = JSON.parse(localStorage.getItem('cart'));
let tbody = document.querySelector('tbody')
let btn = document.querySelector('button')

    purchased.forEach(item => {
        tbody.innerHTML += `<tr>
                    <td>${item.image}</td>
                    <td>${item.price}</td>
                    
                    </tr>
                            
                            `
    });
