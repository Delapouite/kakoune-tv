# Kakoune TV

**Work in progress**

https://delapouite.github.io/kakoune-tv/

# Tools

2 shell scripts handle the job of generating the asciicasts.json used by the player.

They are not bulletproof, and you may need to adjust them to suit your configuration.

Currently they must be used in the root directory of a mawww/golf git clone on your machine.

Create two empty dirs `xdokeys` and `asciicasts`.

Firt run `convert.sh` with a vimgolf id, it will create a `.sh` file in the `xdokeys` dir.

Then run `rec.sh` in tmux providing the same vimgolf id. It will generate a `.json` file in the `asciicasts` dir.

