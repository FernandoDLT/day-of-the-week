document.querySelector('#check').addEventListener('click', check)

    function check () {
        const day = document.querySelector('#day').value.toLowerCase()

        if (day === 'tuesday' || day === 'thursday') {
            alert ('Class..........')
        }else if (day === 'saturday' || day === 'sunday') {
            alert ('Weekender fender bender')
        }else {
            alert ('Chale!')
        }
    }