const STORAGE_KEY = `feedback-form-state`;

const form = document.querySelector(`.feedback-form`);
const textarea = document.querySelector(`textarea`);

form.addEventListener(`input`, (e)=>{
    const formData = new FormData(form);

    const obj = {
        email: formData.get(`email`),
        message: formData.get(`message`)
    }

    const zip = JSON.stringify(obj);

    localStorage.setItem(STORAGE_KEY, zip);
})

document.addEventListener(`DOMContentLoaded`, (e)=>{
    const zip = localStorage.getItem(STORAGE_KEY);
    const data = JSON.parse(zip);
    form.elements.email.value = data.email;
    form.elements.message.value = data.message;
})

form.addEventListener(`submit`, (e)=>{
    e.preventDefault();

    const formData = new FormData(form);

    const obj = {
        email: formData.get(`email`),
        message: formData.get(`message`)
    }


    console.log(obj);
    localStorage.removeItem(STORAGE_KEY);
    form.reset()
})