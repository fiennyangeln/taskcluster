module.exports = `
{
    "buildSystem": "taskcluster",
    "owner": "dummy-taskcluster-tests@mozilla.com",
    "reason": "scheduled",
    "taskId": "e5431347-3804-4851-b706-7f24081c31c5/0",
    "retryId": 0,
    "isRetried": false,
    "display": {
        "jobSymbol": "R3",
        "groupSymbol": "tc-R",
        "jobName": "[TC] Dummy Task",
        "groupName": "Reftest"
    },
    "state": "pending",
    "result": "unknown",
    "tier": 1,
    "timeScheduled": "2016-04-15T18:12:20.561Z",
    "jobKind": "build",
    "labels": [
        "opt"
    ],
    "origin": {
        "kind": "hg.mozilla.org",
        "project": "dummyproject",
        "revision": "dummya98d9bed366c133ebdf1feb5cf365a3c3703a337",
        "pushLogID": 123
    },
    "productName": "b2g",
    "jobInfo": {
        "summary": "Dummy Task Description",
        "links": []
    },
    "buildMachine": {
        "architecture": "-",
        "name": "unknown",
        "os": "-",
        "platform": "b2g-emu-x86-kk"
    }
}`;
