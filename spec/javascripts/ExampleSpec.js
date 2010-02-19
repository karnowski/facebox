describe('Example', function () {
  
  afterEach(function(){
    $("#facebox").hide();
  });
  
  describe("Opening a facebox", function(){
    
    describe("with text", function(){
      it('should add the facebox node', function(){
        $.facebox('Oh Hey!');
        var fb = $('#facebox');
        expect(fb.length).toBeTruthy();
      });
      
      it('should contain the correct text', function(){
        $.facebox('Oh Hey!');
        var content = $('#facebox .content');
        expect(content.text()).toEqual('Oh Hey!');
      });
    });
    
  });
});