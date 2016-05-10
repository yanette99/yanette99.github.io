$(function () {
    var APPLICATION_ID = "8FED752C-5998-EEFD-FF12-592F3203F200",
        SECRET_KEY = "1F184E57-0F34-9046-FF6B-42F4A6D02F00",
        VERSION = "v1";
        
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
   //var user = new Backendless.User();
    //user.email = "yannettee.a@gmail.com";
    //user.password ="password";
   // Backendless.UserService.register(user);
    
    
    var postsCollection = Backendless.Persistence.of(Posts).find();
    
    console.log(postsCollection);
    
    var wrapper = {
         posts: postsCollection.data   
     };
     
     Handlebars.registerHelper('format', function (time) {
         return moment(time).format("dddd, MMMM Do YYYY");
     });
    
    var blogScript = $("#blogs-template").html();
    var blogTemplate = Handlebars.compile(blogScript);
    var blogHTML = blogTemplate(wrapper);
    
    $('.main-container').html(blogHTML);
    
    $('.button-collapse').sideNav('show');
    $('.button-collapse').sideNav('hide');
});


function Posts(args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}

$(document).on('click', '.add-blog', function(){
        var addBlogScript = $("#add-blog-template").html();
        var addBlogTemplate = Handlebars.compile(addBlogScript);   
    
        $('.main-container').html(addBlogTemplate);
    });
    
    $(document).on('submit', '.form-add-blog', function (event) {
        event.preventDefault();
        
        var data = $(this).serializeArray(),
            title = data[0].value,
            content = data[1].value;
            if(content === "" || title === "")
            {
                Materialize.toast("Empty posts are not accepted", 4000);
            }
            else {
                var dataStore = Backendless.Persistence.of(Posts);
            var postObject = new Posts({
                title: title,
                content: content,
               // authorEmail: Backendless.UserService.getCurrentUser().email
            });
            
            
            
            dataStore.save(postObject);
            
            this.title.value = "";
            this.content.value = "";
        }
    });
    
