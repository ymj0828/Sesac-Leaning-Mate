
window.addEventListener('DOMContentLoaded', () => {
  const menu_left = document.querySelector('.menu_sec .sec_cont_wrap');
  
  const menu_right_li = document.querySelectorAll('.menu_sec .sec_desc_wrap li')
  const menu_left_li = document.querySelectorAll('.menu_sec .sec_cont_wrap li');
  
  window.addEventListener('scroll', ()=>{
    console.log(window.innerHeight)
    // console.log(menu_left.getBoundingClientRect().y);
    // console.log(window.);
    // window.scrollTo(0,0)
    // menu_left.style.top = 0
    // menu_left.getBoundingClientRect().y = 0
    menu_right_li.forEach((ele, index)=>{
      // console.log(menu_right_li[1].getBoundingClientRect().y)
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