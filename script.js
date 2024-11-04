//DOM Ready
$(function(){
    $('button').click(function(){
        //alert('clicked');
        
        var name = $('#name-text').val();
        var roll = $('#roll').val();
        var safia = $('#class-text').val();
        var section = $('#section-text').val();
        
        var ban_mark = $('#ban-text').val();
        var eng_mark = $('#eng-text').val();
        var math_mark = $('#math-text').val();
        var phy_mark = $('#phy-text').val();
        var chem_mark = $('#chem-text').val();
        var bio_mark = $('#bio-text').val();
        
        $('#dis-name').text(name);
        $('#dis-roll').text(roll);
        $('#dis-class').text(safia);
        $('.dis-sec').text(section);

        $('#dis-ban').text(ban_mark);
        $('#dis-eng').text(eng_mark);
        $('#dis-math').text(math_mark);
        $('#dis-phy').text(phy_mark);
        $('#dis-chem').text(chem_mark);
        $('#dis-bio').text(bio_mark);
    });
});