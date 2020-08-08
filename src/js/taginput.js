$(
  (function () {
    $.fn.TagsInput = function (options) {
      // settings
      var settings = $.extend({
        tagContainerBorderColor: options.tagContainerBorderColor,
        tagInputPlaceholder: options.tagInputPlaceholder,
        tagHiddenInput: options.tagHiddenInput,
        tagBorderColor: options.tagBorderColor,
        tagBackgroundColor: options.tagBackgroundColor,
        tagColor: options.tagColor,
      });

      // initilize the container style
      $(this).css({
        "border-color": settings.tagContainerBorderColor,
        "border-width": "1px",
        "border-style": "solid",
      });

      // insert content to the container
      var html = `<span class="tags-wrapper"></span><input text="" class="add-tags" name="add-tags" id="add-tags" placeholder="${settings.tagInputPlaceholder}" value="" autocomplete="off"/>`;
      $(this).html(html);

      // *************** Functionality ************* /

      // add tag on key down
      $(".add-tags").keydown(function (evt) {
        if ((evt.keyCode == 32) | (evt.keyCode == 9)) {
          var tag = $.trim($(".add-tags").val());
          if (tag.length < 2) {
            return false;
          }
          var tagHTML = `<span style="background-color: ${settings.tagBackgroundColor}; color: ${settings.tagColor}; border-color: ${settings.tagBorderColor}" class="tags" tag-title="${tag}">
                    ${tag}
                    <a title="Remove tag" class="tag-remove" tag="${tag}">
                        <i class="fa fa-times"></i>
                    </a>
                </span>`;
          $(".tags-wrapper").append(tagHTML);
          $(this).val("");
          copyTags();
          $(".tags-wrapper").focus();
        }
      });

      // remove tag
      $(document).on("click", ".tag-remove", function () {
        var tag = $(this).attr("tag");
        $(`[tag-title='${tag}']`).remove();
        copyTags();
      });

      var copyTags = function () {
        var listOfTags = [];
        $(".tags").each(function () {
          listOfTags.push($(this).text().trim());
          settings.tagHiddenInput.val(listOfTags.join(","));
        });
      };

      // focus on the textbox on container click
      $(this).click(function () {
        $(".add-tags").focus();
      });

      return this;
    };
  })(jQuery)
);
