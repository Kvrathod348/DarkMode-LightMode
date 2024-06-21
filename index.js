function light() {
    const lightMode = document.getElementById('light')
    lightMode.classList.add('active');

    const darkMood = document.getElementById('dark');
    darkMood.classList.remove('active');

    const bodyMood = document.getElementById('body');
    bodyMood.classList = "bg-light"

}

function dark() {
    const darkMood = document.getElementById('dark');
    darkMood.classList.add('active');

    const lightMode = document.getElementById('light')
    lightMode.classList.remove('active');

    const bodyMood = document.getElementById('body');
    bodyMood.classList = "bg-dark"
}

function enter() {
    const characterName = document.getElementById('input');
    const characterNameValue = characterName.value;
    const heroImage = document.getElementById('hero-img')
    const heroDetail = document.getElementById('hero-detail')

    switch (characterNameValue) {
        case "All Might":
            heroImage.src = '../allmight.jpg'
            heroDetail.innerHTML = `Quirk: One for All
Here are some fun facts about All Might, a character from My Hero Academia:<br>
- All Might, whose real name is Toshinori Yagi, is Japan's number one hero and is considered the world's strongest and greatest hero.<br>
- All Might's willpower is so great that he can turn One For All's remaining embers into a raging inferno.<br>
- Even when weighed down, All Might can easily overpower Izuku and Katsuki.<br>
- All Might's skill has created a number of effects, including making others rely on him, which can lead to a catastrophic mental state.<br>
- All Might knows he's not unbeatable, and he believes that heroes need to be able to improvise and use their strengths in any situation.<br>`
            console.log("HeroName: All Might , qurik: One for All");
            break;

        case "Kanchan":
            heroImage.src = '../bakugou.png'
            console.log("HeroName: Dynamight , qurik: Explosion ");
            break;

        case "Eijiro Kirishima":
            heroImage.src = '../Eijiro Kirishima.jpeg'
            console.log("HeroName: Red Riot , qurik: Hardening");
            break;

        case " Tenya Ida ":
            console.log("HeroName: Enginium , qurik: Engine");
            break;

        case "Fumikage Tokoyami":
            console.log("HeroName: Dark Shadow , qurik: Dark Shadow");
            break;

        default:
            console.log("Plus Ultra");
    }

    const heroName = document.getElementById('hero-name')
    heroName.innerText = "Name: " + characterNameValue;

}
function reset(){
    const characterName = document.getElementById('input');
    const characterNameValue = characterName.value;
    const heroImage = document.getElementById('hero-img')
    const heroName= document.getElementById('hero-name')

    characterName.value=""
    heroImage.src='../deku.jpg'
    heroName.innerText='Name: Izuku Midoriya (Deku)'
}