# SVGs are better.

On [this site](https://svg-example.netlify.app/) all the binary assets - all web assets typically delivered as JPGs, PNGs, or GIFs - are instead served from a single, specially formatted SVG file. The only exception is the dog image in the hero. Some images, like the dog, can only be served in a raster format. But since flat web design has been a standard for over 10 years, most binary assets are better served as SVGs, which is the web's leading vector format.

[More info on Vector vs. Raster formats](https://www.thevisualpro.com/visualpro-blog/vector-vs-raster-whats-the-difference)

A primary driver of page performance is the quantity of HTTP requests in the page. Each JPG, PNG, or GIF (+ externally referenced JavaScript and external style sheets) on a page generates a cooresponding HTTP request, each slowing the page load slightly.

By building and properly formatting a single SVG file, it's possible to significantly reduce the total HTTP requests required to serve a site. The SVG workflow for this site is highly optimized for performance and smooth looking icons. With this comes developer complexity.

The process is highly repetitive and ripe for automation. But before automation can happen, understanding has to come.

For design we use Figma, so there is where our design assets come from, and where our process begins.

This site takes assets from [this Figma design project](https://www.figma.com/file/Ce8qzcTTx8s1lX4v8ZYNRR/Working-w-SVGs?node-id=0%3A1) (Access to the HomeServe organization on Figma required.)

## Optimizing Source Icons from Design

**In Figma**

### Arrange Art

All icons ready for use on the web should be moved to the `sprite-sheet-f` frame in Figma, and aligned left with the others. This will make a key value 0, which means slightly less repetitive copy / pasting. (By convention there is a 4 px vertical gap between each icon.)

### Export Sprite Sheet

Once a new icon(s) are added, export the frame as a SVG. Click the frame title ```sprite-sheet-f``` and scroll to its export setting in the Properties Panel (right rail).

![ss-figma-export.png](https://svg-example.netlify.app/images/ss-figma-export.png)

Save the file to `/src/site/images/` in the local clone of the atendit-com repo. There should be no file with the same name there. There is one called `/src/site/images/sprite-sheet.svg`. In your IDE, open it and the one you just created.

----

## Add Icon to the Project's Files

**In your IDE**

Compare `sprite-sheet.svg` and `sprite-sheet-f.svg`.

Open `sprite-sheet-f.svg` in a browser tab, you should see all the icons including the one you added.

Starting at the top, change the fill color for your `path` elements to `red` and refresh the browser tab, until you've identified all the elements of your new SVG. From your IDE select all the elements in a single icon and copy them to your clipboard.

Paste from the clipboard into the `<defs>` section of `sprite-sheep.svg` and wrap them with `<symbol>` and `</symbol>`, and save the file.

Now you must configure the viewbox. Edit your `<symbol>` to the following: `<symbol id="meaningful-name" viewBox="Y X W H">` but retrieve the values for `Y`, `X`, `W`, and `H` from Figma and change the `id`.

![ss-figma-coords.png](https://svg-example.netlify.app/images/ss-figma-coords.png)

Now you must add a `view` and `use` tag. Scroll to the end of the file `sprite-sheet.svg`.

Add a new line in of each type, and edit the specifics to match the `id` and `viewbox` values for your new icon.

If you've done everything correctly, you can now open file `sprite-sheet.svg` in a browser tab and your new icon should appear. If it does not, check all your values.

For an example of these edits, see this commit: [ac8eb91](https://bitbucket.org/didurememberto/atendit-com/commits/918da83129f6d146465a5f46a133d97d60e2ac04) (Use the "side-by-side diff" option.)

Once your new icon is visible in `sprite-sheet.svg` make sure to delete `sprite-sheet-f.svg`. We don't want it to be checked in as part of the repository.

----

## Add Icon to the Page

Like any image asset, it can be used it two ways, inline or as a CSS background. As an SVG in a sprite sheet, the syntax is a bit different. See below for an example of each.

### Inline

Code below

```
<svg class="logo" width="119" height="75">
  <use xlink:href="/images/sprite-sheet.svg#logo-lockup" />
</svg>
```

### CSS Background

Code below

```
.foo {
    background: url("/images/sprite-sheet.svg#v-email") no-repeat;
}
```