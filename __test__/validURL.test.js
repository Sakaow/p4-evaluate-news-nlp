
import { validURL } from "../src/client/js/validURL";

describe("Testing the url input", () => {
    test("Testing the valid url", () => {
        const url = 'https://www.udacity.com/';
        expect(validURL(url)).toBe(true);
    });

    test("Testing the valid url", () => {
        const url = 'http://www.udacity.com/';
        expect(validURL(url)).toBe(true);
    });
});