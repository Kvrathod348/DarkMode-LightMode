function light(){
    const lightMode=document.getElementById('light')
    lightMode.classList.add('active');

    const darkMood=document.getElementById('dark');
    darkMood.classList.remove('active');

    const bodyMood=document.getElementById('body');
    bodyMood.classList = "bg-light"

}

function dark(){
    const darkMood=document.getElementById('dark');
    darkMood.classList.add('active');

    const lightMode=document.getElementById('light')
    lightMode.classList.remove('active');

    const bodyMood=document.getElementById('body');
    bodyMood.classList= "bg-dark"
}

function enter(){
    const enterNmae=document.getElementById()
}