# ddjrmd

## Download

**CSS** (place in head): `https://cdn.jsdelivr.net/gh/randommonkey/ds.css@1.2.0/dist/ds.min.css`

**JS** (place at bottom):
`https://cdn.jsdelivr.net/gh/randommonkey/ds.css@1.2.0/dist/ds.min.js`
## Banners

### Banner with one column, title, subtitle and link
```markdown
# BANNER {.size_half .bg_543984 .single}

## Banner title

### Banner subtitle
[link](http://example.com)
```
### Banner with one column, title, subtitle, link and background image
```markdown
# BANNER {.size_full .single}

## Banner title

### Banner subtitle
[link](http://example.com)
![](path/to/image.jpg)
```

### Banner with multiple columns, title, subtitle, link
```markdown
# BANNER {.size_full .bg_F43954 .multi}

## Título {.col-6}
### Subtítulo
[Link](http://example.com)

## Título {.col-6}
### Subtítulo
[Link](http://example.com)
```

## Carousel

### Slides with description, link, background-image or background-color. No columns
```markdown
# CAROUSEL

## Slide title {.bg_9e9d24 .hidden}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
![](http://via.placeholder.com/350x150)

## Slide title {.bg_AFB42B}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

## Slide title {.bg_C0CA33}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

## Slide title {.bg_CDDC39}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
![](http://via.placeholder.com/350x150)

## Slide title {.bg_D4E157}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
```
## Splitted text
```markdown
# SPLITTED TEXT {.init_left}

This is an R Markdown document. Markdown is a simple formatting syntax for authoring HTML, PDF,and MS Word documents. For more details on using R Markdown see [here](http://rmarkdown.rstudio.com).

When you click the **Knit** button a document will be generated that includes both content as well as the output of any embedded R code chunks within the document. You can embed an R code chunk like this:
```

## Iframe
### Iframe with full height
```markdown
# IFRAME

<iframe src="http://somecontent.com" width="100%" frameborder="0"></iframe>
```
### Iframe with fixed height
```markdown
# IFRAME {.height_500}

<iframe src="http://somecontent.com" width="100%" frameborder="0"></iframe>
```

## Boxes
### Boxes with min width and gap
```markdown
# BOXES {.minwidth_320 .gap_10}

## Box header {.bg_2196f3}
Box description

## Box header
Box description
![](http://via.placeholder.com/800x600)

## Box header
Box description
```

## Post
```markdown
# TEXT
## Post title
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  

![](http://via.placeholder.com/350x150)

Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


<div class="fullwidth">
<img src="http://via.placeholder.com/1350x150">
</div>

> quis nostrud exercitation [ullamco laboris nisi](ut aliquip) ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

## Search
```markdown
# SEARCH

- Lorem ipsum dolor sit amet.
- consectetur adipisicing elit, sed do eiusmod
- tempor incididunt ut labore et dolore magna aliqua.
- Ut enim ad minim veniam
- quis nostrud exercitation ullamco 
- laboris nisi ut aliquip ex ea commodo
consequat.
```

## Overlay
```markdown
# OVERLAYS

## Title Overlay: Example {.overlay_example}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper, mauris id imperdiet sodales, velit diam gravida leo, nec interdum nisi dolor in nulla. Proin tincidunt purus eu ipsum commodo tincidunt. Phasellus vehicula tempus orci. Proin egestas risus eu euismod eleifend. Aenean scelerisque vehicula lacus sit amet tempor. Etiam nisl nunc, viverra in erat a, facilisis congue ex. Nulla a nisi enim. Maecenas porttitor fringilla convallis.

## Title Overlay: Name {.overlay_name}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper, mauris id imperdiet sodales, velit diam gravida leo, nec interdum nisi dolor in nulla. Proin tincidunt purus eu ipsum commodo tincidunt. Phasellus vehicula tempus orci. Proin egestas risus eu euismod eleifend. Aenean scelerisque vehicula lacus sit amet tempor. Etiam nisl nunc, viverra in erat a, facilisis congue ex. Nulla a nisi enim. Maecenas porttitor fringilla convallis.

## Title Overlay: Lorem {.overlay_lorem}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper, mauris id imperdiet sodales, velit diam gravida leo, nec interdum nisi dolor in nulla. Proin tincidunt purus eu ipsum commodo tincidunt. Phasellus vehicula tempus orci. Proin egestas risus eu euismod eleifend. Aenean scelerisque vehicula lacus sit amet tempor. Etiam nisl nunc, viverra in erat a, facilisis congue ex. Nulla a nisi enim. Maecenas porttitor fringilla convallis.
```

## TODO
- Change setter of banner's height to `height_` instead of `size_`
- Add an [iFrame Resizer](https://github.com/davidjbradshaw/iframe-resizer) option to `Iframe` component
- Write a better `README.md`