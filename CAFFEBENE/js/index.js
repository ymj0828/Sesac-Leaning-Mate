
window.addEventListener('DOMContentLoaded', () => {
  const menu_left = document.querySelector('.menu_sec .sec_cont_wrap');
  
  const bean_sec = document.querySelector('.bean_sec')
  const bean_sec_inner = document.querySelector('.bean_sec .sec_inner_wrap')
  const menu_right_li = document.querySelectorAll('.menu_sec .sec_desc_wrap li')
  const menu_left_li = document.querySelectorAll('.menu_sec .sec_cont_wrap li');
  
  let sum = 0;
  console.log(bean_sec.getBoundingClientRect().y)
  window.addEventListener('scroll', (e)=>{
  //   window.scroll({
  //   behavior: "smooth"
  // });
    // console.log(window.scrollY)
    // console.log(bean_sec_inner.offsetTop)
    console.log(bean_sec.getBoundingClientRect().y / 20)
    // if(bean_sec.getBoundingClientRect().y == 1){
    // }
    if(window.scrollY == bean_sec_inner.offsetTop){
      bean_sec_inner.style.transform = `translateX(${bean_sec.getBoundingClientRect().y / 20}%)`

    }



    // console.log(bean_sec.getBoundingClientRect().y)
    // console.log(bean_sec.offsetTop)
    // if(bean_sec.getBoundingClientRect().y <= 100 && bean_sec.getBoundingClientRect().y >= -100){
    //   window.scrollTo(0, bean_sec.offsetTop)
    // }


    // console.log(e.deltaY)
    // console.log(window.innerHeight)
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