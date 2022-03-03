const $form = document.getElementById('form-tasks');

const handleCheckboxChange = (event) => {
  const $checkbox = event.target
  const $li = $checkbox.parentElement.parentElement
  const $tasksTodoList = document.getElementById('list-todo')
  const $taskesDoneList = document.getElementById('list-done')

  if ($checkbox.checked) {
    $taskesDoneList.append($li)
  } else {
    $tasksTodoList.append($li)
  }
}

const handleItemRemove = (event) => {
  const $removeButton = event.target
  const $li = $removeButton.parentElement
  const $currentList = $li.parentElement

  $currentList.removeChild($li)
}

const adicionarTarefa = (title) => {
    //Criat Item (li)
    const $li = document.createElement('li')
    $li.classList.add('tasks-section__item')

    // Criar Label (label)
    const $label = document.createElement('label')
    $label.classList.add('tasks-section__item__label')
    $li.append($label)

    // Criar checkbox (input)
    const $checkbox = document.createElement('input')
    $checkbox.classList.add('tasks-section__item__checkbox')
    $checkbox.setAttribute('type', 'checkbox')
    $label.append($checkbox)

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
    const $tasksTodoList = document.getElementById('list-todo')
    $tasksTodoList.append($li)

    //Adicionar eventos
    $checkbox.addEventListener('change', handleCheckboxChange)
    $removeButton.addEventListener('click', handleItemRemove)
}

const envioDeFormulario = (event) => {
    event.preventDefault()
    const formData = new FormData($form)
    const title = formData.get('title')

    adicionarTarefa(title)
    $form.reset()
}

$form.addEventListener('submit', envioDeFormulario)


