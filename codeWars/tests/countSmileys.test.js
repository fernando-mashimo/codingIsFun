const countSmileys = require("../countSmileys");

describe('Verify if countSmileys function returns expected results', () => {
    it('countSmileys is a function', () => {
      expect(typeof countSmileys).toBe('function');
    });

    it('countSmileys([":)", ";(", ";}", ":-D"]) should return 2', () => {
      expect(countSmileys([":)", ";(", ";}", ":-D"])).toBe(2);
    });

    it('countSmileys([";D", ":-(", ":-)", ";~)"]) should return 3', () => {
      expect(countSmileys([";D", ":-(", ":-)", ";~)"])).toBe(3);
    });

    it('countSmileys([";]", ":[", ";*", ":$", ";-D"]) should return 1', () => {
      expect(countSmileys([";]", ":[", ";*", ":$", ";-D"])).toBe(1);
    });
});