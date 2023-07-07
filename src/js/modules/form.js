/* Entering only digits in the phone number */
const form = document.querySelector("#form");

if (form) {
  const inputNumber = document.querySelectorAll(".onlyNumber");

  inputNumber.forEach((number) => {
    number.addEventListener("input", () => {
      let sanitizedValue = number.value.replace(/\D/g, "");
      sanitizedValue = "+" + sanitizedValue.substr(0, 14);
      number.value = sanitizedValue;
    });
  });

  /* Deleting a file in a form */
  const fileInput = document.querySelector(".form__field--file");
  const selectFileDiv = document.querySelector(".form__select-file");

  fileInput.addEventListener("change", handleFileSelect);
  selectFileDiv.addEventListener("click", removeSelectedFile);

  function handleFileSelect() {
    const files = fileInput.files;

    if (files.length > 0) {
      const selectedFile = files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const fileName = selectedFile.name;

        selectFileDiv.style.display = "block";
        selectFileDiv.textContent = fileName;

        const closeIcon = document.createElement("img");
        closeIcon.classList.add("form__file-icon--remove");
        closeIcon.loading = "lazy";
        closeIcon.src = "./img/icons/close-file.svg";
        closeIcon.alt = "Remove your file";
        selectFileDiv.prepend(closeIcon);
      };

      reader.readAsDataURL(selectedFile);
    } else {
      selectFileDiv.style.display = "none";
      selectFileDiv.textContent = "";
    }
  }

  function removeSelectedFile(event) {
    if (event.target.classList.contains("form__file-icon--remove")) {
      selectFileDiv.style.display = "none";
      selectFileDiv.textContent = "";
      fileInput.value = "";
    }
  }

  /* Отправка формы */
  document.getElementById("form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    formData.delete("privacy-policy");

    if (formData.get("phone") === "") {
      formData.delete("phone");
    }

    if (!formData.has("file")) {
      formData.delete("file");
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/grosheff.ivan@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (response.ok) {
        // Действия при успешной отправке формы
        console.log("Форма успешно отправлена");
        // Здесь вы можете добавить код для отображения сообщения об успешной отправке формы

        // Очистка полей формы через 2 секунды
        setTimeout(() => {
          form.reset();

          // Скрытие блока form__select-file
          selectFileDiv.style.display = "none";
          selectFileDiv.textContent = "";
        }, 800);
      } else {
        // Действия при ошибке отправки формы
        console.error("Произошла ошибка при отправке формы");
        // Здесь вы можете добавить код для отображения сообщения об ошибке отправки формы
      }
    } catch (error) {
      console.error("Произошла ошибка при отправке формы:", error);
      // Здесь вы можете добавить код для отображения сообщения об ошибке отправки формы
    }
  });

  
}