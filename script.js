

// This Function is to load all products based on store 

$.fn.variantAutocomplete = function(store) {
    var item1 = $('#store_select').val();
    this.parent().children(".options_placeholder").attr('id', this.parent().data('index'))

    this.select2({
        placeholder: Spree.translations.variant_placeholder,
        minimumInputLength: 3,

        ajax: {
            url: Spree.url(Spree.routes.variants_search),
            datatype: 'json',
            data: function(term, page) {
                return {
                    q: {
                        "product_name_or_sku_cont": term,
                        "store_id":store
                    }
                }
            },
            results: function (data, page) {
                window.variants = data['variants'];

                return {
                    results: data['variants']
                }
            }
        },
        formatResult: formatVariantResult,
        formatSelection: function (variant) {
            $(this.element).parent().children('.options_placeholder').html(variant.options_text)
            return variant.name;
        }
    })
}


//Fuction is for adding a video to favorite list and if that video is not avaliable to logedin user send a request to admin to add user ajax call



function add_to_favourite(catalog_id, category, content_id){
    var myCookies = getCookies();
    if(myCookies.session_id){
        $.ajax({
            url: "/users/is_valid_session?session_id="+myCookies.session_id,
            type: 'GET',
            success: function(d) {
                if(d.message == "valid session id"){
                    $(".favourite_popover").popover({
                        placement: "bottom",
                        content: "Adding to favourite list......",
                        trigger: 'manual'
                    });
                    $('.favourite_popover').popover('show');
                    $('.popover-content ').text("Adding to favourite list");

                    data = 'id=' + catalog_id;
                    $.ajax({
                        url: '/users/'+category+'/favourites',
                        data: data,
                        type: 'POST',
                        error: function(e,d){
                            $('.popover-content ').text("Error in adding to favourite list");

                            setTimeout(function () {
                                $('.favourite_popover').popover('hide');
                            }, 2000);
                        },
                        success: function(d){
                            console.log(d.content_present);
                            if(d.content_present == false) {
                                var myCookies = getCookies()
                                user_id = myCookies.login_user_id
                                var values="content_id=" +content_id + "&category=" + category;
                                $.ajax({
                                    type:'GET',
                                    url:'/circles/' + category + '/add_to_circles_form',
                                    data: values,
                                    success: function(retdata){
                                        if(retdata.msg=="new items added" || retdata.msg=="items already present"){
                                            $('#add-content-success-msg').text(retdata.msg);
                                            $('#add-content-success').modal('show');
                                        }
                                    }
                                });
                                setTimeout(function () {
                                    $('.favourite_popover').popover('hide');
                                }, 2000);

                            }else{
                                if(d.errors == "entity already present"){
                                    $('.popover-content').text("Already added to favourites");
                                }else{
                                    $('.popover-content').text("Added to favourite list");
                                }
                                setTimeout(function () {
                                    $('.favourite_popover').popover('hide');
                                }, 2000);

                            }
                        }
                    });
                }else{
                    $('#sign-in').modal('show');
                }
            }
        });
    }else{
        $('#sign-in').modal('show');
    }
}


// this is for jscroll pagination  (Like facebook )

      $('.program_outer-wrap').jscroll({
          debug: true,
          autoTrigger: true,
          loadingHtml: '<div class="pl-wrap"><img src="/assets/ajax-loader.gif" alt="Loading" /></div>',
          nextSelector: 'a.jscroll-next:last',
          contentSelector: '.program-all-set',
          callback: function(){
            $( ".movies-all-indi .catalog-item img" ).load(function() {
              $(this).parent().next('.details').css({'width': ''+$(this).width()+'px'});        
            });
          }
      });


// ajax file uploader 


function comments_file_uploder() {
$('#log_comment_attachments').fileupload({
       url: '/comments/comment_attachment_upload',
       forceIframeTransport: true,
       add: function(e, data) {
           var types = /(\.|\/)(jpeg|jpg|gif|png|bmp|tif|tiff|mp3|amr|wav|mp4|flv|avi|mpeg|mpg|mov|wmv|m4v|pdf|doc|docx|xls|xlsx|ppt|pptx|swf|html|htm|opv)$/i;
           var file = data.files[0];
          
        
           if (types.test(file.type) || types.test(file.name)) {
               data.context = $(tmpl("template-upload", file));
            
                 $('#upload_progresss').append(data.context);
               jqXHR = data.submit();
        } else {
               var errMsg = '" + file.name + " is not a jpeg, jpg, gif, png, bmp, tif, tiff, mp3, amr, wav, mp4, flv, avi, mpeg, mpg, mov, wmv, m4v, PDF, doc, docx, xls, xlsx, ppt, html, htm, swf, opv or pptx file.';
               displayNotyMessage('error', errMsg);
               return false;
           }
       },
       progress: function(e, data) {
            if (data.context) {
              progress = parseInt(data.loaded / data.total * 100, 10);
               
           }
        
       },
       done: function(e, data) {
            
       },
       fail: function(e, data) {
           displayNotyMessage('error', errMsg);
           return false;
       }
   });

}


//Tree Structure for blogs based on category

 $('body').on('click', '.sign a', function(e){
        e.preventDefault();
        if($(this).parent('.sign').hasClass("sub-sign"))
        {
            var toggle_icon = $(this).children('i');
            if(toggle_icon.hasClass('fa-plus')){
                $(this).parents('.row-subcategory').find('.subcategory-wrap-blog').slideDown();
                toggle_icon.removeClass('fa-plus').addClass('fa-minus');
            }
            else if(toggle_icon.hasClass('fa-minus')){
                $(this).parents('.row-subcategory').find('.subcategory-wrap-blog').slideUp();
                toggle_icon.addClass('fa-plus').removeClass('fa-minus');                
            }
        }
        else
        {
            var toggle_icon = $(this).children('i');
            if(toggle_icon.hasClass('fa-plus')){
                $(this).closest('.category-wrap').next('.subcategory-wrap').slideDown();
                toggle_icon.removeClass('fa-plus').addClass('fa-minus');
            }
            else if(toggle_icon.hasClass('fa-minus')){
                $(this).closest('.category-wrap').next('.subcategory-wrap').slideUp();
                toggle_icon.addClass('fa-plus').removeClass('fa-minus');                
            }
        }
    });




