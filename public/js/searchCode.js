function handleSubmit(event) {
    event.preventDefault();
    const baseUrl = window.location.origin;
    const code = document.querySelector('input[name="route"]').value;
    if (baseUrl && code) {
        window.location.href = `${baseUrl}/${code}`;
    }
}