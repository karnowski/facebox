function waitsUntilFaceboxLoaded(f) {
  waits(100);
  runs(f);
}

describe("Opening a Facebox", function(){
  afterEach(function(){
    // waits(50);
    
    //TODO: actually clear the entire residue of Facebox from the DOM before each test
    // runs(function(){
    //   $("#facebox").hide();
    // });
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
    
    it("correctly clobbers any previous content if opened a second time", function(){
      $.facebox('first content');
        var firstContent = $('#facebox .content').text();
        expect(firstContent).toEqual('first content');

        $.facebox('second content');        
        var secondContent = $('#facebox .content').text();
        expect(secondContent).toEqual('second content');
    });
  });

  describe("to display an image", function(){
    it('adds Facebox to the DOM', function(){
      $.facebox({ image: 'stairs.jpg' });
      var fb = $('#facebox');
      expect(fb.length).toEqual(1);
    });
    
    it('contains the correct image', function(){
      $.facebox({ image: 'stairs.jpg' });

      waitsUntilFaceboxLoaded(function(){
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

  describe("to display the results of an AJAX call", function(){
    it('adds Facebox to the DOM', function(){
      $.facebox({ ajax: 'remote.html' });
      var fb = $('#facebox');
      expect(fb.length).toEqual(1);
    });
    
    it('contains the correct results', function(){
      $.facebox({ ajax: 'remote.html' });
      
      waitsUntilFaceboxLoaded(function(){
        var ajaxText = $('#facebox .content').text();
        expect(ajaxText).toMatch(/^I'm remote\.html, a different file loaded with ajax\.\s*$/);
      });
    });
    
    // describe("with a style", function(){
    //   it("adds the given class to the content", function(){
    //     $.facebox({ image: 'stairs.jpg' }, "on-a-boat");
    //     var content = $('#facebox .content');
    //     expect(content.hasClass('on-a-boat')).toBeTruthy();
    //   });
    // });
    
    // it("correctly clobbers any previous content if opened a second time", function(){
    //   $.facebox({ ajax: 'remote.html' });
    //   $.facebox({ ajax: 'remote.html' });
    // 
    //   // runs(function(){
    //   //   var ajaxText = $('#facebox .content').text();
    //   //   expect(ajaxText).toMatch(/^I'm remote\.html, a different file loaded with ajax\.\s*$/);
    //   // });
    //   // 
    //   waits(100);
    //     
    //   runs(function(){
    //     var ajaxText = $('#facebox .content').text();
    //     expect(ajaxText).toMatch(/^I'm remote\.html, a different file loaded with ajax\.\s*$/);
    //   });
    // });
    
  });
});
