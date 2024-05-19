
    var input = document.getElementById('input');
    var big = document.getElementById('big');
    var subHeading = document.getElementById('subHeading');
    var normal = document.getElementById('normal');

    big.addEventListener('click', function() {
        input.style.fontSize = "32px";
    });

    subHeading.addEventListener('click', function() {
        input.style.fontSize = "24px";
    });

    normal.addEventListener('click', function() {
        input.style.fontSize = "16px";
    });

    var SailecLight = document.getElementById('SailecLight');
    var SofiaPro = document.getElementById('SofiaPro');
    var Slabo13px = document.getElementById('Slabo13px');
    var RobotoSlab = document.getElementById('RobotoSlab');
    var Inconsolata = document.getElementById('Inconsolata');
    var UbuntuMono = document.getElementById('UbuntuMono');

    SailecLight.addEventListener('click', function() {
        input.className = '';
        input.classList.add('SailecLight');
    });

    SofiaPro.addEventListener('click', function() {
        input.className = '';
        input.classList.add('SofiaPro');
    });

    Slabo13px.addEventListener('click', function() {
        input.className = '';
        input.classList.add('Slabo13px');
    });

    RobotoSlab.addEventListener('click', function() {
        input.className = '';
        input.classList.add('RobotoSlab');
    });

    Inconsolata.addEventListener('click', function() {
        input.className = '';
        input.classList.add('Inconsolata');
    });

    UbuntuMono.addEventListener('click', function() {
        input.className = '';
        input.classList.add('UbuntuMono');
    });

    var bold = document.getElementById('bold');
    var italic = document.getElementById('italic');
    var underLine = document.getElementById('underLine');

    bold.addEventListener('click', function() {
        input.classList.toggle('bold');
    });

    italic.addEventListener('click', function() {
        input.classList.toggle('italic');
    });

    underLine.addEventListener('click', function() {
        input.classList.toggle('underLine');
    });

    
    var input = document.getElementById('input');
        var numLst = document.getElementById('numLst');
        var dotLst = document.getElementById('dotLst');
    
        numLst.addEventListener('click', function() {
            input.style.listStyleType = "decimal";
        });
    
        dotLst.addEventListener('click', function() {
            input.style.listStyleType = "disc";
        });

    
    var alignRight = document.getElementById('alignRight');
    var alignLeft = document.getElementById('alignLeft');
    var justify = document.getElementById('justify');

    justify.addEventListener('click', function() {
        input.classList.toggle('justify');
    });

    alignRight.addEventListener('click', function() {
        input.classList.toggle('alignRight');
    });

    alignLeft.addEventListener('click', function() {
        input.classList.toggle('alignLeft');
    });

