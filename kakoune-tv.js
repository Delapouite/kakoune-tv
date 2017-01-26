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

var parse = function (keys) {
	return keys
		// remove ,q
		.slice(0, keys.length - 2)
		// escape new lines
		.replace(/\n/g, '\\n')
		// TODO: remove false posive, like <ret> during insertion
		// add some room for better human readibility
		.replace(/<ret>/g, '<ret>\n')
		.replace(/<esc>/g, '<esc>\n')
}

player.setAttribute('src', 'asciicasts/' + id + '.json')

// populate keys
keys.textContent = parse(asciicast.keys)

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

