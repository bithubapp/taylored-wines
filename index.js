import can from "can";
import "opensourced-bithub/bits_carousel/";
import "opensourced-bithub/bit_carousel/";
import "opensourced-bithub/style/embed.less!";
import $ from "jquery";

import Bit from "opensourced-bithub/models/bit";

import template from "./index.stache";
import "./style.less";



//var bitData = new Bit.List(fixtures.data.slice(0, 10));

var RealBit = Bit.extend({
	findAll: function(params){
		return $.ajax({
			url: 'http://bithub.com/api/v3/embeds/1/entities?view=public&tenant_name=radioactive_fern_9050&image_only=true&' + $.param(params)
		});
	},
}, {});



var State = can.Map.extend({
	isAdmin(){
		return false;
	},
	assetRoot: (System.env.indexOf("production") >= 0 ? 
		"/dist/node_modules/opensourced-bithub/" :
		"./node_modules/opensourced-bithub/"),
	hubId: 1
});

$('body').on('cardExpanded', function(ev, height){
	var parent = window.parent;
	if(parent){
		parent.postMessage('cardExpanded:' + height, '*');
	}
});

$('#app').html(template({
	bitModel: RealBit,
	state: new State()
}));
