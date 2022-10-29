document.querySelector('#check').addEventListener('click', check)

    function check() {
        const day = document.querySelector('#day').value.toLowerCase()

        if(day === 'tuesday' || day === 'thursday') {
            alert('You have class today')
        }else if(day === 'saturday'|| day === 'sunday') {
            alert('It\'s the weekend!')
        }else if(day === 'monday' || day === 'wednesday') {
            alert('These days are soooo long...')
        }else{
            alert('Boring!')
        }
}

// document.querySelector('#check').addEventListener('click', check)

//     function check() {
//         const day = document.querySelector('#day').value.toLowerCase()

//         if(day === 'tuesday' || day === 'thursday') {
//             alert ('Class day')
//         }else if (day === 'saturday' || day === 'sunday') {
//             alert ('The Weekend!')
//         }else {
//             alert ('Nothin going on')
//         }
//     }
