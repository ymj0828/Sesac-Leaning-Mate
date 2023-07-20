
window.addEventListener('DOMContentLoaded', () => {
  const gnb_li = document.querySelectorAll('.gnb>li');
  const gnb_2depth = document.querySelectorAll('.gnb_2depth');
  let gnb_2depth_height_arr = [];

  
  gnb_li.forEach((ele, index)=>{
    ele.addEventListener('mouseenter', ()=>{
        // ele.children[0].style.height = `${gnb_2depth_height_arr[index]}`
        // ele.children[0].style.padding = '20px 10px'
        console.log(ele.children)
  
        console.log(gnb_2depth_height_arr)
  
        $(ele.children).slideDown(200)
  
    })

    // const gnb_2depth_height = window.getComputedStyle(ele1).getPropertyValue('height');

    // gnb_2depth_height_arr[index] = gnb_2depth_height
    // setTimeout(() => {
    //   ele1.style.opacity = '1'
    //   ele1.style.height = '0px'
    // }, 0.001);
    
    // ele1.addEventListener('')
    
    // console.log(window.getComputedStyle(ele).getPropertyValue('height'));
    ele.addEventListener('mouseleave', ()=>{
      $(ele.children).slideUp(200)
    })
  })
  


  
  
  


  const bean_slide_li = document.querySelectorAll('.bean_slide li');
  const bean_sec = document.querySelector('.bean_sec')
  const bean_sec_inner = document.querySelector('.bean_sec .sec_inner_wrap')
  const menu_right_li = document.querySelectorAll('.menu_sec .sec_desc_wrap li')
  const menu_left_li = document.querySelectorAll('.menu_sec .sec_cont_wrap li');


  
  bean_sec_inner.style.paddingTop = `${(window.innerHeight - bean_sec_inner.clientHeight) / 2}px`
  let sum = 0;
  console.log(bean_sec.getBoundingClientRect().y)
  window.addEventListener('scroll', (e)=>{
  //   window.scroll({
  //   behavior: "smooth"
  // });
    // console.log(window.scrollY)
    // console.log(bean_sec_inner.offsetTop)
    // console.log(bean_sec.getBoundingClientRect().y / 20)
    // if(bean_sec.getBoundingClientRect().y == 1){
    // }
    if(window.scrollY == bean_sec_inner.offsetTop){
      sum+= -40
      console.log(bean_sec.getBoundingClientRect().y)
      bean_sec_inner.style.transform = `translateX(${bean_sec.getBoundingClientRect().y}px)`
      // bean_sec_inner.style.transform = `translateX(${sum}px)`

    }
    // console.log(bean_sec.getBoundingClientRect().y)
    // console.log(bean_sec.offsetTop)
    // if(bean_sec.getBoundingClientRect().y <= 100 && bean_sec.getBoundingClientRect().y >= -100){
    //   window.scrollTo(0, bean_sec.offsetTop)
    // }



    // console.log(e.deltaY)
    // console.log(menu_left.getBoundingClientRect().y);
    // window.scrollTo(0,0)
    // menu_left.style.top = 0
    // menu_left.getBoundingClientRect().y = 0
    menu_right_li.forEach((ele, index)=>{
      ele.getBoundingClientRect().y

        if(ele.getBoundingClientRect().y <= window.innerHeight / 2){
          console.log(ele)
          menu_left_li[index].style.top = 0;
        }
        else if(ele.getBoundingClientRect().y > window.innerHeight && index != 0){
          menu_left_li[index].style.top = 100+'%';
        }

    })




  })




});