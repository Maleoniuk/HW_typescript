"use strict";
//Задание 2
//Создать словарь собственных определений, используя Generic function. Внутри должно быть
//определение для 3 свойств – ключ, значение, описание (различных типов данных). Для получения или
//записи использовать get/set реализацию доступа. Также для полей нужно использовать модификаторы
//доступа (на Ваш выбор). В итоге должен получится словарь терминов, принимающий на входящий
//параметр различные типы данных для реализации.
window.onload = function () {
    var data = [];
    function set(value, key, description) {
        data.push({ value: value, key: key, description: description });
    }
    function get(item) {
        return item;
    }
    console.log(data);
    console.log(get(data));
    var start = document.getElementById('start');
    start.addEventListener('click', function () {
        var getValue = document.getElementById('get_value');
        var getValue1 = getValue.value;
        var getKey = document.getElementById('get_key');
        var getKey1 = getKey.value;
        var getDescription = document.getElementById('get_description');
        var getDescription1 = getDescription.value;
        if (getValue1.length != "" && getKey1.length != '' && getDescription1.length != '') {
            var item = set(getValue1, getKey1, getDescription1);
            console.log(getValue1);
            //////
            var i = void 0;
            for (i = 0; i < data.length; i++) {
                var content = document.getElementById('content');
                var p = document.createElement("p");
                content.appendChild(p).innerHTML = 'value' + data[i].value + "<br/>";
                var contentKey = document.getElementById('contentKey');
                var pKey = document.createElement("p");
                contentKey.appendChild(pKey).innerHTML = 'Key:' + data[i].key + "<br/>";
                var contentDescription = document.getElementById('contentDescription');
                var pDescription = document.createElement("p");
                contentDescription.appendChild(pDescription).innerHTML = 'Description:' + data[i].value + "<br/>";
            }
        }
    });
    ////
    //  p.innerHTML=data+'</br>';
};
