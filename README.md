# sass-themer-modular-scale

## library

sass-themer-modular-scale/index.scss

## demo

public/index.html

## test
cd src/
npm install
npm run start

## usage

### modular scale mixins

|name|mixin|
|----|--------|
| Reset | @include resetModularScale() |
| Set | @include setModularScaleItem($name, $base, $ratio) |

### modular scale functions

```
$amount - number to increase scale by (1 to n)
$label - the name set in mixin setModularScaleItem().
```

|name|function|
|----|--------|
| Scale | modularscale($amount, $label) |
