jQuery.fn.serializeObject = function () {
    var obj = null;
    try {
        if (this[0].tagName && this[0].tagName.toUpperCase() == "FORM") {
            var arr = this.serializeArray();
            if (arr) {
                obj = {};
                jQuery.each(arr, function () {
                    obj[this.name] = this.value;
                });
            }
        }
    } catch (e) {
        alert(e.message);
    } finally { }
    return obj;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$(document).ready(function() {
    /* init */
    $('.menu .item').tab();
    $(".final").click(function(){
        getResult()
    });
    $('#dev').popup({
        on: 'hover',
        position: 'bottom right'
    });
    $('img').popup({
        on: 'hover',
        delay: {
            show: 100,
            hide: 100
        },
        position: 'right center'
    });
});


$.getJSON('hair.json', function(items){
    items.sort(() => Math.random() - 0.5);
    $.each(items, function(i, item){
        $("#hair").append(`<div class="item"><img class="ui image" src="./proc/${item.i}.png"><div class="meta"><a href="https://maplestory.nexon.com/Promotion/2021/20210805/AwardsPoll/Out/1/${item.i}/141" target="_blank">${item.name}</a></div><div class="description">${item.user}</div> </div>`);
    });
});
$.getJSON('face.json', function(items){
    items.sort(() => Math.random() - 0.5);
    $.each(items, function(i, item){
        $("#face").append(`<div class="item"><img class="ui image" src="./proc4/${item.i}.png"><div class="meta"><a href="https://maplestory.nexon.com/Promotion/2021/20210805/AwardsPoll/Out/2/${item.i}/141" target="_blank">${item.name}</a></div><div class="description">${item.user}</div> </div>`);    });
});
$.getJSON('clothes.json', function(items){
    items.sort(() => Math.random() - 0.5);
    $.each(items, function(i, item){
        $("#clothes").append(`<div class="item"><img class="ui image" src="./proc2/${item.i}.png"><div class="meta"><a href="https://maplestory.nexon.com/Promotion/2021/20210805/AwardsPoll/Out/3/${item.i}/141" target="_blank">${item.name}</a></div><div class="description">${item.user}</div> </div>`);    });
});
$.getJSON('pet.json', function(items){
    items.sort(() => Math.random() - 0.5);
    $.each(items, function(i, item){
        $("#pet").append(`<div class="item"><img class="ui image" src="./proc3/${item.i}.png"><div class="meta"><a href="https://maplestory.nexon.com/Promotion/2021/20210805/AwardsPoll/Out/4/${item.i}/141" target="_blank">${item.name}</a></div><div class="description">${item.user}</div> </div>`);    });
});