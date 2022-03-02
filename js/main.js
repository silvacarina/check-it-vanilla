const $form = document.getElementById('form-tasks');

const adicionarTarefa = (title) => {
    const $taskHTML = `<li class="tasks-section__item">
    <label class="tasks-section__item__label">
      <input type="checkbox" class="tasks-section__item__checkbox">
      <span class="tasks-section__item__text">${title}</span>
    </label>
    <button class="tasks-section__item__remove">X</button>
  </li>`

    const $taskList = document.getElementById('list-todo')

    $taskList.insertAdjacentHTML('beforeend', $taskHTML)    
}

const envioDeFormulario = (event) => {
    event.preventDefault()
    const formData = new FormData($form)
    const title = formData.get('title')

    adicionarTarefa(title)
}

$form.addEventListener('submit', envioDeFormulario)
