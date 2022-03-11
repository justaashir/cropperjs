var DEFAULT_TEMPLATE = (
  '<div class="cropper-container" touch-action="none">'
    + '<div class="cropper-wrap-box">'
      + '<div class="cropper-canvas"></div>'
    + '</div>'
    + '<div class="cropper-drag-box"></div>'
    + '<div class="cropper-crop-box">'
      + '<span class="cropper-view-box"></span>'
      + '<span class="cropper-dashed dashed-h"></span>'
      + '<span class="cropper-dashed dashed-v"></span>'
      + '<span class="cropper-center"></span>'
      + '<span class="cropper-face"></span>'
      + '<span class="cropper-line line-e" data-cropper-action="e"></span>'
      + '<span class="cropper-line line-n" data-cropper-action="n"></span>'
      + '<span class="cropper-line line-w" data-cropper-action="w"></span>'
      + '<span class="cropper-line line-s" data-cropper-action="s"></span>'
      + '<span class="cropper-point point-e" data-cropper-action="e"></span>'
      + '<span class="cropper-point point-n" data-cropper-action="n"></span>'
      + '<span class="cropper-point point-w" data-cropper-action="w"></span>'
      + '<span class="cropper-point point-s" data-cropper-action="s"></span>'
      + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>'
      + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>'
      + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>'
      + '<span class="cropper-point point-se" data-cropper-action="se"></span>'
    + '</div>'
  + '</div>'
);

var SINGLE_COVER = (
  '<div class="cropper-container" touch-action="none"> DEV'
    + '<div class="cropper-wrap-box">'
      + '<div class="cropper-canvas"></div>'
    + '</div>'
    + '<div class="cropper-drag-box"></div>'
    + '<div class="cropper-crop-box">'
      + `<div class="cropper-view-box"></div>`
      + `<div class="cropper-face" style="display:flex;width:100%;">
        <div id="dark-box-1" style="width:32.5%;height:100%;background-color:rgba(255,255,255,.5);pointer-events:none;border-right:4px solid #39f;">
        </div>
        <div id="mobile-box" style="width:35%;height:100%;pointer-events:none;"></div>
        <div id="dark-box-2" style="width:32.5%;height:100%;background-color:rgba(255,255,255,.5);pointer-events:none;border-left:4px solid #39f;"></div>
      </div>` + `
        
      `
      + '<span class="cropper-line line-e" data-cropper-action="e"></span>'
      + '<span class="cropper-line line-n" data-cropper-action="n"></span>'
      + '<span class="cropper-line line-w" data-cropper-action="w"></span>'
      + '<span class="cropper-line line-s" data-cropper-action="s"></span>'
      + '<span class="cropper-point point-e" data-cropper-action="e"></span>'
      + '<span class="cropper-point point-n" data-cropper-action="n"></span>'
      + '<span class="cropper-point point-w" data-cropper-action="w"></span>'
      + '<span class="cropper-point point-s" data-cropper-action="s"></span>'
      + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>'
      + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>'
      + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>'
      + '<span class="cropper-point point-se" data-cropper-action="se"></span>'
    + '</div>'
  + '</div>'
)

export { 
  DEFAULT_TEMPLATE, 
  SINGLE_COVER
}