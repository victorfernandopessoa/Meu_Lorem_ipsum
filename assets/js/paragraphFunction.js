$(document).ready(function(){
    var counter_paragraph   =   1;
    var text = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum eros velit, at sodales est congue sed. Curabitur tempor risus ac massa fringilla, sed hendrerit lacus porttitor. Aliquam sit amet urna tincidunt, faucibus ante id, porttitor dui. Fusce aliquam lobortis aliquam. Aliquam in ullamcorper nulla, ac rutrum urna. Aenean dictum lectus ut quam condimentum, sit amet sodales dui porttitor. Suspendisse non pellentesque metus. Integer nibh urna, maximus nec quam id, venenatis facilisis mauris. Nunc consectetur scelerisque nulla, sit amet euismod massa varius sit amet. Nulla facilisi. Phasellus pellentesque orci magna, non imperdiet erat tristique ut. Donec viverra at sapien vel ornare. Aliquam erat volutpat. Pellentesque vel quam lectus. Praesent mollis justo a nulla porttitor egestas. Curabitur sagittis sit amet sem ut convallis.',
        'Nullam efficitur varius arcu, vel pulvinar tortor volutpat varius. Praesent eleifend cursus sem, et sollicitudin odio congue eu. Pellentesque quam arcu, tincidunt a vestibulum condimentum, tincidunt vel erat. Curabitur semper leo et dignissim fringilla. Mauris volutpat mauris et suscipit viverra. Nunc velit ligula, gravida sit amet nisi at, eleifend aliquet risus. Nulla maximus non turpis quis luctus. Suspendisse et nunc libero. Suspendisse faucibus metus vitae feugiat commodo. Pellentesque mattis turpis sed velit vehicula ultricies. Fusce id ante vitae velit condimentum sollicitudin id in urna. Maecenas ac neque at orci congue imperdiet ac a nunc. Praesent sapien magna, blandit in dolor eget, porta sollicitudin justo.',
        'Proin iaculis lectus nec eros eleifend, et eleifend elit elementum. Vestibulum cursus non velit ac dignissim. Proin feugiat velit et viverra vestibulum. Donec imperdiet arcu at lacus accumsan, eget imperdiet purus vulputate. Integer dui velit, suscipit et consequat nec, convallis nec justo. Sed in massa eget justo ultrices venenatis quis quis urna. Aenean egestas mi eu purus hendrerit, in lacinia ipsum aliquam. Donec eu bibendum mi, sit amet mollis massa. Donec sit amet posuere nulla, a semper velit. Duis posuere at sapien eu dignissim. Ut ut erat eget leo interdum iaculis. Pellentesque malesuada et orci sit amet tincidunt. Suspendisse at sem mauris. Nullam a fringilla lectus. Nam aliquet dolor ut pellentesque dignissim.',
        'Nulla maximus tellus sit amet arcu ultricies, eget aliquam lacus fermentum. Donec aliquet nulla id elit iaculis dignissim. Nam odio nunc, porttitor at tortor eu, faucibus suscipit dolor. Duis porta pharetra nisl, eu commodo orci vestibulum quis. Ut finibus augue at lectus imperdiet efficitur. Suspendisse pharetra gravida purus vitae viverra. Nulla in tristique odio, ac faucibus enim. Vestibulum sit amet finibus risus. Sed tortor nulla, interdum et arcu a, euismod lobortis nisl. Vivamus lacinia felis ut vestibulum tristique. Vestibulum eu eros convallis, malesuada quam vitae, rhoncus eros. Duis ut lobortis est, nec euismod libero. Aenean augue neque, venenatis non tincidunt non, facilisis a tellus. Nam maximus justo nec varius aliquet. Ut mauris odio, blandit at maximus sit amet, fermentum et lectus.',
        'Donec euismod venenatis sem vel ornare. Nam et mi dui. Proin sed maximus sem. Mauris at malesuada quam. Vivamus sollicitudin molestie quam, ac viverra felis vulputate iaculis. Maecenas gravida enim non commodo ornare. Morbi varius risus bibendum leo blandit pellentesque. Vivamus eu ex elit. Vivamus non enim varius, porta felis id, venenatis tellus. Duis ullamcorper finibus leo, eu mattis nunc auctor eu. Aliquam mollis dictum turpis nec commodo. Sed a velit sit amet metus interdum vehicula. Suspendisse dapibus aliquet condimentum. Aliquam consequat sed massa quis ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        'Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus porttitor diam quis nibh iaculis efficitur. Sed tempor laoreet ante. Nam ligula turpis, scelerisque in accumsan ac, finibus non lectus. Morbi orci libero, sodales vel tincidunt a, scelerisque id est. Fusce scelerisque lorem vel nisi aliquam blandit. Phasellus lacinia sagittis mi, nec rhoncus lectus viverra a. Donec sed mi malesuada, auctor eros id, sollicitudin erat. Suspendisse eget tellus malesuada, convallis metus ac, ultrices augue. Etiam non venenatis mauris. Donec finibus volutpat nibh, sollicitudin pulvinar augue euismod sed. Praesent nibh lacus, sagittis non elit a, interdum maximus mauris.',
        'Mauris sit amet ante sapien. Aliquam in porta nulla. Nunc purus nisi, pharetra vitae ornare nec, suscipit vel ex. Pellentesque tincidunt consequat fringilla. Quisque feugiat malesuada fermentum. Nulla arcu libero, condimentum at ante nec, rhoncus eleifend tellus. Curabitur nisi sem, finibus in egestas in, elementum malesuada lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis elementum nisi non metus facilisis auctor. Sed interdum imperdiet lacus, non euismod sapien tincidunt vel.',
        'Curabitur non laoreet nibh. Cras sit amet condimentum metus, et dignissim lorem. Donec in magna nisi. Cras eu dapibus arcu. Aliquam erat volutpat. Vivamus sollicitudin nisl eu leo porttitor pharetra. Quisque lacinia dui ut nisl congue efficitur a sed leo. Cras euismod, est in accumsan malesuada, mauris arcu semper ante, quis mattis quam justo et ante. Nullam eleifend elit ullamcorper sodales convallis. Phasellus sed consectetur neque, at mattis est. Maecenas tristique, nibh in maximus tempor, diam nibh eleifend ipsum, in auctor ipsum massa a ex.',
        'Ut maximus est in elit lacinia sagittis. Aenean facilisis varius quam ac ultricies. Nam blandit dolor eget est rutrum, id fringilla lectus tincidunt. Fusce porta nisl in est placerat, eget convallis purus consequat. Donec dapibus pharetra augue, convallis rhoncus metus maximus ut. Aliquam ac rutrum turpis. Donec blandit lorem ac ligula hendrerit vulputate. Nam laoreet orci sed sapien ultrices, et suscipit dui commodo. Curabitur vitae velit eget dolor lacinia malesuada. Pellentesque et sollicitudin tortor. Ut rutrum vehicula augue vitae rhoncus. Nunc porta nunc a nisl vestibulum cursus. Suspendisse potenti. Praesent aliquet aliquam turpis, eget gravida enim tincidunt in. Vestibulum mattis luctus dolor in condimentum.',
        'Suspendisse mi quam, molestie id venenatis sit amet, ornare ut elit. Vivamus et ex commodo mi imperdiet ultricies a ut nisi. Phasellus luctus imperdiet sapien ut fringilla. Vivamus velit dui, commodo eget aliquam bibendum, finibus fermentum nunc. Vivamus faucibus sagittis ante, ac suscipit elit. Mauris vel est risus. Proin iaculis laoreet tellus ac scelerisque. Vivamus at elit placerat, pellentesque justo nec, ultrices turpis. Nam eget nisi mi. Duis condimentum facilisis arcu, et elementum nibh imperdiet non. Phasellus porttitor fringilla est. Vestibulum sollicitudin ut elit ut vehicula.',
        'Nullam justo ante, rhoncus ut velit id, molestie maximus purus. Nam eleifend nisl nibh, sed feugiat tellus congue in. Fusce ultrices viverra elit, sed aliquet augue varius ut. Morbi et feugiat velit. Proin sagittis convallis justo sit amet pulvinar. Vestibulum tempus egestas bibendum. Vestibulum malesuada, metus varius dictum bibendum, purus diam ultricies ex, id feugiat eros magna ut ligula. Ut vel sapien orci. In hac habitasse platea dictumst. Mauris nisi diam, porttitor eu arcu a, euismod scelerisque dui. Donec ac mauris ut orci aliquet dictum in dictum neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed faucibus nibh turpis, vitae blandit arcu ornare nec. Nulla posuere egestas magna, ut varius erat luctus malesuada. Morbi posuere eros orci, sed imperdiet massa lobortis ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Aliquam a vulputate lorem. Phasellus pharetra fringilla tristique. Aenean orci risus, hendrerit sit amet tellus non, gravida elementum quam. Aliquam in fringilla est. Vivamus aliquam urna ut arcu hendrerit, sit amet convallis erat placerat. Nam tempor eget quam ac elementum. Aliquam volutpat magna lorem, faucibus tristique tellus dictum vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla ac sem vulputate nibh laoreet elementum. Sed vehicula malesuada quam eu vulputate. Vestibulum suscipit et lacus vel iaculis. Pellentesque blandit nisl mi, sit amet bibendum dolor rutrum nec.',
        'Integer ante lacus, imperdiet id fringilla vel, convallis nec nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed nec condimentum metus. Proin lacinia hendrerit felis nec sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla tincidunt dolor non euismod pulvinar. Sed ut viverra turpis. Nulla aliquet, orci eget vulputate consectetur, ex felis accumsan ipsum, ut vehicula ex ex in nisl. Etiam interdum velit nec eros dictum, eu imperdiet tortor gravida. Mauris eget vehicula lorem, id sollicitudin mauris. Sed venenatis velit in felis bibendum, eu varius lectus porta. Sed imperdiet ultrices orci, eget fermentum lectus fermentum in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus tempus mollis nunc, sit amet fermentum ligula ornare eget. Mauris hendrerit leo at ipsum ultrices maximus. Morbi aliquam justo tristique pulvinar semper.',
        'Nullam placerat lobortis neque, sit amet commodo nunc vulputate id. Proin in orci ipsum. Donec ultrices eros ante, a eleifend sem efficitur in. Curabitur pulvinar sem ut magna condimentum, a hendrerit tellus eleifend. Vestibulum vel vulputate nunc. In nisi justo, eleifend eu elementum ac, feugiat eu mauris. Mauris ac ornare ipsum. Pellentesque tincidunt, sapien quis dapibus pretium, risus justo sodales orci, sed ornare ipsum lorem vitae nibh. Vestibulum sollicitudin ex ac justo pharetra posuere. Aliquam congue ex vitae urna sollicitudin vehicula. Quisque interdum laoreet est non malesuada. Sed lectus magna, commodo non molestie vitae, porta at nulla. Aenean ac risus eu arcu accumsan posuere non vitae ipsum.',
        'Mauris pellentesque sapien tellus, et vestibulum ex mattis quis. Phasellus massa orci, ornare non iaculis ut, sodales id sem. Vestibulum sapien quam, dictum quis massa quis, dictum aliquam ante. Sed eget ligula elementum, maximus orci at, dignissim odio. Pellentesque vestibulum augue sit amet ultricies iaculis. Cras bibendum nisl in libero lobortis tristique. Nullam in ex sit amet mauris molestie consequat. Etiam sollicitudin molestie faucibus. Sed in auctor arcu, dictum finibus erat. Vestibulum sodales ullamcorper tortor, eu vehicula turpis imperdiet eu. Maecenas nisi ex, sodales at luctus ac, cursus faucibus ante. Curabitur neque augue, facilisis quis scelerisque sed, hendrerit vel leo. Integer dapibus erat at elit interdum, eu rhoncus velit gravida. Duis in tempus leo.'
    ];

    var title_1 = ['loren', 'avengers', 'my', 'galaxy', 'recer', 'star', 'iron', 'need', 'lego', 'danger', 'warning'];
    var title_2 = ['wars','of', 'ipsum','man', 'sanandreas', 'vice city', 'woman', 'underground', 'mostwanted'];

    // buttons:

    $("#btn-plus-paragraph").click(function() {
        counter_paragraph++;

        $("#counter-paragraph").text(counter_paragraph); 
    });

    $("#btn-less-paragraph").click(function() {
        counter_paragraph--;

        if (counter_paragraph <= 1) {
            counter_paragraph = 1;
        }

        $("#counter-paragraph").text(counter_paragraph);
    });

    $("#btn-make-paragraph").click(function() {
        removeParagraph();
        $("#container-root").append("<h1 class = 'mt-10 text-capitalize' id = 'title_text'></h1>");
        gerTitle();

        for (var i = 0; i < counter_paragraph; i++){
            $("#container-root").append("<p class = 'indent text-justify mt-10 paragraph'>"+text[randomParagraph()]+"</p>");
        }
        getLengthEachParagraph();
        getNumberWords();
    });

    
    // functions:

    function randomParagraph() {
        return Math.floor(Math.random() * text.length);
    }

    function removeParagraph() {
        $(".paragraph").each(function() {
            $(".paragraph").remove();
        });
    }

    function gerTitle() {
        $("#title_text").text(title_1[Math.floor(Math.random() * title_1.length)]+" "+ title_2[Math.floor(Math.random() * title_2.length)]);
    }

    function getLengthEachParagraph() {
        var length_paragraph   =   [];

        $('.paragraph').each(function(index, elem){
            length_paragraph.push($(elem).text().length);
        });

        var sum_tot_paragraph_len = length_paragraph.reduce(function(acumulator, elem){
            return acumulator += elem;
        });

        return sum_tot_paragraph_len;
    }

    function getNumberWords() {
        var tot_number_words  =  0;

        $('.paragraph').each(function(index, elem){
            tot_number_words = tot_number_words + ($(elem).text().split(' ').length);
        });

        return tot_number_words;
    }

    // function copyAllText(){
        
    // }

    
});