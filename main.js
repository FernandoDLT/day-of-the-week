document.querySelector('#check').addEventListener('click', check)

    function check () {
        const day = document.querySelector('#day').value.toLowerCase()

        if (day === 'tuesday' || day === 'thursday') {
            alert ('We have a class today')
        }else if (day === 'saturday' || day === 'sunday') {
            alert ('It\'s the WEEKEND!!!')
        }else if (day === 'monday') {
            alert ('The longest day o the week...')
        }else {
            alert ('This is borrring!!')
        }
    }













