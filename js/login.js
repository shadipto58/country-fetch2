

document.getElementById('submit-buttton').addEventListener('click',function(){
 
    const mail = document.getElementById('user-email').value;
    
    const password = document.getElementById('user-password').value;

    if(mail == 'facebook@gmail.com' && password == 123456){
        window.location.href = "banking.html";
    }
    else{
        alert('passworddoes not match');
    }
});