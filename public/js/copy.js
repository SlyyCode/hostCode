document.getElementById('copyButton').addEventListener('click', function() {
    const codeBlock = document.getElementById('codeBlock').innerText;
    
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = codeBlock;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    alert('Code copié dans le presse-papier !');
});