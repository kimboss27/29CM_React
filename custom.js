const gnb = document.querySelectorAll('.gnb_wrap > .gnb_menu > li ');
    const subli = document.querySelectorAll('.sub li');
    const subbg = document.querySelector('.sub_bg');
    for (let i = 0; i < gnb.length; i++) {
      gnb[i].addEventListener('mouseenter', function (e) {
        if (this.lastChild.classList.contains('sub')) {
          this.lastChild.style.display = 'block';
          subbg.style.display = "block";
        }
        this.classList.add('active');
      })
      gnb[i].addEventListener('mouseleave', function () {
        if (this.lastChild.classList.contains('sub')) {
          this.lastChild.style.display = 'none';
          subbg.style.display = "none"
        }
        this.classList.remove('active');
      })
    }

    for (let s = 0; s < subli.length; s++) {
      subli[s].addEventListener('mouseenter', function (e) {
        this.classList.add('active')
      })
      subli[s].addEventListener('mouseleave', function () {
        this.classList.remove('active')
      })
    }

    const header = document.querySelector('header');
    const headerH = header.offsetHeight;

    window.addEventListener('scroll', function () {
      if (window.scrollY > headerH) {
        header.style.position = "fixed"
      } else if (window.scrollY === 0) {
        header.style.position = "relative"
      }
    });

    const mylike = document.querySelector('.mylike');
    mylike.addEventListener('click', function () {
      window.alert('로그인이 필요한 서비스입니다.')
    });

    const text = document.querySelectorAll(".text")
    for (let t = 0; t < text.length; t++) {
      if (text[t].firstElementChild.childNodes.length === 0) {
        text[t].remove();
      }
    }