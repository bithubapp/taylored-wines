var link = document.getElementById('taylored-wines-be-social');

var wrapper = document.createElement('div');
wrapper.className = 'taylored-wines-be-social';
wrapper.style.maxWidth = '100%';
wrapper.style.marginLeft = 'auto';
wrapper.style.marginRight = 'auto';

var iframe = document.createElement('iframe');
iframe.id = 'bithub-embed';
iframe.style.height = '658px';
iframe.style.width = '1px';
iframe.style.minWidth = '100%';
iframe.style.marginTop = '40px';
iframe.style.border = 'none';
iframe.style.display = 'block';
iframe.scrolling = 'no';

iframe.src = "https://bithubapp.github.io/taylored-wines/embed-prod.html";

wrapper.appendChild(iframe);

link.parentNode.insertBefore(wrapper, link);
link.parentNode.removeChild(link);


window.addEventListener('message', function(ev){
	var msg = ev.data;
	if(msg){
		var arr = msg.split(':');
		var size = parseInt(arr[1], 10);
		if(arr[0] === 'contentExpanded') {
			iframe.style.height = size + 'px';
		}
	}
}, false);
