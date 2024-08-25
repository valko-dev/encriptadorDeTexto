// Asigna los eventos de clic a los botones con sus respectivas funciones
document.getElementById('encrypt-btn').addEventListener('click', handleEncrypt);
document.getElementById('decrypt-btn').addEventListener('click', handleDecrypt);
document.getElementById('copy-encrypt-btn').addEventListener('click', () => copyToClipboard('input-text'));
document.getElementById('copy-decrypt-btn').addEventListener('click', () => copyToClipboard('output-text'));

// Función para encriptar el texto
function handleEncrypt() {
    const inputText = getText('input-text');
    const sanitizedText = sanitizeText(inputText);
    const encryptedText = encryptText(sanitizedText);
    setText('output-text', encryptedText);
}

// Función para desencriptar el texto
function handleDecrypt() {
    const inputText = getText('output-text');
    const decryptedText = decryptText(inputText);
    setText('output-text', decryptedText);
}

// Función para copiar el texto al portapapeles usando la API 
function copyToClipboard(elementId) {
    const text = getText(elementId);
    navigator.clipboard.writeText(text)
        .then(() => alert('Texto copiado al portapapeles.'))
        .catch(err => console.error('Error al copiar al portapapeles: ', err));
}

// Función para obtener el texto de un campo de entrada
function getText(elementId) {
    return document.getElementById(elementId).value;
}

// Función para establecer el texto en un campo de entrada
function setText(elementId, text) {
    document.getElementById(elementId).value = text;
}

// Función para pulir el texto (convertir a minúsculas y eliminar caracteres especiales)
function sanitizeText(text) {
    return text.toLowerCase().replace(/[^a-z\s]/g, '');
}

// Función para encriptar el texto usando las reglas establecidas
function encryptText(text) {
    const encryptionRules = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };
    
    return text.split('').map(char => encryptionRules[char] || char).join('');
}

// Función para desencriptar el texto usando las reglas establecidas
function decryptText(text) {
    return text.replace(/ai/g, 'a')
               .replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}
