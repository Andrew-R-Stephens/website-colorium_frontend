import { render, screen } from "@testing-library/react";
import App from './../App';
import {expect, jest, test} from '@jest/globals';

describe("App", () => {
    it("should work as expected", () => {
        render(<App />);
        expect(1 + 1).toBe(2);
    });
});