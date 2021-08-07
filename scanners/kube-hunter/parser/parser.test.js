// SPDX-FileCopyrightText: 2021 iteratec GmbH
//
// SPDX-License-Identifier: Apache-2.0

const fs = require("fs");
const util = require("util");
const {
  validateParser,
} = require("@securecodebox/parser-sdk-nodejs/parser-utils");

// eslint-disable-next-line security/detect-non-literal-fs-filename
const readFile = util.promisify(fs.readFile);

const { parse } = require("./parser");

test("parses result from kind-1.18-in-cluster-scan correctly", async () => {
  const fileContent = JSON.parse(
    await readFile(
      __dirname + "/__testFiles__/kind-1.18-in-cluster-scan.json",
      {
        encoding: "utf8",
      }
    )
  );
  const findings = await parse(fileContent);
  await expect(validateParser(findings)).resolves.toBeUndefined();
  expect(findings).toMatchSnapshot();
});
