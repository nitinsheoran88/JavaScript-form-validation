console.log('js file is working........')


document.querySelector('#form-submit').addEventListener('click', function(){

    if(document.querySelector('.firstname').value === ''){
        document.querySelector('.error').innerText = 'please complete the details .'
        return;
    }else{
        document.querySelector('.error').innerText = ''
    }
    
    if(document.querySelector('.lastname').value === ''){
        document.querySelector('.error').innerText = 'please complete the details of last name column .'
        return;
    }else{
        document.querySelector('.error').innerText = ''
    }

    if(document.querySelector('.address').value === ''){
        document.querySelector('.error').innerText = 'please complete the details of address column.'
        return;
    }else{
        document.querySelector('.error').innerText = ''
    }
    
    if(document.querySelector('.phonenumber').value === ''){
        document.querySelector('.error').innerText = 'please complete the details of phone number column.'
        return;
    }else{
        document.querySelector('.error').innerText = ''
    }

})