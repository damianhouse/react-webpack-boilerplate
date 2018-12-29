import { addDecorator, configure } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
import { themes } from "@storybook/components";

// Option defaults.
addDecorator(
    withOptions({
        name: "Foo",
        theme: themes.dark
    })
);

const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
