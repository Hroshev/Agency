document.addEventListener("DOMContentLoaded", function() {
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

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const xhr = new XMLHttpRequest();
            xhr.open("POST", form.action, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const response = xhr.responseText;
                    // Обработка ответа от сервера (можно добавить уведомление об успешной отправке)
                    console.log(response);

                    // Очистка формы
                    form.reset();
                    selectFileDiv.style.display = "none";
                    selectFileDiv.textContent = "";
                    inputNumber.forEach((number) => {
                        number.value = "";
                    });
                }
            };

            const formData = new FormData(form);
            xhr.send(formData);
        });
    }
});