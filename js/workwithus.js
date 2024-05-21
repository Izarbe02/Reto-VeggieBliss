 (function () {

    var inputs = document.querySelectorAll('.inputfile');

    inputs.forEach(function (input) {

        input.addEventListener('change', function (e) {
            var fileName = e.target.value.split('\\').pop();
            if (fileName)
                this.nextElementSibling.querySelector('.iborrainputfile').innerHTML = fileName;
        });
    });
}());