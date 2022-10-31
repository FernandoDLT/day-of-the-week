document.querySelector('#check').addEventListener('click', check)

    function check () {
        const day = document.querySelector('#day').value.toLowerCase()

        if (day === 'tuesday' || day === 'thursday') {
            alert ('There is class today')
        }else if (day === 'saturday' || day === 'sunday') {
            alert ('The weekend is here!')
        }else if (day === 'monday') {
            alert ('Moncday\'s are sooooo looong')
        }else {
            alert ('Booorrrring!!')
        }
    }














