const $form = document.getElementById('form-tasks');

const adicionarTarefa = (title) => {
    //Criat Item (li)
    const $li = document.createElement('li')
    $li.classList.add('tasks-section__item')

    // Criar Label (label)
    const $label = document.createElement('label')
    $label.classList.add('tasks-section__item__label')
    $li.append($label)

    // Criar input (input)
    const $input = document.createElement('input')
    $input.classList.add('tasks-section__item__checkbox')
    $input.setAttribute('type', 'checkbox')
    $label.append($input)

    // Criar span (span)
    const $span = document.createElement('span')
    $span.classList.add('tasks-section__item__text')
    $span.innerHTML = title
    $label.append($span)

    // Criar botao de remocao (remove)
    const $removeButton = document.createElement('button')
    $removeButton.classList.add('tasks-section__item__remove')
    $removeButton.innerHTML = 'X'
    $li.append($removeButton)

    //Adicionar item na lista To-d0
    const $taskList = document.getElementById('list-todo')
    $taskList.append($li)
}

const envioDeFormulario = (event) => {
    event.preventDefault()
    const formData = new FormData($form)
    const title = formData.get('title')

    adicionarTarefa(title)
}

$form.addEventListener('submit', envioDeFormulario)


