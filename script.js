$( document ).ready(function() {

  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);


  //hero interaction
  gsap.set($(".hero_h1, #h1_second-line, .arrow-1"), {opacity: 1});

  new cryptoWriter(document.querySelector(".hero_h1"),{
    // the number of random strings of characters displayed before the actual text
    randomRounds: 4,
    // ["letters", "numbers", "lettersCaps", "specialChars"]
    enabledSets: ["letters", "numbers", "lettersCaps"],
    // start the effect when the element is in the viewport
    onVisible: true,
    // delay time
    delayTime: 0,
    // or "same", "empty"
    untilDelay: "random",
    // anmation speed
    // auto = 5 characters/second
    // possible values: "6chars", ...
    completionTime: "8chars",
    // determine if text appears one character at a time or all together
    allAtOnce: false,
  });

  new cryptoWriter(document.querySelector("#h1_second-line"),{
    randomRounds: 4,
    enabledSets: ["letters", "numbers", "lettersCaps"],
    onVisible: true,
    delayTime: 0.005,
    untilDelay: "random",
    completionTime: "5chars",
    allAtOnce: false,
  });

// arrow interaction path 1
    gsap.timeline({
        scrollTrigger: {
          scrub: .5,
          trigger: ".section_home-header",
          start: "top top",
          endTrigger: ".daty_component",
          end: "top center"
        }
      })
      .to(".arrow-1", {
        motionPath: {
          path: "#path-1",
          align: "#path-1",
          alignOrigin: [0.5, 0.5],
          autoRotate: true
        },
        scale: 0.3,
        ease: "none"
      });

    gsap.timeline ({
        scrollTrigger: {
          scrub: .5,
          trigger: ".section_home-header",
          start: "top top",
          endTrigger: ".daty_component",
          end: "top center"
        }
      })
      .to(".arrow-1",{
        color: '#FFC800',
        duration: 1,
        delay: -2
      });

      // path-1 interaction
      var ScrollWrapper = svgScroll.ScrollWrapper;
      var wrappedElement = new ScrollWrapper('#path-1');
      
      window.addEventListener("scroll", function(e) {
        wrappedElement.reveal([0, 0.138], [0, 1]);
      });


  // daty interaction

  gsap.from(".daty_card.is-aplikacji", {
    scrollTrigger: {
      trigger: ".daty_component",
      start: "top 70%"
    },
    xPercent: 100,
    ease: 'expo.inOut',
    duration: 1
  });

  gsap.timeline({ scrollTrigger: {
      trigger: ".daty_component",
      start: "top 70%"
      }
    })
  .from(".daty_card.is-staz", {   
    xPercent: -100,
    ease: 'expo.inOut',
    duration: 1
  })
  .to(".arrow-2", {opacity: 1, duration: 0.2});


  // arrow2 / path2 interaction 
  var ScrollWrapper2 = svgScroll.ScrollWrapper;
  var wrappedElement2 = new ScrollWrapper('#path-2');
  
  window.addEventListener("scroll", function(e) {
    wrappedElement2.reveal([0.15, 0.36], [0, 1]);
  });

  gsap.timeline({
    scrollTrigger: {
      scrub: .5,
      trigger: ".daty_component",
      start: "top 85%",
      endTrigger: "#arrow2-endtrigger",
      end: "bottom bottom"
    }
  })
  .to(".arrow-2", {
    motionPath: {
      path: "#path-2",
      align: "#path-2",
      alignOrigin: [0.5, 0.5],
      autoRotate: true
    },
    scale: 0.5,
    ease: "sine.in"
  });

  // gallery interaction
  $("[gallery='small']").each(function (index) {
    let gallerySmall = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
    gallerySmall.fromTo($(this), {yPercent: -30}, {yPercent: 30, ease: "none"})
    .from($(this).find('img'), {scale: 1.3}, "<");
  });

  
  $("[gallery='medium']").each(function (index) {
    let galleryMedium = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
    galleryMedium.from($(this).find('img'), {scale: 1.3});
  });

  $("[gallery='large']").each(function (index) {
    let galleryLarge = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
    galleryLarge.fromTo($(this), {yPercent: 15}, {yPercent: -15, ease: "none"})
    .from($(this).find('img'), {scale: 1.3}, "<");
  });

  $("[gallery='huge']").each(function (index) {
    let galleryHuge = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
    galleryHuge.fromTo($(this), {yPercent: 30}, {yPercent: -30, ease: "none"})
    .from($(this).find('img'), {scale: 1.3}, "<");
  });


// dots interaction

  let dots = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_offer",
      start: "top center",
    }
  });

  dots.from($(".offer_dot-shape"), {
      scale: 0, 
      ease: "elastic.out(1, 0.3)",
      duration: 0.4,
      stagger: {
        each: 0.1,
        from: "random",
        grid: "auto"
      }
    }).from($(".offer_dot-text"),{
      opacity: 0,
      duration: 0.1,
      stagger: {
        each: 0.1,
        from: "random",
        grid: "auto"
      } 
    }, "<");

  // path-3/arrow3 interaction
  var ScrollWrapper3 = svgScroll.ScrollWrapper;
  var wrappedElement3 = new ScrollWrapper('#path-3');
  
  window.addEventListener("scroll", function(e) {
    wrappedElement3.reveal([0.39, 0.54], [0, 1]);
  });


  gsap.timeline({
    scrollTrigger: {
      scrub: .5,
      trigger: ".section_offer",
      start: "top 15%",
      endTrigger: ".section_proces",
      end: "top -20%"
    }
  })
  .set(".arrow-3", {opacity: 1})
  .to(".arrow-3", {
    motionPath: {
      path: "#path-3",
      align: "#path-3",
      alignOrigin: [0.5, 0.5],
      autoRotate: true
    },
    scale: 1,
    ease: "none",
    color: '#ffc800'
  });


  // big numbers global code, responsive part further down

  function step1 () {
    new cryptoWriter(document.querySelector("#text1"),{
      randomRounds: 3,
      enabledSets: ["letters", "numbers", "lettersCaps"],
      onVisible: false,
      delayTime: 0,
      untilDelay: "random",
      completionTime: "30chars",
      allAtOnce: false,
    });
    gsap.set("#text1",{opacity: 1});
  }

  function step2 () {
    new cryptoWriter(document.querySelector("#text2"),{
      randomRounds: 3,
      enabledSets: ["letters", "numbers", "lettersCaps"],
      onVisible: false,
      delayTime: 0,
      untilDelay: "random",
      completionTime: "30chars",
      allAtOnce: false,
    });
    gsap.set("#text2",{opacity: 1});
  }

  function step3 () {
    new cryptoWriter(document.querySelector("#text3"),{
      randomRounds: 3,
      enabledSets: ["letters", "numbers", "lettersCaps"],
      onVisible: false,
      delayTime: 0,
      untilDelay: "random",
      completionTime: "30chars",
      allAtOnce: false,
    });
    gsap.set("#text3",{opacity: 1});
  }

  function step4 () {
    new cryptoWriter(document.querySelector("#text4"),{
      randomRounds: 3,
      enabledSets: ["letters", "numbers", "lettersCaps"],
      onVisible: false,
      delayTime: 0,
      untilDelay: "random",
      completionTime: "30chars",
      allAtOnce: false,
    });
    gsap.set("#text4",{opacity: 1});
  }
  
  function step5 () {
    new cryptoWriter(document.querySelector("#text5"),{
      randomRounds: 3,
      enabledSets: ["letters", "numbers", "lettersCaps"],
      onVisible: false,
      delayTime: 0,
      untilDelay: "random",
      completionTime: "30chars",
      allAtOnce: false,
    });
    gsap.set("#text5",{opacity: 1});
  }

  let tl = gsap.timeline({
    defaults: {
      force3D: false
      },
    scrollTrigger: {
      snap: {
        snapTo: [0.144, 0.335, 0.525, 0.715, 0.904, 1],
        duration: 0.5,
        delay: 0,
        ease: 'power4.out'
      },
      trigger: ".big-numbers_component",
      start: "top 55%",
      end: "bottom bottom",
      scrub: 0.2
    }
  });


  // final-cta background loop

  gsap.to(".final-cta_background-shape", {rotate: 360, ease: 'none', duration: 40, repeat: -1});


  // responsive animations

  let mm = gsap.matchMedia();
    // desktop
    mm.add("(min-width: 991px)", () => {
            // big numbers
            tl.set($("#text1"), 
              {yPercent: -100, onComplete: function() { step1(); }})
            .set($('#progress-dot-1'), {background: '#232323'})
            .fromTo("#step1", 
              {scale: 0, y: '-2vw'}, 
              {scale: 0.85, y: '15vw', x: '15vw', ease: "power3.in", duration: 4, delay: 1}, "<")
            .to(".proces_header-inner-wrapper", {opacity: 0, duration: 1, ease: 'none'}, "<")
            .set($("#text1"), 
              {yPercent: -200})
            .set($("#text2"), 
              {yPercent: -100, onComplete: function() { step2(); }})
            .set($('#progress-dot-1'), {background: 'none'})
            .set($('#progress-dot-2'), {background: '#232323'})
            .fromTo("#step2", 
              {scale: 0, y: '-2vw'}, 
              { scale: 0.85, y: '50vw', x: '-95vw', ease: "power3.in", duration: 4}, "<")
            .set($("#text2"), 
              {yPercent: -200})
            .set($("#text3"), 
              {yPercent: -100, onComplete: function() { step3(); }})
            .set($('#progress-dot-2'), {background: 'none'})
            .set($('#progress-dot-3'), {background: '#232323'})
            .fromTo("#step3", 
              {scale: 0, y: '-2vw'}, 
              {x: '-40vw', y:'20vw', scale: 0.85, ease: "power3.in", duration: 4}, "<")
            .set($("#text3"), 
              {yPercent: -200})
            .set($("#text4"), 
              {yPercent: -100, onComplete: function() { step4(); }})
            .set($('#progress-dot-3'), {background: 'none'})
            .set($('#progress-dot-4'), {background: '#232323'})
            .fromTo("#step4", 
              {scale: 0, y: '-2vw'}, 
              {x: '-65.2vw', y: '30vw',scale: 0.85, ease: "power3.in", duration: 4}, "<")
            .set($("#text4"), 
              {yPercent: -200})
            .set($("#text5"), 
              {yPercent: -100, onComplete: function() { step5(); }})
            .set($('#progress-dot-4'), {background: 'none'})
            .set($('#progress-dot-5'), {background: '#232323'})
            .fromTo("#step5", 
              {scale: 0, y: '-2vw'}, 
              {x: '-65.2vw', y: '30vw',scale: 0.85, ease: "power3.in", duration: 4}, "<");
    });
    // tablet
    mm.add("(max-width: 991px)", () => {
      $('.nav_hamburger-icon').on('click', function() {
        let menu = $(".nav_menu");
        if(menu.height() === 0) {
          gsap.set($(".nav_menu-link-wrapper"), {display: "flex"})
          gsap.to($(".nav_menu"), {height: "100%", duration: 0.4, ease: "power3.out"})
        } else {
          gsap.set($(".nav_menu-link-wrapper"), {display: "none", delay: 0.4})
          gsap.to($(".nav_menu"), {height: "0%", duration: 0.4, ease: "power3.out"})
        }
      });

      $('.nav_link').on('click', function() {
        gsap.set($(".nav_menu-link-wrapper"), {display: "none", delay: 0.4})
        gsap.to($(".nav_menu"), {height: "0%", duration: 0.4, ease: "power3.out"})
      });
      
      //big numbers
      tl.set($("#text1"), 
          {yPercent: -100, onComplete: function() { step1(); }})
        .set($('#progress-dot-1'), {background: '#232323'})
        .fromTo("#step1", 
          {scale: 0, y: '-2vw'}, 
          {scale: 0.9, y: '75vw', x: '15vw', ease: "power3.in", duration: 4, delay: 1}, "<")
        .to(".proces_header-inner-wrapper", {opacity: 0, duration: 1, ease: 'none'}, "<")
        .set($("#text1"), 
          {yPercent: -200})
        .set($("#text2"), 
          {yPercent: -100, onComplete: function() { step2(); }})
        .set($('#progress-dot-1'), {background: 'none'})
        .set($('#progress-dot-2'), {background: '#232323'})
        .fromTo("#step2", 
          {scale: 0, y: '-2vw', x:'5vw'}, 
          { scale: 0.9, y: '50vw', x: '-110vw', ease: "power3.in", duration: 4}, "<")
        .set($("#text2"), 
          {yPercent: -200})
        .set($("#text3"), 
          {yPercent: -100, onComplete: function() { step3(); }})
        .set($('#progress-dot-2'), {background: 'none'})
        .set($('#progress-dot-3'), {background: '#232323'})
        .fromTo("#step3", 
          {scale: 0, y: '-2vw'}, 
          {x: '-40vw', y:'20vw', scale: 0.9, ease: "power3.in", duration: 4}, "<")
        .set($("#text3"), 
          {yPercent: -200})
        .set($("#text4"), 
          {yPercent: -100, onComplete: function() { step4(); }})
        .set($('#progress-dot-3'), {background: 'none'})
        .set($('#progress-dot-4'), {background: '#232323'})
        .fromTo("#step4", 
          {scale: 0, y: '-2vw'}, 
          {x: '-45vw', y: '-30vw', scale: 0.9, ease: "power3.in", duration: 4}, "<")
        .set($("#text4"), 
          {yPercent: -200})
        .set($("#text5"), 
          {yPercent: -100, onComplete: function() { step5(); }})
        .set($('#progress-dot-4'), {background: 'none'})
        .set($('#progress-dot-5'), {background: '#232323'})
        .fromTo("#step5", 
          {scale: 0, y: '-2vw'}, 
          {x: '-65.2vw', y: '30vw',scale: 0.85, ease: "power3.in", duration: 4}, "<");
  });
});
