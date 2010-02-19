function waitsForAnimation(f) {
  waits(100);
  runs(f);
}

describe("Opening a Facebox", function(){
  afterEach(function(){
    //TODO: actually clear the entire residue of Facebox from the DOM before each test
    $("#facebox").hide();
  });
  
  describe("to display text", function(){
    it('adds Facebox to the DOM', function(){
      $.facebox('Oh Hey!');
      var fb = $('#facebox');
      expect(fb.length).toEqual(1);
    });
    
    it('contains the correct text', function(){
      $.facebox('Oh Hey!');
      var content = $('#facebox .content');
      expect(content.text()).toEqual('Oh Hey!');
    });
    
    describe("with a style", function(){
      it("adds the given class to the content", function(){
        $.facebox('Oh Hey!', 'on-a-boat');
        var content = $('#facebox .content');
        expect(content.hasClass('on-a-boat')).toBeTruthy();
      });
    });
  });

  describe("to display an image", function(){
    it('add Facebox to the DOM', function(){
      $.facebox({ image: 'stairs.jpg' });
      var fb = $('#facebox');
      expect(fb.length).toEqual(1);
    });
    
    it('contains the correct image', function(){
      $.facebox({ image: 'stairs.jpg' });

      waitsForAnimation(function(){
        var imageSrc = $('#facebox .content img').attr("src");
        expect(imageSrc).toEqual("http://localhost:8888/stairs.jpg");
      });
    });
    
    describe("with a style", function(){
      it("adds the given class to the content", function(){
        $.facebox({ image: 'stairs.jpg' }, "on-a-boat");
        var content = $('#facebox .content');
        expect(content.hasClass('on-a-boat')).toBeTruthy();
      });
    });
  });
});
