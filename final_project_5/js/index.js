slides = new Array();
	slides[0] = 'images/cover.jpg';
	slides[1] = 'images/elephant.jpg';
    slides[2] = 'images/tree.jpg';
	slides[3] = 'images/whale.jpg';
	slides[4] = 'images/russia.jpg';
    slides[5] = 'images/ocean.jpg';
    slides[6] = 'images/earth.jpg';
	slides[7] = 'images/sun.jpg';

description = new Array();
    description[0] = 'Feeling overwhelmed? This is the slideshow for you! Click on to discover how insignificant you (and your problems) really are. Keep in mind, the average human has a mass of 65 kg. That’s pretty small in the grand scheme of things.';
    description[1] = 'An elephant. An elephant is considerably bigger than you. Your average average African elephant has a mass of 7,000 kg. That’s about 108 times the size of you! Feel better?';
    description[2] = 'Hyperion. Hyperion is the tallest tree in the world, and needless to say, it is a hell of a lot taller than you. The average woman is 5’2, while the average man is 5’6. This coastal redwood is 379.3 feet tall. Whew!';
    description[3] = 'Blue whales. Blue whales are a lot bigger than you. The average blue weighs about 104,326 kg. The biggest blue whale ever measured weighed about 173,272 kg. Compare that to your puny 65, and don’t worry about a thing!';
    description[4] = 'Russia. Russia is way bigger than you. The surface area of your average human body is about 1.75 m². You know what the surface area of your average Russia is? 17.1 trillion m². Enough said. The motherland drops the mic.';
    description[5] = 'You’know how they say human bodies are like 60% water? Well, that comes out to about 14 gallons, which seems like a lot until you consider the Pacific Ocean. The largest and deepest ocean in the world, the Pacific packs a whopping 187 quintillion gallons of water (that’s 18 zeros in case you were wondering). Think about that the next time you feel bloated.';
    description[6] = 'Earth. Earth is quite a bit bigger than you — roughly 85,345,714,285,714,285,714,286 times bigger than you, if you want to be exact. You, my friend, are one very tiny slice of the planetary pie!';
    description[7] = 'The sun. The sun is so much bigger than you that it kind of hurts to actually think about the numbers. So let’s put it this way: The number of humans you could theoretically fit inside the sun is more than all the humans that actually exist on earth. Comforting, right?';

//function for changing the description
function descriptionChange(newDescript){
    $('#description').stop().animate({
        opacity: 0,
    }, 200, function() {
        $('#description').html("<p>" + description[newDescript] + "</p>");
        $('#description').animate({
            opacity: 1,
        }, 200)
    })
}


$('#arrowNext').click(function () {
    slidesMove();
});

$('#arrowPrev').click(function () {
    slidesMovePrev();
});

var i = 0;

function slidesMove() {

    if (i >= slides.length - 1) {
        i = 0;
    } else {
        i++;
    }
    descriptionChange(i);
    $('#backgroundImage > img').animate({
        opacity: 0
    }, 1000);
    var $nextimage = $('<img src="' + slides[i] + '" style="opacity:0" />');
    $('#backgroundImage').append($nextimage);
    $nextimage.animate({
        opacity: 1
    }, 1000, function () {
        $('#backgroundImage > img').first().remove();
    });
    
}

function slidesMovePrev() {
    if (i == 0) {
        i = slides.length - 1;
    } else {
        i = i - 1;
    }
    descriptionChange(i);
    $('#backgroundImage > img').animate({
        opacity: 0
    }, 1000);
    var $lastImage = $('<img src="' + slides[i] + '" style="opacity:0" />');
    $('#backgroundImage').append($lastImage);
    $lastImage.animate({
        opacity: 1
    }, 1000, function () {
        $('#backgroundImage > img').first().remove();
    });

}



