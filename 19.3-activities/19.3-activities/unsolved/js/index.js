$("your selector here").on("event listener type", function(){
    // Write code to run here
  });
  
    $(".searchButton").toggleClass("active");
    
    
    if ($(".searchButton").hasClass("active")) {

        // do Something
        
        
        $(".searchBar").css("height", "100vh");
        $("#searchForm").css("opacity","1");
        $(".searchIcon").removeClass("fa-search").addClass("fa-times");
    
    }
    else {

        // do something else
        $(",searchBar").css("height","0vh");
        $("#searchForm").css("opacity","0");
        $(".searchIcon").removeClass("fa-search").addClass("fa-times");

    }