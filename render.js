globalThis._ = function (data) {
  try {
    var template = '';
    for (var property in data) {
      if (data.hasOwnProperty(property)) {
        if (property == 'el') {
          template = document.querySelector(data[property]).innerHTML;
          var el = document.querySelector(data[property]);
        } else {
          if (template == '') {template = document.body.innerHTML;}
          let search = new RegExp('{' + property + '}', 'gi');
          let search1 = new RegExp('{ ' + property + ' }', 'gi');
          let search2 = new RegExp('{{' + property + '}}', 'gi');
          let search3 = new RegExp('{{ ' + property + ' }}', 'gi');
          template = template.replace(search2, data[property]);
          template = template.replace(search3, data[property]);
          template = template.replace(search, data[property]);
          template = template.replace(search1, data[property]);
          console.log("{" + property + "} : " + data[property]);
        }
      }
    }
    if (el == undefined) {el = document.body;}
    el.innerHTML = template;
    return true;
  } catch(ex) {
    console.error(ex);
    return false;
  }
};