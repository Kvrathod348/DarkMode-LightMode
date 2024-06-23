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

    const cardFont = document.getElementById('container-card');
    cardFont.classList = "card-name-dark"

}

function enter() {
    const characterName = document.getElementById('input');
    const characterNameValue = characterName.value;
    const heroImage = document.getElementById('hero-img')
    const heroDetail = document.getElementById('hero-detail')

    switch (characterNameValue) {
        case "All Might":
            heroImage.src = './allmight.jpg'
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
            heroImage.src = './bakugou.png'
            heroDetail.innerHTML = `Personality :<br>
Bakugo is arrogant, violent, and crude, but he also works hard, strives for perfection, and is committed to his morals. He can be unpleasant, especially to Izuku Midoriya, and he often bullies Midoriya.<br>
Appearance :<br>
Bakugo has short, spiky, sandy blond hair with choppy bangs that hang over his eyebrows.<br>
Quirk :<br>
Bakugo's Quirk is called "Explosion", which allows him to excrete nitroglycerin-like sweat from his palms and ignite it to create explosions.<br>
Interests:<br>
Bakugo likes mountain climbing and spicy food.`
            console.log("HeroName: Dynamight , qurik: Explosion ");
            break;

        case "Eijiro Kirishima":
            heroImage.src = './Eijiro Kirishima.jpeg'
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
    const heroDetail = document.getElementById('hero-detail')

    characterName.value=""
    heroImage.src='../deku.jpg'
    heroName.innerText='Name: Izuku Midoriya (Deku)'
    heroDetail.innerHTML=`QuriK:<br>One for All: This quirk allows the user to stockpile power, increase their physical
                capabilities, and transfer it to others. It can also incorporate the quirks of previous One For All
                holders.<br>
                Gearshift: Izuku uses Blackwhip to simulate movement when immobilized by Gearshift, which appears as
                dark lines under his skin.<br>
                Nickname: Izuku's nickname, "Deku", comes from "Dekunobou", which means "someone who can't do anything".<br>
                Katsuki Bakugo gave him this nickname after Izuku failed to develop a Quirk as a child while Katsuki
                did.`
}

// Best selling card 1

function first(){
    const heroImage = document.getElementById('card-one');

    heroImage.src = "./best-selling-action/Deku.png"
}
function second(){
    const heroImage = document.getElementById('card-one');

    heroImage.src = "./best-selling-action/Deku2.0.png"
}
function third(){
    const heroImage = document.getElementById('card-one');

    heroImage.src = "./best-selling-action/hookEye.png"
}
function fourth(){
    const heroImage = document.getElementById('card-one');

    heroImage.src = "./best-selling-action/indevar.png"
}
function fifth(){
    const heroImage = document.getElementById('card-one');

    heroImage.src = "./best-selling-action/group.png"
}