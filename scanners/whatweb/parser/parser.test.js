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

test("should properly parse whatweb xml file", async () => {
  const xmlContent = await readFile(
    __dirname + "/__testFiles__/example.com.xml",
    {
      encoding: "utf8",
    }
  );
  const findings = await parse(xmlContent);
  // validate findings
  await expect(validateParser(findings)).resolves.toBeUndefined();
  expect(findings).toMatchInlineSnapshot(`
Array [
  Object {
    "attributes": Object {
      "Country": "EUROPEAN UNION EU",
      "HTML5": "",
      "HTTPServer": "ECS (dcb/7EEA)",
      "ipAddress": "93.184.216.34",
      "requestConfig": Object {
        "headerName": "User-Agent",
        "headerValue": "WhatWeb/0.5.0",
      },
    },
    "category": "WEB APPLICATION",
    "description": "Example Domain",
    "location": "http://example.com",
    "name": "http://example.com",
    "osi_layer": "NETWORK",
    "severity": "INFORMATIONAL",
  },
]
`);
});

test("should properly parse xml with empty target results file", async () => {
  const xmlContent = await readFile(
    __dirname + "/__testFiles__/somedomain.com.xml",
    {
      encoding: "utf8",
    }
  );
  const findings = await parse(xmlContent);
  // validate findings
  await expect(validateParser(findings)).resolves.toBeUndefined();
  expect(findings).toMatchInlineSnapshot(`
Array [
  Object {
    "attributes": Object {
      "Country": "INDIA IN",
      "RedirectLocation": "https://test.somedomain.org/",
      "ipAddress": "222.111.000.16",
      "requestConfig": Object {
        "headerName": "User-Agent",
        "headerValue": "WhatWeb/0.4.9",
      },
    },
    "category": "WEB APPLICATION",
    "description": null,
    "location": "http://test.somedomain.org",
    "name": "http://test.somedomain.org",
    "osi_layer": "NETWORK",
    "severity": "INFORMATIONAL",
  },
  Object {
    "attributes": Object {
      "ipAddress": null,
      "requestConfig": Object {
        "headerName": "User-Agent",
        "headerValue": "WhatWeb/0.4.9",
      },
    },
    "category": "WEB APPLICATION",
    "description": null,
    "location": "https://test.somedomain.org/",
    "name": "https://test.somedomain.org/",
    "osi_layer": "NETWORK",
    "severity": "INFORMATIONAL",
  },
]
`);
});

test("should properly parse two xml with two targets", async () => {
  const xmlContent = await readFile(
    __dirname + "/__testFiles__/two-domains.xml",
    {
      encoding: "utf8",
    }
  );
  const findings = await parse(xmlContent);
  // validate findings
  await expect(validateParser(findings)).resolves.toBeUndefined();
  expect(findings).toMatchInlineSnapshot(`
Array [
  Object {
    "attributes": Object {
      "Country": "EUROPEAN UNION EU",
      "HTML5": "",
      "HTTPServer": "ECS (dcb/7F5E)",
      "ipAddress": "93.184.216.34",
      "requestConfig": Object {
        "headerName": "User-Agent",
        "headerValue": "WhatWeb/0.5.0",
      },
    },
    "category": "WEB APPLICATION",
    "description": "Example Domain",
    "location": "http://example.com",
    "name": "http://example.com",
    "osi_layer": "NETWORK",
    "severity": "INFORMATIONAL",
  },
  Object {
    "attributes": Object {
      "Country": "EUROPEAN UNION EU",
      "HTML5": "",
      "HTTPServer": "ECS (dcb/7EEA)",
      "ipAddress": "93.184.216.34",
      "requestConfig": Object {
        "headerName": "User-Agent",
        "headerValue": "WhatWeb/0.5.0",
      },
    },
    "category": "WEB APPLICATION",
    "description": "Example Domain",
    "location": "http://example.com",
    "name": "http://example.com",
    "osi_layer": "NETWORK",
    "severity": "INFORMATIONAL",
  },
]
`);
});

test("should properly parse whatweb xml file of securecodebox.io", async () => {
  const xmlContent = await readFile(
    __dirname + "/__testFiles__/securecodebox.io.xml",
    {
      encoding: "utf8",
    }
  );
  const findings = await parse(xmlContent);
  // validate findings
  await expect(validateParser(findings)).resolves.toBeUndefined();
  expect(findings).toMatchInlineSnapshot(`
Array [
  Object {
    "attributes": Object {
      "HTML5": "",
      "HTTPServer": "GitHub.com",
      "Meta-Refresh-Redirect": "https://docs.securecodebox.io/",
      "Strict-Transport-Security": "max-age=31556952",
      "UncommonHeaders": "access-control-allow-origin,x-proxy-cache,x-github-request-id,x-served-by,x-cache-hits,x-timer,x-fastly-request-id",
      "Via-Proxy": "1.1 varnish",
      "ipAddress": "185.199.108.153",
      "requestConfig": Object {
        "headerName": "User-Agent",
        "headerValue": "WhatWeb/0.5.0",
      },
    },
    "category": "WEB APPLICATION",
    "description": "secureCodeBox %E2 Testing your Software Security",
    "location": "https://www.securecodebox.io",
    "name": "https://www.securecodebox.io",
    "osi_layer": "NETWORK",
    "severity": "INFORMATIONAL",
  },
  Object {
    "attributes": Object {
      "Country": "UNITED STATES US",
      "HTML5": "",
      "HTTPServer": "Netlify",
      "MetaGenerator": "Docusaurus v2.0.0-beta.3",
      "Open-Graph-Protocol": "",
      "Script": "",
      "Strict-Transport-Security": "max-age=31536000",
      "UncommonHeaders": "x-nf-request-id",
      "ipAddress": "206.189.52.23",
      "requestConfig": Object {
        "headerName": "User-Agent",
        "headerValue": "WhatWeb/0.5.0",
      },
    },
    "category": "WEB APPLICATION",
    "description": null,
    "location": "https://docs.securecodebox.io/",
    "name": "https://docs.securecodebox.io/",
    "osi_layer": "NETWORK",
    "severity": "INFORMATIONAL",
  },
]
`);
});
