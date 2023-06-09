import $ from 'jquery'

const LoadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback) {
  if(!LoadHtmlSuccessCallbacks.includes(callback)){
    LoadHtmlSuccessCallbacks.push(callback)
  }
}

function loadIncludes(parent) {
  if (!parent) parent = 'body'
  $(parent).find('[wm-include]').each(function(i, e){
    const url = $(e).attr('wm-include')
    $.ajax({
      url,
      success(data) {
        $(e).html(data)
        $(e).removeAttr('wm-include')

        LoadHtmlSuccessCallbacks.forEach(callback => callback(data))

        loadIncludes(e)
      }
    })
  }) 
}

loadIncludes()