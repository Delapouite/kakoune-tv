/* globals asciicasts */
// good old vanilla js…

(function () {

var $ = document.querySelector.bind(document)

var player = $('#player')
var keys = $('#keys')
var sel = $('#episode-selector')
var docin = $('#in')
var docout = $('#out')
var vg = $('#vimgolf-link')

var id = window.location.hash.slice(1) || asciicasts[0].id
var asciicast = asciicasts.filter(function (a) {
	return a.id === id
})[0]

// utils: remove ,q
var slice = function (keys) {
	return keys.slice(0, keys.length - 2)
}

player.setAttribute('src', 'asciicasts/' + id + '.json')

// populate keys
keys.textContent = slice(asciicast.keys)

// populate selector
asciicasts.forEach(function (a) {
	var opt = document.createElement('option')
	opt.value = a.id
	opt.textContent = a.id
	opt.selected = a.id === id
	sel.appendChild(opt)
})

docin.textContent = asciicast.in
docout.textContent = asciicast.out

vg.href = 'https://vimgolf.com/challenges/' + id

// refresh the page for permalink
sel.onchange = function (evt) {
	var a = asciicasts.filter(function (a) {
		return a.id === evt.target.value
	})[0]
	window.location.hash = a.id
	window.location.reload()
}

})()

