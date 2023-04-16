const screen1 = document.querySelector(".screen1");
const imgCookie = document.querySelector(".closed-cookie");
const screen2 = document.querySelector(".screen2");
const message = document.querySelector(".message");
const button = document.querySelector(".button");

let messageList = [
    'Never trade what you want most in life for what you want most in the moment, because moments pass and life goes on.', 
    'Goal of the day: To be a better person, not perfect, just better than yesterday!', 
    'Humility does not make you better than anyone, but it makes you different from many.', 
    'Do not be afraid of change. Good things go so that better ones can come.', 
    'Do not despair when the walk is difficult, it is a sign that you are on the right path.', 
    'Not all storms come to disrupt your life. Some come to clear your path.', 
    'There are walls that only patience breaks down. And there are bridges that only affection builds.', 
    'When you are aware of your worth, it is not something that satisfies you, much less anything that hits you.', 
    'Whenever possible, give a smile to a stranger on the street . It may be the only gesture of love he will see all day.', 
    'There is no such thing as impossible love, only people unable to fight for what they call love.', 
    'If someone is so tired If he cannot give you a smile, leave him yours.'
]

imgCookie.addEventListener("click", () => {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");

    let randomNumber = Math.floor(Math.random() * messageList.length);
    message.textContent = messageList[randomNumber];
});

button.addEventListener("click", () => {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
})