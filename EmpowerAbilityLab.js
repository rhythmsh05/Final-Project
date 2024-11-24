//Template Function that can be used to run JavaScript on the page

//Note: This can be changed to whatever JavaScript formatting you would like
function knowledgeRunner(){

}


function navigateTo(section) {
    document.querySelectorAll('main > section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(section).classList.remove('hidden');
}
window.navigateTo = navigateTo;
function toggleEventDetails() {
    const details = document.getElementById('eventDetails');
    details.classList.toggle('hidden', !document.getElementById('speakerCheckbox').checked);
}

function handleSubmit(event) {
    event.preventDefault();
    const message = document.getElementById('formMessage');
    message.textContent = 'Thank you! We will contact you soon.';
}


knowledgeRunner()
