var asciicasts = [
{id: '4d1a34ccfa85f32065000004', keys: '%s#<ret>jxyxR,q', in: `Make the pairs of lines match up by making each second line same as first:

# Appending text:
The name "Vim" is an acronym for "Vi IMproved"
The name "Vim" is an acronym for

# Editing text:
Vim is a text editor originally released by Bram Moolenaar in 1991 for the Amiga
Trivia: Vim is a text editor released by Bram Moolenaar in 1991 for the Amiga

# Deleting text:
Vim has a vi compatibility mode
Vim has a vi compatibility mode but when not in this mode Vim has many enhancements over vi`, out: `Make the pairs of lines match up by making each second line same as first:

# Appending text:
The name "Vim" is an acronym for "Vi IMproved"
The name "Vim" is an acronym for "Vi IMproved"

# Editing text:
Vim is a text editor originally released by Bram Moolenaar in 1991 for the Amiga
Vim is a text editor originally released by Bram Moolenaar in 1991 for the Amiga

# Deleting text:
Vim has a vi compatibility mode
Vim has a vi compatibility mode`},
{id: '4d1a71c0b8cb34093200010b', keys: 'Qo<ret>Fizz<ret><esc>Q32qQABuzz<esc>5kQ19q%<a-s>"#P<a-k>z<ret>i<space><esc>,q', in: ``, out: `1
2
3 Fizz
4
5 Buzz
6 Fizz
7
8
9 Fizz
10 Buzz
11
12 Fizz
13
14
15 FizzBuzz
16
17
18 Fizz
19
20 Buzz
21 Fizz
22
23
24 Fizz
25 Buzz
26
27 Fizz
28
29
30 FizzBuzz
31
32
33 Fizz
34
35 Buzz
36 Fizz
37
38
39 Fizz
40 Buzz
41
42 Fizz
43
44
45 FizzBuzz
46
47
48 Fizz
49
50 Buzz
51 Fizz
52
53
54 Fizz
55 Buzz
56
57 Fizz
58
59
60 FizzBuzz
61
62
63 Fizz
64
65 Buzz
66 Fizz
67
68
69 Fizz
70 Buzz
71
72 Fizz
73
74
75 FizzBuzz
76
77
78 Fizz
79
80 Buzz
81 Fizz
82
83
84 Fizz
85 Buzz
86
87 Fizz
88
89
90 FizzBuzz
91
92
93 Fizz
94
95 Buzz
96 Fizz
97
98
99 Fizz
100 Buzz`},
{id: '4d1a7a05b8cb3409320001b4', keys: '%s<lt><ret>m<a-K>\n<ret>d,q', in: `<h1>What Vim Can Do</h1> 
<p> 
Vim is an advanced text editor that seeks to provide the power of
the de-facto Unix editor 'Vi', with a more complete feature set.
It's useful whether you're <a href='viusers.php'>already using vi</a> or <a
href='others.php'>using a different editor</a>.  Users of Vim 5 and 6 should
consider upgrading to Vim 7.  The main advantages of Vim 6 compared to Vim 5 
can be found on <a href='vim5users.php'>this page</a>.
</p> 
 
<h1>A General Overview</h1> 
 
<a href="http://tnerual.eriogerg.free.fr/0xBABAF000L/10_en.html"><img src='/images/0xbabaf000l.png' alt="Emaks-Vim-Notepad comic" width="800" height="254"></a> 
Copyright (c) 2007 Laurent Gregoire
 
<h4>What Is Vim?</h4> 
<p> 
Vim is a highly configurable text editor built to enable efficient text
editing. It is an improved version of the vi editor distributed with
most UNIX systems.  
<p> 
Vim is often called a "programmer's editor," and so useful for
programming that many consider it an entire <abbr title='integrated
development environment'>IDE</abbr>.  It's not just for programmers,
though.  Vim is perfect for all kinds of text editing, from composing
email to editing configuration files.
</p> 
<p> 
Despite what the above comic suggests, Vim can be configured to work in a very
simple (Notepad-like) way, called evim or Easy Vim.
</p> 
 
<h4>What Vim Is Not?</h4> 
<p> 
Vim isn't an editor designed to hold its users' hands.  It is a tool,
the use of which must be learned.
</p> 
 
<p> 
Vim isn't a word processor.  Although it can display text with various
forms of highlighting and formatting, it isn't there to provide WYSIWYG
editing of typeset documents.  (It is great for editing TeX, though.)
</p> 
 
<h4>Vim's License</h4> 
<p> 
Vim is charityware.  Its license is GPL-compatible, so it's
distributed freely, but we ask that if you find it useful you make a
donation to help children in Uganda through the
<a href='http://iccf-holland.org/'>ICCF</a>.  The full license text can be
found in the <a href='http://vimdoc.sourceforge.net/htmldoc/uganda.html#license'>documentation</a>.
Much more information about charityware on
<A HREF="http://Charityware.info/">Charityware.info</a>.
</p> `, out: `What Vim Can Do 
 
Vim is an advanced text editor that seeks to provide the power of
the de-facto Unix editor 'Vi', with a more complete feature set.
It's useful whether you're already using vi or <a
href='others.php'>using a different editor.  Users of Vim 5 and 6 should
consider upgrading to Vim 7.  The main advantages of Vim 6 compared to Vim 5 
can be found on this page.
 
 
A General Overview 
 
 
Copyright (c) 2007 Laurent Gregoire
 
What Is Vim? 
 
Vim is a highly configurable text editor built to enable efficient text
editing. It is an improved version of the vi editor distributed with
most UNIX systems.  
 
Vim is often called a "programmer's editor," and so useful for
programming that many consider it an entire <abbr title='integrated
development environment'>IDE.  It's not just for programmers,
though.  Vim is perfect for all kinds of text editing, from composing
email to editing configuration files.
 
 
Despite what the above comic suggests, Vim can be configured to work in a very
simple (Notepad-like) way, called evim or Easy Vim.
 
 
What Vim Is Not? 
 
Vim isn't an editor designed to hold its users' hands.  It is a tool,
the use of which must be learned.
 
 
 
Vim isn't a word processor.  Although it can display text with various
forms of highlighting and formatting, it isn't there to provide WYSIWYG
editing of typeset documents.  (It is great for editing TeX, though.)
 
 
Vim's License 
 
Vim is charityware.  Its license is GPL-compatible, so it's
distributed freely, but we ask that if you find it useful you make a
donation to help children in Uganda through the
ICCF.  The full license text can be
found in the documentation.
Much more information about charityware on
Charityware.info.
 `},
{id: '4d1ac1800a045132c0000011', keys: 'wa<space><esc>xa<ret><esc>f)..f;>.f;>.,q', in: `#include<stdio.h>
int main(void){puts("Hello world!");return 0;}`, out: `#include <stdio.h>

int main(void)
{
    puts("Hello world!");
    return 0;
}`},
{id: '4d665abd7d73e02a55000009', keys: '~iList<lt><esc>mc><esc><a-b>yAnew<space>Array<c-r>"();<esc>%s,<ret>Lc<ret><esc><a-C><a-&><a-x>Z<a-K>\.<ret>ad<a-;>z);<home>c.add(<esc><a-x>dm<a-x><a-R>,q', in: `double[] c = 
{
        112.2, 102, 12, 954, 39.43,
        49.4, 2224.6, 94, 123,
        4929.55, 12, 98, 91.22
};`, out: `List<Double> c = new ArrayList<Double>();
c.add(112.2);
c.add(102d);
c.add(12d);
c.add(954d);
c.add(39.43);
c.add(49.4);
c.add(2224.6);
c.add(94d);
c.add(123d);
c.add(4929.55);
c.add(12d);
c.add(98d);
c.add(91.22);`},
{id: '4d6f45b938c0aa691b000003', keys: 'cabcdef<home><esc>Q<home>dP<a-p>Q4q,q', in: `6`, out: `abacabadabacabaeabacabadabacabafabacabadabacabaeabacabadabacaba`},
{id: '4ddbd92898957e0001000016', keys: '12X<a-s>d%<a-s>p,q', in: `China,1,2,3,4,5,6
Brazil,3,1,2,5,5,6
SAD,9,2,3,4,5,6
UK,3,8,3,9,5,1
France,7,2,3,4,5,6
Germany,1,7,3,2,5,6
Russia,1,6,2,9,5,6
Spain,1,2,2,4,5,6
Greece,1,3,3,4,5,6
India,4,2,3,4,5,6
Turkey,1,2,3,4,5,9
Poland,1,2,3,4,5,6
China,1,2,3,8,5,6
Brazil,1,2,3,4,5,6
SAD,1,2,3,4,5,6
UK,1,2,3,4,5,6
France,1,2,3,4,5,6
Germany,1,2,3,4,5,6
Russia,1,2,7,4,5,6
Spain,1,2,3,4,5,6
Greece,1,2,2,4,5,6
India,1,2,8,4,5,6
Turkey,1,2,1,7,5,6
Poland,2,2,3,9,5,6`, out: `China,1,2,3,8,5,6
China,1,2,3,4,5,6
Brazil,1,2,3,4,5,6
Brazil,3,1,2,5,5,6
SAD,1,2,3,4,5,6
SAD,9,2,3,4,5,6
UK,1,2,3,4,5,6
UK,3,8,3,9,5,1
France,1,2,3,4,5,6
France,7,2,3,4,5,6
Germany,1,2,3,4,5,6
Germany,1,7,3,2,5,6
Russia,1,2,7,4,5,6
Russia,1,6,2,9,5,6
Spain,1,2,3,4,5,6
Spain,1,2,2,4,5,6
Greece,1,2,2,4,5,6
Greece,1,3,3,4,5,6
India,1,2,8,4,5,6
India,4,2,3,4,5,6
Turkey,1,2,1,7,5,6
Turkey,1,2,3,4,5,9
Poland,2,2,3,9,5,6
Poland,1,2,3,4,5,6`},
{id: '4e31627b74ab580001000007', keys: 'm<a-b>*5Nd<a-f>fwcvoid<space><esc>b*<space>cdouble<space><esc>ndbyggxR<a-/>\$<ret>d2<a-n>d%s<ret>./s<ret>iMath.<esc>gjxd,q', in: `<?php
class Foo
{
        private $var1;
        private $var2;

        public function Foo($val)
        {
                $this->init($val);
                $this->doSomething();
        }

        private function init($val)
        {
                $this->var1 = $val;
        }
        
        private function doSomething()
        {
                $this->var2 = sqrt($this->var1);
        }

        public function getResult()
        {
                return $this->var2;
        }
}
?>`, out: `public class Foo
{
        private double var1;
        private double var2;

        public Foo(double val)
        {
                init(val);
                doSomething();
        }

        private void init(double val)
        {
                var1 = val;
        }
        
        private void doSomething()
        {
                var2 = Math.sqrt(var1);
        }

        public double getResult()
        {
                return var2;
        }
}`},
{id: '4ef209ef78702b0001000019', keys: '%s# <ret>O<ret><esc>,q', in: `#Set the global prefix key to C-q (default is C-b)
set-option -g prefix C-q
bind-key C-q last-window
# Remove default binding since we’re replacing
unbind %
bind | split-window -h
bind - split-window -v
# Set status bar
set -g status-bg black
set -g status-fg white
set -g status-left '#[fg=green]#H'
# Highlight active window
set-window-option -g window-status-current-bg red
set -g status-right '#[fg=yellow]#(uptime | cut -d "," -f 2-)'
# Set window notifications
setw -g monitor-activity on
set -g visual-activity on
# Automatically set window title
setw -g automatic-rename`, out: `#Set the global prefix key to C-q (default is C-b)
set-option -g prefix C-q
bind-key C-q last-window


# Remove default binding since we’re replacing
unbind %
bind | split-window -h
bind - split-window -v


# Set status bar
set -g status-bg black
set -g status-fg white
set -g status-left '#[fg=green]#H'


# Highlight active window
set-window-option -g window-status-current-bg red
set -g status-right '#[fg=yellow]#(uptime | cut -d "," -f 2-)'


# Set window notifications
setw -g monitor-activity on
set -g visual-activity on


# Automatically set window title
setw -g automatic-rename`},
{id: '4fbf8e303be58b0001000024', keys: 'xs:<ret><a-f>VZ/}<ret>N<a-z>i<ret><up><esc>1<a-space>i<space><space><esc><a-x><a-k>E<ret>.n6<a-space>2ld,q', in: `{Vertex('x'): {Vertex('v'): Edge(Vertex('v'), Vertex('x')), Vertex('z'): Edge(Vertex('z'), Vertex('x')), Vertex('y'): Edge(Vertex('y'), Vertex('x'))}, Vertex('y'): {Vertex('x'): Edge(Vertex('y'), Vertex('x')), Vertex('w'): Edge(Vertex('w'), Vertex('y')), Vertex('z'): Edge(Vertex('z'), Vertex('y'))}, Vertex('z'): {Vertex('x'): Edge(Vertex('z'), Vertex('x')), Vertex('y'): Edge(Vertex('z'), Vertex('y')), Vertex('u'): Edge(Vertex('u'), Vertex('z'))}, Vertex('u'): {Vertex('v'): Edge(Vertex('v'), Vertex('u')), Vertex('w'): Edge(Vertex('w'), Vertex('u')), Vertex('z'): Edge(Vertex('u'), Vertex('z'))}, Vertex('v'): {Vertex('u'): Edge(Vertex('v'), Vertex('u')), Vertex('x'): Edge(Vertex('v'), Vertex('x')), Vertex('w'): Edge(Vertex('w'), Vertex('v'))}, Vertex('w'): {Vertex('u'): Edge(Vertex('w'), Vertex('u')), Vertex('v'): Edge(Vertex('w'), Vertex('v')), Vertex('y'): Edge(Vertex('w'), Vertex('y'))}}`, out: `{
  Vertex('x'): {
    Vertex('v'): Edge(Vertex('v'), Vertex('x')), 
    Vertex('z'): Edge(Vertex('z'), Vertex('x')), 
    Vertex('y'): Edge(Vertex('y'), Vertex('x'))
  },
  Vertex('y'): {
    Vertex('x'): Edge(Vertex('y'), Vertex('x')), 
    Vertex('w'): Edge(Vertex('w'), Vertex('y')), 
    Vertex('z'): Edge(Vertex('z'), Vertex('y'))
  },
  Vertex('z'): {
    Vertex('x'): Edge(Vertex('z'), Vertex('x')), 
    Vertex('y'): Edge(Vertex('z'), Vertex('y')), 
    Vertex('u'): Edge(Vertex('u'), Vertex('z'))
  },
  Vertex('u'): {
    Vertex('v'): Edge(Vertex('v'), Vertex('u')), 
    Vertex('w'): Edge(Vertex('w'), Vertex('u')), 
    Vertex('z'): Edge(Vertex('u'), Vertex('z'))
  },
  Vertex('v'): {
    Vertex('u'): Edge(Vertex('v'), Vertex('u')), 
    Vertex('x'): Edge(Vertex('v'), Vertex('x')), 
    Vertex('w'): Edge(Vertex('w'), Vertex('v'))
  },
  Vertex('w'): {
    Vertex('u'): Edge(Vertex('w'), Vertex('u')), 
    Vertex('v'): Edge(Vertex('w'), Vertex('v')), 
    Vertex('y'): Edge(Vertex('w'), Vertex('y'))
  }
}`},
{id: '571808767dd9d30009000001', keys: '%s,<ret>&,q', in: `just = make,
       all,
       the,
       commas,
       line,
       up`, out: `just = make  ,
       all   ,
       the   ,
       commas,
       line  ,
       up`},
]
