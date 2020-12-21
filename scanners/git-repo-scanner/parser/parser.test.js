const fs = require("fs");
const util = require("util");

// eslint-disable-next-line security/detect-non-literal-fs-filename
const readFile = util.promisify(fs.readFile);

const { parse } = require("./parser");

test("should properly parse git-scanner json file", async () => {
  const jsonContent = await readFile(
    __dirname + "/__testFiles__/git-scanner-test-findings.json",
    {
      encoding: "utf8"
    }
  );
  expect(await parse(JSON.parse(jsonContent))).toMatchInlineSnapshot(`
    Array [
      Object {
        "attributes": Object {
          "created_at": "2017-02-02T09:48:05Z",
          "full_name": "secureCodeBox/secureCodeBox",
          "id": 80711933,
          "last_activity_at": "2020-10-23T08:59:27Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/secureCodeBox",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2018-03-01T10:50:05Z",
          "full_name": "secureCodeBox/engine",
          "id": 123422137,
          "last_activity_at": "2020-10-07T08:07:32Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/engine",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2018-03-08T14:20:36Z",
          "full_name": "secureCodeBox/scanner-infrastructure-nmap",
          "id": 124402117,
          "last_activity_at": "2020-09-14T15:40:40Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/scanner-infrastructure-nmap",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2018-03-20T15:48:39Z",
          "full_name": "secureCodeBox/nodejs-scanner-scaffolding",
          "id": 126042943,
          "last_activity_at": "2020-07-16T10:37:40Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/nodejs-scanner-scaffolding",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2018-04-06T13:13:14Z",
          "full_name": "secureCodeBox/scanner-webserver-nikto",
          "id": 128396681,
          "last_activity_at": "2020-06-25T10:11:41Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/scanner-webserver-nikto",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2018-04-10T11:17:29Z",
          "full_name": "secureCodeBox/scanner-webapplication-zap",
          "id": 128920739,
          "last_activity_at": "2020-10-07T14:05:09Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/scanner-webapplication-zap",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2018-05-15T11:43:11Z",
          "full_name": "secureCodeBox/scanner-infrastructure-sslyze",
          "id": 133507929,
          "last_activity_at": "2020-07-16T10:52:54Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/scanner-infrastructure-sslyze",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2018-05-24T06:47:00Z",
          "full_name": "secureCodeBox/scanner-webapplication-arachni",
          "id": 134673181,
          "last_activity_at": "2020-10-10T10:29:42Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/scanner-webapplication-arachni",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2018-07-18T16:38:18Z",
          "full_name": "secureCodeBox/scanner-infrastructure-amass",
          "id": 141462466,
          "last_activity_at": "2020-03-17T18:59:35Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/scanner-infrastructure-amass",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2018-07-30T12:13:41Z",
          "full_name": "secureCodeBox/integration-pipeline-jenkins-examples",
          "id": 142870794,
          "last_activity_at": "2020-09-27T18:59:24Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/integration-pipeline-jenkins-examples",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2018-08-16T08:11:15Z",
          "full_name": "secureCodeBox/ansible-role-securecodebox-openshift",
          "id": 144957631,
          "last_activity_at": "2019-04-17T13:36:12Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/ansible-role-securecodebox-openshift",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2018-12-12T15:21:02Z",
          "full_name": "secureCodeBox/django-DefectDojo",
          "id": 161506648,
          "last_activity_at": "2019-01-09T08:41:31Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/django-DefectDojo",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2019-02-18T14:23:57Z",
          "full_name": "secureCodeBox/scanner-infrastructure-ssh",
          "id": 171298120,
          "last_activity_at": "2020-06-25T10:11:16Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/scanner-infrastructure-ssh",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2019-04-10T09:03:38Z",
          "full_name": "secureCodeBox/scanner-cms-wpscan",
          "id": 180543766,
          "last_activity_at": "2020-06-25T10:12:29Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/scanner-cms-wpscan",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2019-04-10T11:39:04Z",
          "full_name": "secureCodeBox/ruby-scanner-scaffolding",
          "id": 180568880,
          "last_activity_at": "2020-03-11T14:20:03Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/ruby-scanner-scaffolding",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2019-08-21T13:21:09Z",
          "full_name": "secureCodeBox/securecodebox.github.io",
          "id": 203588805,
          "last_activity_at": "2020-10-16T11:40:25Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/securecodebox.github.io",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2019-08-26T14:11:02Z",
          "full_name": "secureCodeBox/gatsby-gh-pages-action",
          "id": 204489733,
          "last_activity_at": "2019-08-26T14:11:05Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/gatsby-gh-pages-action",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2019-08-27T12:46:48Z",
          "full_name": "secureCodeBox/ssh_scan",
          "id": 204701677,
          "last_activity_at": "2019-08-27T12:53:11Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/ssh_scan",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2019-10-11T11:28:15Z",
          "full_name": "secureCodeBox/swagger-petstore-openshift",
          "id": 214418800,
          "last_activity_at": "2019-10-11T11:37:41Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/swagger-petstore-openshift",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2019-11-19T11:25:21Z",
          "full_name": "secureCodeBox/nikto",
          "id": 222679857,
          "last_activity_at": "2020-03-21T12:43:04Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/nikto",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2019-11-25T13:34:16Z",
          "full_name": "secureCodeBox/scanner-infrastructure-ncrack",
          "id": 223956455,
          "last_activity_at": "2020-07-19T11:16:33Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/scanner-infrastructure-ncrack",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2020-03-24T14:33:08Z",
          "full_name": "secureCodeBox/secureCodeBox-v2",
          "id": 249731346,
          "last_activity_at": "2020-10-22T08:39:01Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/secureCodeBox-v2",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2020-03-29T10:40:12Z",
          "full_name": "secureCodeBox/zap-extensions",
          "id": 251007807,
          "last_activity_at": "2020-03-29T10:40:13Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/zap-extensions",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2020-07-07T14:14:16Z",
          "full_name": "secureCodeBox/zaproxy",
          "id": 277835641,
          "last_activity_at": "2020-07-07T14:14:18Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/zaproxy",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2020-08-07T17:58:52Z",
          "full_name": "secureCodeBox/static-export",
          "id": 285890805,
          "last_activity_at": "2020-08-12T12:53:05Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "private",
          "web_url": "https://github.com/secureCodeBox/static-export",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2020-08-17T15:09:19Z",
          "full_name": "secureCodeBox/telemetry",
          "id": 288212154,
          "last_activity_at": "2020-09-01T10:08:23Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/telemetry",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2020-09-02T13:39:10Z",
          "full_name": "secureCodeBox/documentation",
          "id": 292293538,
          "last_activity_at": "2020-10-21T14:28:35Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/documentation",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2020-09-03T13:08:22Z",
          "full_name": "secureCodeBox/ui",
          "id": 292573194,
          "last_activity_at": "2020-10-07T14:38:02Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "private",
          "web_url": "https://github.com/secureCodeBox/ui",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2020-09-28T08:58:53Z",
          "full_name": "secureCodeBox/internal",
          "id": 299249650,
          "last_activity_at": "2020-10-21T15:11:56Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "private",
          "web_url": "https://github.com/secureCodeBox/internal",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
      Object {
        "attributes": Object {
          "created_at": "2020-10-12T09:58:26Z",
          "full_name": "secureCodeBox/kubeaudit",
          "id": 303349727,
          "last_activity_at": "2020-10-12T09:58:28Z",
          "owner_id": 34573705,
          "owner_name": "secureCodeBox",
          "owner_type": "Organization",
          "visibility": "public",
          "web_url": "https://github.com/secureCodeBox/kubeaudit",
        },
        "category": "Git Repository",
        "description": "A GitHub repository",
        "name": "GitHub Repo",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
      },
    ]
  `);
});
