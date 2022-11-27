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
    textarea.classList.add('hide')
    save.classList.add('hide')
    cancel.classList.add('hide')
}

cancel.addEventListener('click', hideTextarea)

function newNoteMaker ()
{
    if (textarea.classList.contains('hide'))
    {textarea.classList.remove('hide')
    save.classList.remove('hide')
    cancel.classList.remove('hide')}
    else {textarea.value = ''}
}

newnote.addEventListener('click', newNoteMaker)