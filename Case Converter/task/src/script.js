
document.getElementById("upper-case").addEventListener("click", function () {
    document.querySelector("textarea").value
        = document.querySelector("textarea").value.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function () {
    document.querySelector("textarea").value
        = document.querySelector("textarea").value.toLowerCase();
});

document.getElementById("sentence-case").addEventListener('click', function () {
    let sentences = document.querySelector("textarea").value.toLowerCase().split('. ');
    let modifiedSentences = [];
    for (let sentence of sentences) {
        let modifiedSentence = sentence.charAt(0).toUpperCase().concat(sentence.slice(1));
        modifiedSentences.push(modifiedSentence);
    }
    document.querySelector("textarea").value = modifiedSentences.join('. ');
});

document.getElementById("proper-case").addEventListener('click', function() {
    let sentences = document.querySelector("textarea").value.toLowerCase().split(' ');
    for (var i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
    }
    document.querySelector("textarea").value = sentences.join(' ');
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.


document.getElementById("save-text-file").addEventListener('click', function () {
    download("text.txt",document.querySelector("textarea").value);
});