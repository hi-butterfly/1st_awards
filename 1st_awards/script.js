var API_URL = 'https://dncbque9l0.execute-api.ap-northeast-2.amazonaws.com/default/';

function nc(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function addRes(i, type) {
    $('#' + i).dimmer('show');
    a = $('#' + i).clone();
    a.children().eq(0).removeAttr('onclick');
    a.children().eq(1).remove();
    $('#final' + type).append(a);
    updatePrice();
    /* $.get({
        url: API_URL+String(i),
        async: false,
        contentType: "application/json",
        success: function (data) {
           console.log(`success ${i}`);
        }
    }); */
}

function cancelRes(i, _type) {
    $(`#final${_type} #${i}`).remove();
    $('#' + i).dimmer('hide');
    updatePrice();
    /*$.ajax({
        type: "DELETE",
        url: API_URL+String(i),
        async: false,
        contentType: "application/json",
        success: function (data) {
           console.log(`delete ${i}`);
        }
    });*/
}

function randomString() {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
    const stringLength = 20
    let randomstring = ''
    for (let i = 0; i < stringLength; i++) {
      const rnum = Math.floor(Math.random() * chars.length)
      randomstring += chars.substring(rnum, rnum + 1)
    }
    return randomstring
}


function updatePrice() {
    var a = $('#final0').children().length;
    var b = $('#final1').children().length;
    var c = $('#final2').children().length;
    var d = $('#final3').children().length;
    $('#price1').html(`헤어 ${nc(a*5500)}원`);
    $('#price2').html(`성형 ${nc(b*3500)}원`);
    $('#price3').html(`의상 ${nc(c*9900)}원`);
    $('#price4').html(`펫 ${nc(d*9900)}원`);
    var sum = (a*5500)+(b*3500)+(c*9900)+(d*9900);
    $('#priceSum').html(`총 ${nc(sum)}원`);
    if (sum==0) return null;
    if (sum<83793) $('#info_price').html(`평균보다 ${nc(83793-sum)}원 더 아꼈어요! <a href="../analytics" target="_blank">자세히 보기</a>`);
    else $('#info_price').html(`평균보다 ${nc(sum-83793)}원 더 flex했어요! <a href="../analytics" target="_blank">자세히 보기</a>`);
    return sum
}

function updateFinal() {
    var data = {};

    for (var i = 0; i < 4; i++) {
        var ch = $(`#final${i}`).children();
        var rowData = [];
        for (var j = 0; j < ch.length; j++) {
            rowData.push(ch[j].getAttribute('id'));
        }
        data[i] = rowData;
    }

    data['price'] = updatePrice();
    data['customer_id'] = randomString();
    return data;
}


$(document).ready(function() {
    /* init */
    $('.menu .item').tab();
    $(".final").click(function(){
        updatePrice();
    });
    $('#dev').popup({
        on: 'hover',
        position: 'bottom center'
    });
});

$(window).bind('beforeunload', function(){
    if ( !updatePrice() ) {
        console.log('null');
        $(window).off("beforeunload");
        return null;
    }
    $.post({
        url: "https://vbxq616ffh.execute-api.ap-northeast-2.amazonaws.com/v1/awards1_analytics",
        data: JSON.stringify(updateFinal()),
        contentType: "application/json",
        success: function (data) {
           console.log("success");
        }
    });
    return 'Are you sure you want to leave?';
});

$.getJSON('./assets/json/rank_hair.json', function(items){
    $.each(items, function(i, item){
        $("#hair").append(`<div class="item" id="${item.i}"><img class="ui image" src="./assets/img/hair/${item.i}.png" onclick="addRes(${item.i}, 0)"><div class="ui top aligned dimmer"> <div class="content"> <h2 class="ui inverted header" style="color:white;">찜!</h2><br/> <div class="mini ui red button" onclick="cancelRes(${item.i}, 0);">취소</div></div> </div><div class="meta"><a href="https://maplestory.nexon.com/Promotion/2021/20210805/AwardsPoll/Out/1/${item.i}/141" target="_blank">${item.title}</a></div><div class="description">${item.user}</div><div class="description">${item.rank}위/${item.cnt}표</div> </div>`);    });
});
$.getJSON('./assets/json/rank_face.json', function(items){
    $.each(items, function(i, item){
        $("#face").append(`<div class="item" id="${item.i}"><img class="ui image" loading="lazy" src="./assets/img/face/${item.i}.png" onclick="addRes(${item.i}, 1)"><div class="ui top aligned dimmer"> <div class="content"> <h2 class="ui inverted header" style="color:white;">찜!</h2><br/> <div class="mini ui red button" onclick="cancelRes(${item.i}, 1);">취소</div></div> </div><div class="meta"><a href="https://maplestory.nexon.com/Promotion/2021/20210805/AwardsPoll/Out/2/${item.i}/141" target="_blank">${item.title}</a></div><div class="description">${item.user}</div><div class="description">${item.rank}위/${item.cnt}표</div> </div>`);    });
});
$.getJSON('./assets/json/rank_clothes.json', function(items){
    $.each(items, function(i, item){
        $("#clothes").append(`<div class="item" id="${item.i}"><img class="ui image" loading="lazy" src="./assets/img/clothes/${item.i}.png" onclick="addRes(${item.i}, 2)"><div class="ui top aligned dimmer"> <div class="content"> <h2 class="ui inverted header" style="color:white;">찜!</h2><br/> <div class="mini ui red button" onclick="cancelRes(${item.i}, 2);">취소</div></div> </div><div class="meta"><a href="https://maplestory.nexon.com/Promotion/2021/20210805/AwardsPoll/Out/3/${item.i}/141" target="_blank">${item.title}</a></div><div class="description">${item.user}</div><div class="description">${item.rank}위/${item.cnt}표</div> </div>`);    });
    });
$.getJSON('./assets/json/rank_pet.json', function(items){
    $.each(items, function(i, item){
        $("#pet").append(`<div class="item" id="${item.i}"><img class="ui image" loading="lazy" src="./assets/img/pet/${item.i}.png" onclick="addRes(${item.i}, 3)"><div class="ui top aligned dimmer"> <div class="content"> <h2 class="ui inverted header" style="color:white;">찜!</h2><br/> <div class="mini ui red button" onclick="cancelRes(${item.i}, 3);">취소</div></div> </div><div class="meta"><a href="https://maplestory.nexon.com/Promotion/2021/20210805/AwardsPoll/Out/4/${item.i}/141" target="_blank">${item.title}</a></div><div class="description">${item.user}</div><div class="description">${item.rank}위/${item.cnt}표</div> </div>`);    });
});