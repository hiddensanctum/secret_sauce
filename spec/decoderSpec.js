describe('Decoder', function() {
  it('decodes an encrypted string from the URL', function() {
    // override the getCypherText and getPassword function because
    // we can't access document.URL directly
    // and we can't ask the user for interaction
    decoder.getCypher = function() { decoder.cypher = CryptoJS.AES.encrypt('a test string', 'password'); };
    decoder.getPassword   = function() { decoder.password = 'password'; };
    expect(decoder.solve()).toEqual('a test string');
  });
});
