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
{id: '50ad2cb165b8db0002000029', keys: '%S\n\n<ret><a-j>Xs ><ret>d,q', in: `> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
> doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
> veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
> ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

> Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
> nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
> consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
> ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`, out: `> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

> Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`},
{id: '50ae009b65b8db0002000047', keys: '3CdpL<a-`>,q', in: `Ivm is an awesome text editor based on
Iv, and is used to play a game called
Ivmgolf. A challenge, simple for many
Ivmgolfers, can still hide secrets.`, out: `Vim is an awesome text editor based on
Vi, and is used to play a game called
Vimgolf. A challenge, simple for many
Vimgolfers, can still hide secrets.`},
{id: '50c13afab855760002000049', keys: '23CQwyepQ23q,q', in: `a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z
a b c d e f g h i j k l m n o p q r s t u v w x y z`, out: `a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z
a b  c   d    e     f      g       h        i         j          k           l            m             n              o               p                q                 r                  s                   t                    u                     v                      w                       x                        y                         z`},
{id: '50c2c246b0544c000200003f', keys: '%<a-s>hyQ10hRQ6q,q', in: `01234567890123456789012345678901234567890123456789012345678901234567890123456789
1                                                                              0
2                                                                              1
3                                                                              2
4                                                                              3
5                                                                              4
6                                                                              5
7                                                                              6
8                                                                              7
9                                                                              8
01234567890123456789012345678901234567890123456789012345678901234567890123456789`, out: `01234567890123456789012345678901234567890123456789012345678901234567890123456789
1        0         0         0         0         0         0         0         0
2        1         1         1         1         1         1         1         1
3        2         2         2         2         2         2         2         2
4        3         3         3         3         3         3         3         3
5        4         4         4         4         4         4         4         4
6        5         5         5         5         5         5         5         5
7        6         6         6         6         6         6         6         6
8        7         7         7         7         7         7         7         7
9        8         8         8         8         8         8         8         8
01234567890123456789012345678901234567890123456789012345678901234567890123456789`},
{id: '50d0c33daa503f000200000f', keys: '<a-l>S<space><ret>r_,q', in: `(a) (abc) (abcd) (123456)`, out: `___ _____ ______ ________`},
{id: '51103ad8041832000200003f', keys: 'O<space>v<space><down><ret><space>m<space><esc>%<a-s>Hd22p2<a-space>hd%y6p,q', in: `vim`, out: ` v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v
vimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvim
 m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m
 v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v
vimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvim
 m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m
 v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v
vimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvim
 m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m
 v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v
vimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvim
 m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m
 v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v
vimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvim
 m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m
 v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v
vimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvim
 m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m
 v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v  v
vimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvimvim
 m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m  m`},
{id: '5192f96ad8df110002000002', keys: '%S\s<ret>a)<esc>i(<esc>,q', in: `one two
three`, out: `(one) (two)
(three)`},
{id: '524e1a20b81fe50002000008', keys: 'Qxs,<ret>a<ret><esc><a-x>s:<ret>&<esc><space>jq,q', in: `attr_reader :align, :variables, :with
attr_accessor :spaces, :to, :complete, :challenge
# vim: set expandtab:`, out: `attr_reader :align,
            :variables,
            :with
attr_accessor :spaces,
              :to,
              :complete,
              :challenge
# vim: set expandtab:`},
{id: '52c3cb0d9b8634000200000e', keys: '3wEcNEW<esc>9lr4,q', in: `A HAPPY END WITH YEAR 2013 !`, out: `A HAPPY NEW YEAR 2014 !`},
{id: '53369b712a09c1000223fb57', keys: 't[a[2]<esc>o{<esc>m>>lr,jt{dm>>a<ret>}<esc>,q', in: `/* Frame (32 bytes) */
static const unsigned char pkt1[32] = {
0x08, 0x60, 0x6e, 0xf1, 0x3c, 0xb9, 0x9c, 0xc7, /* .\`n.<... */
0xa6, 0x35, 0x08, 0x12, 0x08, 0x00, 0x45, 0x00, /* .5....E. */
0x05, 0xdc, 0x1b, 0xe3, 0x40, 0x00, 0x31, 0x06, /* ....@.1. */
0xe8, 0xc8, 0xcb, 0xd9, 0x00, 0xda, 0xc0, 0xa8  /* ........ */
};

/* Frame (32 bytes) */
static const unsigned char pkt2[32] = {
0x08, 0x60, 0x6e, 0xf1, 0x3c, 0xb9, 0x9c, 0xc7, /* .\`n.<... */
0xa6, 0x35, 0x08, 0x12, 0x08, 0x00, 0x45, 0x00, /* .5....E. */
0x05, 0xdc, 0x6b, 0x98, 0x40, 0x00, 0x31, 0x06, /* ..k.@.1. */
0x99, 0x13, 0xcb, 0xd9, 0x00, 0xda, 0xc0, 0xa8, /* ........ */
};`, out: `/* Frame (32 bytes) */
static const unsigned char pkt1[2][32] = {
        {
        0x08, 0x60, 0x6e, 0xf1, 0x3c, 0xb9, 0x9c, 0xc7, /* .\`n.<... */
        0xa6, 0x35, 0x08, 0x12, 0x08, 0x00, 0x45, 0x00, /* .5....E. */
        0x05, 0xdc, 0x1b, 0xe3, 0x40, 0x00, 0x31, 0x06, /* ....@.1. */
        0xe8, 0xc8, 0xcb, 0xd9, 0x00, 0xda, 0xc0, 0xa8  /* ........ */
        },
        {
        0x08, 0x60, 0x6e, 0xf1, 0x3c, 0xb9, 0x9c, 0xc7, /* .\`n.<... */
        0xa6, 0x35, 0x08, 0x12, 0x08, 0x00, 0x45, 0x00, /* .5....E. */
        0x05, 0xdc, 0x6b, 0x98, 0x40, 0x00, 0x31, 0x06, /* ..k.@.1. */
        0x99, 0x13, 0xcb, 0xd9, 0x00, 0xda, 0xc0, 0xa8, /* ........ */
        }
};`},
{id: '536cfa23fcccd100025678bd', keys: 'fuf}dOf=f;<esc>P,q', in: `attr("y",function(v){return v})`, out: `f=function(v){return v};
attr("y",f)`},
{id: '537a553282aa3e000222048a', keys: 'jGjK>><a-X>>>s"><ret>&a<space><esc>t<lt>l&,q', in: `<table>
<thead>
<th>
<th id="first_name">First Name</th>
<th id="last_name">Last Name</th>
<th id="address">Address</th>
<th id="city">City</th>
<th id="state">State</th>
<th id="zip_postal">Zip</th>
<th id="country">Country</th>
<th id="phone">Phone</th>
</th>
</thead>
</table>`, out: `<table>
        <thead>
                <th>
                <th id="first_name"> First Name</th>
                <th id="last_name "> Last Name </th>
                <th id="address   "> Address   </th>
                <th id="city      "> City      </th>
                <th id="state     "> State     </th>
                <th id="zip_postal"> Zip       </th>
                <th id="country   "> Country   </th>
                <th id="phone     "> Phone     </th>
                </th>
        </thead>
</table>`},
{id: '53d93fc3768e280002124f23', keys: '%ri,q', in: `VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV`, out: `iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii`},
{id: '54595b13128576000257a3c1', keys: '%<a-s><a-h>ec<c-r>#0<esc>,q', in: `10 PRINT "The actual"
15 PRINT "code doesn't"
16 PRINT "really matter."
20 PRINT "Just take"
25 PRINT "care of"
30 PRINT "the numbers."`, out: `10 PRINT "The actual"
20 PRINT "code doesn't"
30 PRINT "really matter."
40 PRINT "Just take"
50 PRINT "care of"
60 PRINT "the numbers."`},
{id: '5462e3f41198b80002512673', keys: '%<a-s>a"<esc>bh.,q', in: `foo = a
      ab
      abc`, out: `foo = "a"
      "ab"
      "abc"`},
{id: '54698da795f6da00020d85ed', keys: 'j<a-i>i<a-J>Ec,<esc>,q', in: `enum PlaybackRequestType {
    case Next
    case Previous
    case Play
    case Stop
}`, out: `enum PlaybackRequestType {
    case Next, Previous, Play, Stop
}`},
{id: '54862fbb3f90ac0002904cf5', keys: '%<a-s><a-K>I<ret>d,q', in: `Leave only the
numbered lines.
LINE 1
LINE 2
LINE 3
That's all.
Thank you
very much.`, out: `LINE 1
LINE 2
LINE 3`},
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
