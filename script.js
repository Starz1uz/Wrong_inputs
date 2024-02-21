let inp = document.querySelectorAll('.right input')
let sec_inp = document.querySelectorAll('.left input')
let form = document.forms.login

function func() {
    let user = {}

    form.onsubmit = (e) => {
        e.preventDefault()
        inp.forEach(input => {
            if (input.value === '') {
                error = false
                input.classList.add('error')
            } else {
                input.classList.remove('error')
            }
        });
        if (error) {
            inputs.forEach(input => {
                user[input.name] = input.value
            });
            console.log(user);
        } else {
            console.log('Wrong!');
        }
    }

}

func()