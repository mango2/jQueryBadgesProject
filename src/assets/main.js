$(function() {

  // your code will go here
  // https://www.codeschool.com/users/mngweb.json

   $.ajax({
    url: 'https://www.codeschool.com/users/mngweb.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      console.log("response", response.courses.completed);

      var $badges = $("#badges");
   
      response.courses.completed.forEach(function(course){
        var $course = $('<div />', {
          class: 'course'
        }).appendTo($badges);

        $('<h3 />', {
          text: course.title
        }).appendTo($course);        

        $('<img />', {
          src: course.badge
        }).appendTo($course);       

        $('<a />', {
          href: course.url,
          target: "_blank",
          class: "btn btn-primary",
          text: "See Course"
        }).appendTo($course);                   
      });
	  
    }

  }); 
  
  
});
