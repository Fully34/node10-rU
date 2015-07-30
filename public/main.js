$(function(){

    //This is how I'll be listing the countries every time
    function listCountries(arr) {

        //empty out the list before appending the new list
        $('ul').empty();

        // virtual dom elements need to be the full tag!
        var $ul = $('<ul>');
        var $li = $('<li>');

        _.each(arr, function(obj) {

            // create my dom elements
            var $nameLi = $li.clone();
            var $regionLi = $li.clone();

            //set text for name and region
            var objName = obj.name;
            var objRegion = obj.region

            // add text to list items
            $nameLi.text(objName);
            $regionLi.text('Region: ' + obj.region);

            // append the new list items to the country-list ul 
            $('.country-list').append($nameLi, $regionLi, $('<hr>'));

            // ===== NO, APPEND TO A UL ALREADY ON THE PAGE SO WE CAN EMPTY EACH TIME THE FUNCTION IS CALLED SO WE DON'T KEEP APPENDING SHENANIGANS ONTO THE BODY ======//
            // append the new ul to the body
            // $('body').append($contUl, $('<hr>')) 
        });
    }

    $('.list-form').on('submit', function(event){

        event.preventDefault();


        $.ajax({
            method  : 'POST',
            url     : '/countries',
            success : function(data) {

                listCountries(data);
            }
        });
    });

    $('.country-find').on('submit', function(event) {
        event.preventDefault();

        // console.log( $(this).serialize() ); //> CHECK

        // ajax request to the server.  Need to look thru countries.js in models folder and _.find() any obj.name which satisfies the search
            // then send back the obj.name and obj.region to render
        $.ajax({
            method      : 'POST',
            url         : '/search',
            data        : $(this).serialize(),
            success     : function(data) {

                // console.log(data); //> CHECK

                // data is an array of matches from the search string
                listCountries(data);

                if (data.length === 0) {

                    $('.country-list').append('<h2> Can\'t find a match!'); 
                }

            }
        });
    });


});