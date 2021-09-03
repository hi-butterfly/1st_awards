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

function nc(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function addRes(i, j) {
    $('#' + i).dimmer('show');
    a = $('#' + i).clone();
    a.children().eq(0).removeAttr('onclick');
    a.children().eq(1).remove();
    $('#' + j).append(a);
    updatePrice();
}

function cancelRes(i, j) {
    $('#' + j + ' #' + i).remove();
    $('#' + i).dimmer('hide');
    updatePrice();
}

function updatePrice() {
    var a = $('#hair2').children().length;
    var b = $('#face2').children().length;
    var c = $('#clothes2').children().length;
    var d = $('#pet2').children().length;
    $('#price1').html(`헤어 ${nc(a*5500)}원`);
    $('#price2').html(`성형 ${nc(b*3500)}원`);
    $('#price3').html(`의상 ${nc(c*9900)}원`);
    $('#price4').html(`펫 ${nc(d*9900)}원`);
    var sum = (a*5500)+(b*3500)+(c*9900)+(d*9900);
    $('#priceSum').html(`총 ${nc(sum)}원`);
}

$(document).ready(function() {
    /* init */
    $('.menu .item').tab();
    $(".final").click(function(){
        updatePrice();
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


$.getJSON('rank_hair.json', function(items){
    $.each(items, function(i, item){
        $("#hair").append(`<div class="item" id="${item.i}"><img class="ui image" src="./proc/${item.i}.png" onclick="addRes(${item.i}, 'hair2')"><div class="ui top aligned dimmer"> <div class="content"> <h2 class="ui inverted header" style="color:white;">찜!</h2><br/> <div class="mini ui red button" onclick="cancelRes(${item.i}, 'hair2');">취소</div></div> </div><div class="meta"><a href="https://maplestory.nexon.com/Promotion/2021/20210805/AwardsPoll/Out/1/${item.i}/141" target="_blank">${item.title}</a></div><div class="description">${item.user}</div><div class="description">${item.rank}위/${item.cnt}표</div> </div>`);    });
});
$.getJSON('rank_face.json', function(items){
    $.each(items, function(i, item){
        $("#face").append(`<div class="item" id="${item.i}"><img class="ui image" src="./proc4/${item.i}.png" onclick="addRes(${item.i}, 'face2')"><div class="ui top aligned dimmer"> <div class="content"> <h2 class="ui inverted header" style="color:white;">찜!</h2><br/> <div class="mini ui red button" onclick="cancelRes(${item.i}, 'face2');">취소</div></div> </div><div class="meta"><a href="https://maplestory.nexon.com/Promotion/2021/20210805/AwardsPoll/Out/2/${item.i}/141" target="_blank">${item.title}</a></div><div class="description">${item.user}</div><div class="description">${item.rank}위/${item.cnt}표</div> </div>`);    });
});
$.getJSON('rank_clothes.json', function(items){
    $.each(items, function(i, item){
        $("#clothes").append(`<div class="item" id="${item.i}"><img class="ui image" src="./proc2/${item.i}.png" onclick="addRes(${item.i}, 'clothes2')"><div class="ui top aligned dimmer"> <div class="content"> <h2 class="ui inverted header" style="color:white;">찜!</h2><br/> <div class="mini ui red button" onclick="cancelRes(${item.i}, 'clothes2');">취소</div></div> </div><div class="meta"><a href="https://maplestory.nexon.com/Promotion/2021/20210805/AwardsPoll/Out/3/${item.i}/141" target="_blank">${item.title}</a></div><div class="description">${item.user}</div><div class="description">${item.rank}위/${item.cnt}표</div> </div>`);    });
    });
$.getJSON('rank_pet.json', function(items){
    $.each(items, function(i, item){
        $("#pet").append(`<div class="item" id="${item.i}"><img class="ui image" src="./proc3/${item.i}.png" onclick="addRes(${item.i}, 'pet2')"><div class="ui top aligned dimmer"> <div class="content"> <h2 class="ui inverted header" style="color:white;">찜!</h2><br/> <div class="mini ui red button" onclick="cancelRes(${item.i}, 'pet2');">취소</div></div> </div><div class="meta"><a href="https://maplestory.nexon.com/Promotion/2021/20210805/AwardsPoll/Out/4/${item.i}/141" target="_blank">${item.title}</a></div><div class="description">${item.user}</div><div class="description">${item.rank}위/${item.cnt}표</div> </div>`);    });
});