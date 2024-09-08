import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import Landing from "./Landing";
import content from "./Landing.content.ts";

describe("Home route", () => {
    let unmountHome: () => void = () => { };

    beforeEach(() => {
        const { unmount } = render(
            <MemoryRouter>
                <Landing />
            </MemoryRouter>,
        );

        unmountHome = unmount;
    });

    it("renders title", () => {
        const title = screen.getByTestId("landing-title");
        expect(title.textContent).toBe(content.TITLE);
    });

    it("renders description", () => {
        const description = screen.getByTestId("landing-description");
        expect(description.textContent).toBe(content.DESCRIPTION);
    });

    it("renders text on sign up button", () => {
        const button: HTMLButtonElement = screen.getByTestId("landing-button-signup");
        expect(button.textContent).toBe(content.BUTTON_SIGN_UP);
    });

    it("renders text on sign in button", () => {
        const button: HTMLButtonElement = screen.getByTestId("landing-button-signin");
        expect(button.textContent).toBe(content.BUTTON_SIGN_IN);
    });

    it("verifies that sign up button is not disabled", () => {
        const button: HTMLButtonElement = screen.getByTestId("landing-button-signup");
        expect(button.disabled).toBe(false);
    });

    it("verifies that sign in button is not disabled", () => {
        const button: HTMLButtonElement = screen.getByTestId("landing-button-signin");
        expect(button.disabled).toBe(false);
    });

    afterEach(() => {
        unmountHome();
    });
});