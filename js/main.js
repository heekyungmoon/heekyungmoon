$(function(){
 
        

    gsap.from(".sc_intro .motion", {
        y: 30,
        opacity:0,
        stagger:{
            from: "random",
            amount: 1.2,   
        }
    });

    gsap.from(".sc_intro .scroll_wrap", {
        opacity:0,
        delay:1.2
    });


    ScrollTrigger.create({
        trigger:".sc_project",
        start:"top 30%",
        markers:true,
        onEnter:()=>{
            $('.sc_project').addClass('white')
            $('.sc_intro').addClass('white')
        },
        onLeaveBack:()=>{
            $('.sc_project').removeClass('white')
            $('.sc_intro').removeClass('white')
        }
    })



    // tab 

    $('.sc_project .tab_nav a').click(function(e){
        e.preventDefault();
        target = $(this).attr('href');

        if($(this).hasClass('nav02')){
            $(this).addClass('on').siblings().removeClass('on');
            $('.tab_nav .tab').addClass('on');
            $('.tab_cont .cont').removeClass('on');
            $('#graphics').addClass('on');
        }else{
            $(this).addClass('on').siblings().removeClass('on');
            $('.tab_nav .tab').removeClass('on');
            $('.tab_cont .cont').removeClass('on');
            $('#styling').addClass('on');
        }
    })


    //스타일링 영역

    $.getJSON('./js/styling.json', null, function (data, status) {
        if (status == "success") {
            var html = '';
            $.each(data, function (index, styling) {


                // console.log(skillArr)
                html += '<li><h3>' + styling.name + '</h3>';
                html += '<figure><img src="' + styling.imgSrc + '" alt=""></figure>';
                html += '</li>';
            });
            $('.sc_project #styling ul').append(html)

            // // 스크롤 트리거
            // gsap.utils.toArray(".sc_project li").forEach(section => {

            //     const Motion = gsap.timeline({
            //         scrollTrigger: {
            //             trigger: section,
            //             start: "top 90%",
            //             end: "top top",
            //             // markers: true,
            //             scrub: 0.5,
            //         }
            //     })
            //     Motion.set(section, {
            //             opacity: 0
            //         })
            //         .to(section, {
            //             opacity: 1
            //         })
            // })

        } else if (status == "error" || status == "parsererror") {
            alert("An error occured");
        }

    });


    // 그래픽 영역

    $.getJSON('./js/graphics.json', null, function (data, status) {
        if (status == "success") {
            var html = '';
            $.each(data, function (index, graphics) {

                skillArr = graphics.skill.split(',');

                // console.log(skillArr)
                html += '<li><h3>' + graphics.name + '</h3>';
                html += '<a href="' + graphics.linkSrc + '" class="img_wrap" target="_blank"><figure><img src="' + graphics.imgSrc + '" alt=""><figcaption class="badge">'+ graphics.badge +'</figcaption></figure></a>';
                html += '<div class="icons">';
                skillArr.forEach(skill => {
                    html += '<span>' + skill + '</span>'
                });
                html += '</div></li>';
            });
            $('.sc_project #graphics ul').append(html)


        } else if (status == "error" || status == "parsererror") {
            alert("An error occured");
        }

    });


  
    


})