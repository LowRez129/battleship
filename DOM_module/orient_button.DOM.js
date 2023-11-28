import './orient_button.DOM.css';

function orientButton () {
    const button = document.createElement("button");
    button.classList.add("orient-button");
    button.setAttribute('value', false);
    button.addEventListener('click', () => {
        if (button.value == "false") { button.setAttribute('value', true) }
        else { button.setAttribute('value', false) };
    });

    return button;
}

export {orientButton};