// document.querySelector('#check').addEventListener('click', check)

//     function check () {
//         const day = document.querySelector('#day').value.toLowerCase()

//         if (day === 'tuesday' || day === 'thursday') {
//             console.log('There is a class today')
//         }else if (day === 'saturday' || day === 'sunday') {
//             console.log('It is The Weekend!')
//         }else if (day === 'monday') {
//             console.log('What a looooong day!!!!')
//         }else {
//             console.log('Boring!!!')
//         }
//     }

document.querySelector('#check').addEventListener('click', check)

    function check () {
        const day = document.querySelector('#day').value.toLowerCase()

        if (day === 'tuesday' || day === 'thursday') {
            console.log('Today there will be a class!')
        }else if (day === 'saturday' || day === 'sunday') {
            console.log('It\'s the weeekend, bruh!!')
        }else if ( day === 'monday') {
            console.log('The longest day of teh week')
        }else {
            console.log('What in the world is going on in here??!')
        }
    }














