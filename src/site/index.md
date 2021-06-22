---
title: ART as CODE
subtitle: Using SVGs is performance first design, and look great too.
layout: layouts/home.njk
head: ART as CODE
subhead: SVGs are better for performance and look great at all resolutions.
imgpath: ../images/

himgpath: ../../images/hero-images/
heroupperimg: hero-desk-ruff.jpg
heroupperimgmob: hero-mob-ruff.jpg
amazon:
    link: https://www.amazon.com
    text: CALL TO ACTION

---

# SVGs are better.

On [this site](https://svg-example.netlify.app/) all the binary assets - all web assets typically delivered as JPGs, PNGs, or GIFs - are instead served from a single, specially formatted SVG file. The only exception is the dog image here in the hero. Some images, like the dog, can only be served in a raster format. But since flat web design has been a standard for over 10 years, most binary assets are better served as SVGs, which is the web's leading vector format.

[More info on Vector vs. Raster formats](https://www.thevisualpro.com/visualpro-blog/vector-vs-raster-whats-the-difference)

A primary driver of page performance is the quantity of HTTP requests in the page. Each JPG, PNG, or GIF (+ externally referenced JavaScript and external style sheets) on a page generates a coorsponding HTTP request.

By building and properly formating a single SVG file, it's possible to significantly reduce the total HTTP requests required to serve a site.

In this project, the specially formatted SVG file is called: sprite-sheet.svg and you should look at its source.

[Sprite Sheet Source](/images/sprite-sheet.svg)

## Source code:

You can find all the source code at this public repo:

[https://github.com/tneigerux/svg-example/](https://github.com/tneigerux/svg-example/)

There's a bit more detail in the README()

## SVGs as content - example

  <pre>
    <code>
      &lt;svg width=&quot;240&quot; class=&quot;aoa-icon&quot;&gt;&lt;use xlink:href=&quot;/images/sprite-sheet.svg#aoa&quot;/&gt;&lt;/svg&gt;
    </code>
  </pre>

[Actual Example, line 5](https://github.com/tneigerux/svg-example/blob/main/src/site/_includes/header.njk)

## SVGs as background style - example

  <pre>
    <code>
      {
        background: url("/images/sprite-sheet.svg#v-email") no-repeat;
      }
    </code>
  </pre>


Some of the SVG assets have been added below as content images. These are all served from a single file (and its single corresponding HTTP request).

[Actual Example, line 523](https://github.com/tneigerux/svg-example/blob/main/src/site/_includes/postcss/styles.css#L523)