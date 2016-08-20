#!/bin/bash
alias jekyll='docker run --rm -v "$PWD:/src" -p 4000:4000 grahamc/jekyll'
jekyll build
jekyll serve -H 0.0.0.0 --force_polling
