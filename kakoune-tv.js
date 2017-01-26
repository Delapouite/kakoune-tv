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
	var countBuffer = []
	var macroRecording = false
	var logs = []
	var insertSwitch
	var promptSwitch
	var chooseSwitch
	// triggered by <a-;>
	var oneShot = false

	while (t = tokens.shift()) {
		if (mode === 'i' && t !== '<esc>' && t !== '<a-;>' && t !== '<home>' && t !== '<end>') {
			insertBuffer.push(t)
			continue
		}
		if (mode === 'p' && t !== '<ret>') {
			promptBuffer.push(t)
			continue
		}
		if (mode === 'c') {
			logs.push([[chooseSwitch[0], t], chooseSwitch[1], 'c'])
			mode = 'n'
			continue
		}
		if (countBuffer.length && isNaN(Number(t))) {
			logs.push([countBuffer.join(''), 'count for next command', 'd'])
			countBuffer = []
		}

		switch (t) {
			// insert mode
			case 'a':
				insertSwitch = [t, 'insert [text] after selected text']
				mode = 'i'
				break

			case 'A':
				insertSwitch = [t, 'insert [text] at line end']
				mode = 'i'
				break

			case 'c':
				insertSwitch = [t, 'change selected text to [text]']
				mode = 'i'
				break

			case 'i':
				insertSwitch = [t, 'insert [text] before selected text']
				mode = 'i'
				break

			case 'I':
				insertSwitch = [t, 'insert [text] at line begin']
				mode = 'i'
				break

			case 'o':
				insertSwitch = [t, 'insert [text] on new line below']
				mode = 'i'
				break

			case 'O':
				insertSwitch = [t, 'insert [text] on new line above']
				mode = 'i'
				break

			case '<esc>':
				logs.push([[insertSwitch[0], insertBuffer.join(''), t], insertSwitch[1], 'i'])
				insertBuffer = []
				mode = 'n'
				break

			// prompt mode
			case '<a-k>':
				promptSwitch = [t, 'keep selections matching regex [text]']
				mode = 'p'
				break

			case '<a-K>':
				promptSwitch = [t, 'keep selections not matching regex [text]']
				mode = 'p'
				break

			case 's':
				promptSwitch = [t, 'select regex [text] matches in selected text']
				mode = 'p'
				break

			case '/':
				promptSwitch = [t, 'select next given regex [text] match']
				mode = 'p'
				break

			case '<a-/>':
				promptSwitch = [t, 'select previous given regex [text] match']
				mode = 'p'
				break

			case '<ret>':
				logs.push([[promptSwitch[0], promptBuffer.join(''), t], promptSwitch[1], 'p'])
				promptBuffer = []
				mode = 'n'
				break

			// choose mode (like prompt but with no <ret>)
			case 'f':
				chooseSwitch = [t, 'select onto next [text] character']
				mode = 'c'
				break

			case '<a-f>':
				chooseSwitch = [t, 'select to previous [text] character included']
				mode = 'c'
				break

			case 'g':
				chooseSwitch = [t, 'goto [text]']
				mode = 'c'
				break

			case 't':
				chooseSwitch = [t, 'select to next [text] character']
				mode = 'c'
				break

			case '"':
				chooseSwitch = [t, 'select [text] register']
				mode = 'c'
				break

			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				countBuffer.push(t)
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
				logs.push([t, `${macroRecording ? 'stop' : 'start'} macro recording`])
				macroRecording = !macroRecording
				break

			case 'R':
				logs.push([t, 'replace selected text with yanked text'])
				break

			case '<a-R>':
				logs.push([t, 'replace selected text with yanked text'])
				break

			case '<a-s>':
				logs.push([t, 'split selected text on line ends'])
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

			case 'z':
				logs.push([t, 'restore selections from register'])
				break

			case 'Z':
				logs.push([t, 'save selections on register'])
				break

			case '<a-z>':
				logs.push([t, 'append selections from register'])
				break

			case '<home>':
				if (insertBuffer.length) {
					logs.push([[insertSwitch[0], insertBuffer.join('')], insertSwitch[1], 'i'])
					insertBuffer = []
				}
				logs.push([t, 'select to line begin'])
				break

			case '<end>':
				if (insertBuffer.length) {
					logs.push([[insertSwitch[0], insertBuffer.join('')], insertSwitch[1], 'i'])
					insertBuffer = []
				}
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

			case '<a-;>':
				logs.push([[insertSwitch[0], insertBuffer.join('')], insertSwitch[1], 'i'])
				insertSwitch = ['', 'insert [text]']
				insertBuffer = []
				logs.push([t, 'escape to normal mode for a single command'])
				mode = 'n'
				oneShot = true
				continue

			default:
				console.debug('unknown token', t)
		}

		if (oneShot) {
			oneShot = false
			mode = 'i'
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

		if (typeof a[0] === 'string') {
			var kbd = document.createElement('kbd')
			kbd.textContent = a[0]
			if (a[2]) {
				kbd.classList.add(`kbd-${a[2]}`)
			}
			dt.appendChild(kbd)
		} else {
			a[0].forEach(function (k, i) {
				var kbd = document.createElement('kbd')
				if (!k) return
				kbd.textContent = k
				if (i === 1) {
					kbd.classList.add(`kbd-${a[2]}`)
				}
				if (i === 2) {
					kbd.classList.add(`kbd-l`)
				}
				dt.appendChild(kbd)
			})
		}

		dl.appendChild(dt)

		var dd = document.createElement('dd')
		if (a[2] !== 'i' && a[2] !== 'p' && a[2] !== 'c') {
			dd.textContent = a[1]
		} else {
			var m = a[1].split('[text]')
			var pre = document.createElement('span')
			pre.textContent = m[0]

			var text = document.createElement('em')
			text.textContent = a[0][1]

			var post = document.createElement('span')
			post.textContent = m[1]

			dd.appendChild(pre)
			dd.appendChild(text)
			dd.appendChild(post)
		}
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

