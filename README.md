# sass-themer-modular-scale

## library

sass-themer-modular-scale/index.scss

## demo

public/index.html

## test
src/app/router/route/IndexComponent/index.scss

```
cd src/
npm install
npm run start
```

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


## example

```scss
@import "~sass-themer-modular-scale/index.scss";

@include resetModularScale();
@include setModularScaleItem(desktop-font, 0.75rem, 1.18);
@include setModularScaleItem(tablet-font, 0.7rem, 1.17);
@include setModularScaleItem(mobile-font, 0.65rem, 1.16);

h1 {
    font-size: modularscale(6, desktop-font);

    //breakpoint
    font-size: modularscale(6, tablet-font);
}
h2 {
    font-size: modularscale(5, desktop-font);
}
h3 {
    font-size: modularscale(4, desktop-font);
}
h4 {
    font-size: modularscale(3, desktop-font);
}
h5 {
    font-size: modularscale(2, desktop-font);
}
p {
    font-size: modularscale(1, desktop-font);
}
```
