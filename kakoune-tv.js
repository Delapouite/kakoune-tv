/* globals asciicasts */
// good old vanilla js…

(function () {

var $ = document.querySelector.bind(document)

var player = $('#player')
var keys = $('#keys')
var annotations = $('#annotations')
var sel = $('#episode-selector')
var docin = $('#in')
var docout = $('#out')
var vg = $('#vimgolf-link')

var id = window.location.hash.slice(1) || asciicasts[0].id
var asciicast = asciicasts.filter(function (a) {
	return a.id === id
})[0]


// remove ,q
var tokenize = function (keys) {
	return keys
		.replace(/\n/, '\\n')
		.replace(/<((c-.|a-.)|(c-|a-)?(ret|space|tab|lt|gt|backspace|esc|up|down|left|right|pageup|pagedown|home|end|backtab|del))>|./g, '¤$&')
		.split('¤')
		.slice(1, -2)
}

var annotate = function (tokens) {
	var t
	var mode = 'n'
	var insertBuffer = []
	var promptBuffer = []
	var macroRecording = false
	var logs = []

	while (t = tokens.shift()) {
		if (mode === 'i' && t !== '<esc>') {
			insertBuffer.push(t)
			continue
		}
		if (mode === 'p' && t !== '<ret>') {
			promptBuffer.push(t)
			continue
		}
		if (mode === 'c') {
			logs.push([t, 'typed in prompt', 'p'])
			mode = 'n'
			continue
		}

		switch (t) {
			case 'a':
			case 'A':
			case 'c':
			case 'i':
			case 'I':
			case 'o':
			case 'O':
				logs.push([t, 'enter insert mode'])
				mode = 'i'
				break

			case '<esc>':
				logs.push([insertBuffer.join(''), 'inserted text', 'i'])
				insertBuffer = []
				logs.push([t, 'leave insert mode', 'l'])
				mode = 'n'
				break

			case '<ret>':
				mode = 'n'
				logs.push([promptBuffer.join(''), 'typed in prompt', 'p'])
				promptBuffer = []
				logs.push([t, 'leave prompt  mode', 'l'])
				break

			case 'b':
				logs.push([t, 'select to previous word start'])
				break

			case '<a-b>':
				logs.push([t, 'select to previous WORD start'])
				break

			case '<a-C>':
				logs.push([t, 'copy selection on previous lines'])
				break

			case 'd':
				logs.push([t, 'delete selected text'])
				break

			case 'e':
				logs.push([t, 'select to next word end'])
				break

			case 'f':
				logs.push([t, 'select onto next character'])
				mode = 'c'
				break

			case '<a-f>':
				logs.push([t, 'select to previous character included'])
				mode = 'c'
				break

			case 'g':
				logs.push([t, 'goto'])
				mode = 'c'
				break

			case 'h':
				logs.push([t, 'move left'])
				break

			case 'H':
				logs.push([t, 'extend left'])
				break

			case 'j':
				logs.push([t, 'move down'])
				break

			case 'k':
				logs.push([t, 'move up'])
				break

			case '<a-k>':
				logs.push([t, 'keep selections matching given regex'])
				mode = 'p'
				break

			case '<a-K>':
				logs.push([t, 'keep selections not matching given regex'])
				mode = 'p'
				break

			case 'l':
				logs.push([t, 'move right'])
				break

			case 'L':
				logs.push([t, 'extend right'])
				break

			case 'm':
				logs.push([t, 'select to matching character'])
				break

			case 'n':
				logs.push([t, 'select next current search pattern match'])
				break

			case 'N':
				logs.push([t, 'extend with next current search pattern match'])
				break

			case '<a-n>':
				logs.push([t, 'select previous current search pattern match'])
				break

			case 'p':
				logs.push([t, 'paste before selected text'])
				break

			case 'P':
				logs.push([t, 'paste after selected text'])
				break

			case '<a-p>':
				logs.push([t, 'paste every yanked selection after selected text'])
				break

			case 'q':
				logs.push([t, 'replay recorded macro'])
				break

			case 'Q':
				logs.push([t, `Q – ${macroRecording ? 'stop' : 'start'} macro recording`])
				macroRecording = !macroRecording
				break

			case 'R':
				logs.push([t, 'replace selected text with yanked text'])
				break

			case '<a-R>':
				logs.push([t, 'replace selected text with yanked text'])
				break

			case 's':
				logs.push([t, 'select regex matches in selected text'])
				mode = 'p'
				break

			case '<a-s>':
				logs.push([t, 'split selected text on line ends'])
				break

			case 't':
				logs.push([t, 'select to next character'])
				mode = 'c'
				break

			case 'u':
				logs.push([t, 'undo'])
				break

			case 'w':
				logs.push([t, 'select to next word start'])
				break

			case '<a-w>':
				logs.push([t, 'select to next WORD start'])
				break

			case 'x':
				logs.push([t, 'select line'])
				break

			case 'X':
				logs.push([t, 'extend line'])
				break

			case '<a-x>':
				logs.push([t, 'extend selections to whole lines'])
				break

			case 'y':
				logs.push([t, 'yank selected text'])
				break

			case 'Z':
				logs.push([t, 'save selections on register'])
				break

			case '<a-z>':
				logs.push([t, 'append selections from register'])
				break

			case '<home>':
				logs.push([t, 'select to line begin'])
				break

			case '<end>':
				logs.push([t, 'select to line end'])
				break

			case '<space>':
				logs.push([t, 'remove all selections except main'])
				break

			case '<a-space>':
				logs.push([t, 'remove main selection'])
				break

			case '&':
				logs.push([t, 'align selection cursors'])
				break

			case '~':
				logs.push([t, 'convert to upper case in selections'])
				break

			case '*':
				logs.push([t, 'set search pattern to main selection content'])
				break

			case '"':
				logs.push([t, 'select register'])
				mode = 'c'
				break

			case '%':
				logs.push([t, 'select whole buffer'])
				break

			case '.':
				logs.push([t, 'repeat last insert command'])
				break

			case '<':
				logs.push([t, 'dedent'])
				break

			case '>':
				logs.push([t, 'indent'])
				break

			case '<a-&>':
				logs.push([t, 'copy indentation'])
				break

			case '/':
				logs.push([t, 'select next given regex match'])
				mode = 'p'
				break

			case '<a-/>':
				logs.push([t, 'select previous given regex match'])
				mode = 'p'
				break

			default:
				console.debug('unknown token', t)
		}
	}
	return logs
}

var buildDl = function (keys) {
	var tokens = tokenize(keys)
	var annotations = annotate(tokens)
	var dl = document.createElement('dl')

	annotations.forEach(function (a) {
		var dt = document.createElement('dt')
		var kbd = document.createElement('kbd')
		kbd.textContent = a[0]
		if (a[2]) {
			kbd.classList.add(`kbd-${a[2]}`)
		}
		dt.appendChild(kbd)
		dl.appendChild(dt)

		var dd = document.createElement('dd')
		dd.textContent = a[1]
		dl.appendChild(dd)
	})

	return dl
}

var strip = function (keys) {
	return keys
		.replace(/\n/, '\\n')
		// remove ,q
		.slice(0, -2)
}

player.setAttribute('src', 'asciicasts/' + id + '.json')

// populate keys
keys.textContent = strip(asciicast.keys)
annotations.appendChild(buildDl(asciicast.keys))

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

