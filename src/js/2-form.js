const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");


let formData = {
  email: "",
  message: "",
};


document.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (!savedData) return;

  try {
    formData = JSON.parse(savedData);

    form.elements.email.value = formData.email || "";
    form.elements.message.value = formData.message || "";
  } catch (error) {
    console.error("Invalid data in localStorage");
  }
});


form.addEventListener("input", (e) => {
  const { name, value } = e.target;

  if (!formData.hasOwnProperty(name)) return;

  formData[name] = value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const { email, message } = formData;

  if (!email.trim() || !message.trim()) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  
  localStorage.removeItem(STORAGE_KEY);

  
  formData = {
    email: "",
    message: "",
  };

  
  form.reset();
});