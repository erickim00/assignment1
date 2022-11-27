const darktheme = document.querySelector('.darktheme')
const newnote = document.querySelector('.newnote')
const save = document.querySelector('.save')
const cancel = document.querySelector('.cancel')
const aside = document.querySelector('aside')
const textarea = document.querySelector('textarea')

function goDark ()
{
    document.body.classList.toggle('darkbody');
    darktheme.classList.toggle('darkdarktheme');
    if (darktheme.textContent === 'Dark Theme'){
        darktheme.textContent = 'Light Theme';
    }
    else if (darktheme.textContent === 'Light Theme'){
        darktheme.textContent = 'Dark Theme';
    };
    newnote.classList.toggle('darknewnote');
    save.classList.toggle('darksave');
    cancel.classList.toggle('darkcancel');
    aside.classList.toggle('darkaside');
    textarea.classList.toggle('darktextarea');
}

darktheme.addEventListener('click', goDark)

function hideTextarea ()
{
    textarea.classList.toggle('hide')
    save.classList.toggle('hide')
    cancel.classList.toggle('hide')
}

cancel.addEventListener('click', hideTextarea)