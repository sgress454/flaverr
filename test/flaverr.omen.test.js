describe('flaverr.omen()', ()=>{

  describe('with `flaverr.omen()`', ()=>{
    it('should return an omen (Error instance)');
    it('should return an omen with `.name === \'Error\'`');
    it('should return `undefined` if process.env.NODE_ENV is set to "production"');
    it('should return an omen if process.env.NODE_ENV is set to "production" BUT process.env.DEBUG is set to anything truthy');
  });

  describe('with `flaverr.omen(caller)`', ()=>{
    it('should return an omen (Error instance)');
    it('should return an omen with `.name === \'Error\'`');
    it('should return an omen with a properly modified stack trace');
    it('should return `undefined` if process.env.NODE_ENV is set to "production"');
    it('should return an omen if process.env.NODE_ENV is set to "production" BUT process.env.DEBUG is set to anything truthy');
  });

});
