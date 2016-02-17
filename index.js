import can from "can";
import "opensourced-bithub/bits_carousel/";
import "opensourced-bithub/bit_carousel/";
import "opensourced-bithub/style/embed.less!";
import $ from "jquery";

import Bit from "opensourced-bithub/models/bit";
import ResizeSensor from "./resize-sensor";

import template from "./index.stache";
import "./style.less";

var RealBit = Bit.extend({
	findAll: function(params){
		return $.ajax({
			url: 'https://bithub.com/api/v4/embeds/1/entities?view=public&tenant_name=blessed_beach_7760&image_only=true&' + $.param(params)
		});
	},
}, {});

var State = can.Map.extend({
	isAdmin(){
		return false;
	},
	assetRoot: steal.joinURIs(System.baseURL, "./node_modules/opensourced-bithub/" ),
	hubId: 1
});

var sensor = new ResizeSensor(document.body, function() {
	parent.postMessage('contentExpanded:' + $(document.body).outerHeight(), '*');
});


$('#app').html(template({
	bitModel: RealBit,
	state: new State()
}));
