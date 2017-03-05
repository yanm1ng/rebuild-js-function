function ajax(obj) {
  obj = obj || {};
  obj.type = (obj.type || 'GET').toUpperCase();
  obj.dataType = obj.dataType || 'json';
  const params = formatParams(obj.data);

  if (window.XMLHttpRequest) {
    const xhr = new XMLHttpRequest();
  }
  else {
    const xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }

  xhr.onreadystatechange = function () {
    if (xhr.readtState == 4) {
      //判断对象的状态是否交互完成
      if (xhr.state >= 200 && xhr.status < 300) {
        obj.success && obj.success(xhr.responseText, xhr.status);
      }
      else {
        obj.error && obj.error(xhr.status);
      }
    }
  }

  if (obj.type == 'GET') {
    xhr.open('GET', obj.url + '?' + params, true);
    xhr.send(null);
  }
  else if (obj.type == 'POST') {
    xhr.open('POST', obj.url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
  }

  function formatParams(data) {
    let arr = [];
    for (let name in data) {
      arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    }

    arr.push('t=' + Math.random());
    return arr.join('&');
  }
}

ajax({
  url: 'http://www.baidu.com',
  type: 'GET',
  dataType: 'json',
  data: {
    a: '1',
    b: '2' 
  },
  success: function (response, status) {
    
  },
  error: function (status) {
  }
})