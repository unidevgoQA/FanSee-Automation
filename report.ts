const { publish, defineConfig } = require('test-results-reporter');

const config = defineConfig({
  "reports": [
    {
      "targets": [
        {
          "name": "teams",
          "inputs": {
            "url": "https://transportedlabs.webhook.office.com/webhookb2/1af1ca62-123b-4948-9a2f-f84e4cb589e6@fee95589-ad46-417d-9636-8b4078359ad9/IncomingWebhook/dbccaaa1799743e38ed4d57ba2b562bc/a6b92662-3ec5-443a-8d4e-10db06594a3c"
          }
        }
      ],
      "results": [
        {
          "type": "testng",
          "files": ["./results.xml"]
        }
      ]
    }
  ]
});

publish({ config })