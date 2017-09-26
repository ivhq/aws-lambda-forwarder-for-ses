"use strict";

var config = {
    "attachmentsBucket": process.env.ATTACHMENTS_BUCKET,
    "attachmentsPrefix": process.env.ATTACHMENTS_PREFIX,
    "debug": true,
    "rules": { // first match
        "^info-ritascholarship.org$": { // exact "Object key prefix" match
            "to": process.env.DESTINATION_EMAIL,
            "from": process.env.SOURCE_EMAIL,
            "subject": process.env.SUBJECT_PREFIX,
        }
    }
}

module.exports = config
